import { useEffect, useRef, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { subscribeLobby, advanceToVoting } from './lib/lobby'
import { subscribeRound } from './lib/round'
import { submitEntry, getSubmission } from './lib/submission'
import { loadDraft, saveDraft, clearDraft } from './lib/draft'
import { getTargetById } from './lib/targets'
import { getPlayerId } from './lib/playerId'
import SandboxFrame from './SandboxFrame'

const DEFAULT_HTML = '<div class="box">edit me</div>'
const DEFAULT_CSS = '.box {\n  background: steelblue;\n  color: white;\n  width: 200px;\n  height: 100px;\n}'
// How long to wait past endsAt before assuming a player has no active client
// and force-submitting empty on their behalf — see the effect below.
const OTHERS_GRACE_MS = 4000

export default function Round() {
  const { code } = useParams()
  const [lobby, setLobby] = useState(undefined)
  const [round, setRound] = useState(undefined)
  const [html, setHtml] = useState(DEFAULT_HTML)
  const [css, setCss] = useState(DEFAULT_CSS)
  const [showTarget, setShowTarget] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [restored, setRestored] = useState(false)
  const [submittedLocally, setSubmittedLocally] = useState(false)
  const [now, setNow] = useState(() => Date.now())
  const selfAutoSubmitFired = useRef(false)
  const othersAutoSubmitFired = useRef(false)

  const playerId = getPlayerId()

  useEffect(() => {
    const interval = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (!code) return
    return subscribeLobby(code, setLobby)
  }, [code])

  useEffect(() => {
    if (!code) return
    return subscribeRound(code, setRound)
  }, [code])

  // Restore this player's own content once, after the round doc loads: their
  // already-submitted entry takes priority (it's the source of truth once
  // locked in), otherwise fall back to their local unsent draft.
  useEffect(() => {
    if (round === undefined || restored) return
    let cancelled = false
    const alreadySubmitted = (round?.submittedPlayerIds || []).includes(playerId)

    if (alreadySubmitted) {
      getSubmission(code, playerId).then((sub) => {
        if (cancelled) return
        if (sub) {
          setHtml(sub.html)
          setCss(sub.css)
        }
        setSubmittedLocally(true)
        setRestored(true)
      })
    } else {
      const draft = loadDraft(code, playerId)
      if (draft) {
        setHtml(draft.html)
        setCss(draft.css)
      }
      setRestored(true)
    }

    return () => {
      cancelled = true
    }
  }, [round, code, playerId, restored])

  // Keep the local draft current while the player is still editing, so a
  // refresh before submitting doesn't lose their work either.
  useEffect(() => {
    if (!restored) return
    const alreadySubmitted = (round?.submittedPlayerIds || []).includes(playerId)
    if (alreadySubmitted) return
    saveDraft(code, playerId, { html, css })
  }, [html, css, restored, round, code, playerId])

  // Every connected client watches for "everyone's submitted" and writes the
  // status flip itself — no single elected writer. Multiple clients racing
  // to write status: "voting" is harmless since it's the same value each
  // time, so no coordination is needed.
  useEffect(() => {
    if (!round || !lobby) return
    if (lobby.status !== 'round') return
    const submittedCount = (round.submittedPlayerIds || []).length
    const playerCount = (lobby.players || []).length
    if (playerCount > 0 && submittedCount >= playerCount) {
      advanceToVoting(code).catch((err) => setError(err.message))
    }
  }, [round, lobby, code])

  // At timer zero, this client submits its own current editor content for
  // itself. Deliberately gated on local state (submittedLocally), NOT on
  // round.submittedPlayerIds: every tab runs its own independent 1s
  // interval, so tabs don't cross the endsAt threshold at the same instant.
  // If another (faster) client's "cover for others" pass below already wrote
  // an empty placeholder on this player's behalf before this tick ran,
  // round.submittedPlayerIds would already list this player — and gating on
  // that shared value would make this client wrongly skip submitting its
  // own real content, permanently stranding it behind someone else's
  // placeholder write.
  useEffect(() => {
    if (!round) return
    if (selfAutoSubmitFired.current || submittedLocally) return
    if (now < round.endsAt) return

    selfAutoSubmitFired.current = true
    submitEntry(code, playerId, html, css)
      .then(() => {
        setSubmittedLocally(true)
        clearDraft(code, playerId)
      })
      .catch((err) => setError(err.message))
  }, [now, round, submittedLocally, code, playerId, html, css])

  // Separately, cover for players who have no active client to submit for
  // themselves (closed tab, never connected) by writing an empty submission
  // on their behalf. Multiple clients racing to do this for the same missing
  // player is tolerated, same as the voting-status flip above.
  //
  // Delayed by OTHERS_GRACE_MS past endsAt: a genuinely-connected player's
  // own tab writes for itself immediately at endsAt (see the effect above),
  // but that write still needs a round trip to Firestore and back through
  // this tab's listener before round.submittedPlayerIds (read below) reflects
  // it. Firing this pass at the same instant as the self-write raced against
  // that propagation delay and randomly clobbered real submissions with
  // empty ones. The grace period gives real self-writes time to land first.
  useEffect(() => {
    if (!round || !lobby) return
    if (othersAutoSubmitFired.current) return
    if (now < round.endsAt + OTHERS_GRACE_MS) return

    const submittedSet = new Set(round.submittedPlayerIds || [])
    const pending = (lobby.players || []).filter((p) => p.id !== playerId && !submittedSet.has(p.id))
    if (pending.length === 0) return

    othersAutoSubmitFired.current = true
    Promise.allSettled(pending.map((p) => submitEntry(code, p.id, '', '')))
  }, [now, round, lobby, code, playerId])

  if (lobby === undefined || round === undefined) {
    return (
      <div className="flex flex-col items-center justify-center grow p-8">
        <p>Loading round...</p>
      </div>
    )
  }

  if (lobby === null) {
    return (
      <div className="flex flex-col items-center justify-center grow p-8">
        <p className="mb-4">No lobby found for code "{code}".</p>
        <Link to="/" className="text-sky-600 dark:text-sky-400 font-medium">Go home</Link>
      </div>
    )
  }

  const target = round ? getTargetById(round.targetId) : null
  const hasSubmitted = (round?.submittedPlayerIds || []).includes(playerId)
  const remainingSeconds = round ? Math.max(0, Math.ceil((round.endsAt - now) / 1000)) : 0
  const timeUp = round ? now >= round.endsAt : false
  const minutes = Math.floor(remainingSeconds / 60)
  const seconds = remainingSeconds % 60
  const timeLabel = `${minutes}:${String(seconds).padStart(2, '0')}`

  async function handleSubmit() {
    if (!round) {
      setError('Round not found yet, please wait a moment and try again')
      return
    }
    setError('')
    setSubmitting(true)
    try {
      await submitEntry(code, playerId, html, css)
      setSubmittedLocally(true)
      clearDraft(code, playerId)
    } catch (err) {
      setError(err.message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col grow w-full p-8 gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Round in progress</h2>
        <div className="flex items-center gap-4">
          <p className={`text-xl font-mono font-bold ${timeUp ? 'text-red-600 dark:text-red-400' : 'text-slate-900 dark:text-slate-100'}`}>
            {timeUp ? "Time's up" : timeLabel}
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-400">Lobby: <span className="font-mono">{lobby.code}</span></p>
        </div>
      </div>

      {error && (
        <div className="p-3 rounded-md bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300 text-sm">
          {error}
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-4 grow min-h-0">
        <div className="flex flex-col gap-4 min-h-0">
          <div className="flex flex-col grow min-h-0">
            <label className="text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">HTML</label>
            <textarea
              value={html}
              onChange={(e) => setHtml(e.target.value)}
              spellCheck={false}
              disabled={hasSubmitted || timeUp}
              className="grow min-h-[120px] font-mono text-sm p-3 rounded-md bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 resize-none disabled:opacity-60"
            />
          </div>
          <div className="flex flex-col grow min-h-0">
            <label className="text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">CSS</label>
            <textarea
              value={css}
              onChange={(e) => setCss(e.target.value)}
              spellCheck={false}
              disabled={hasSubmitted || timeUp}
              className="grow min-h-[120px] font-mono text-sm p-3 rounded-md bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 resize-none disabled:opacity-60"
            />
          </div>

          {hasSubmitted ? (
            <p className="text-sm text-slate-600 dark:text-slate-400">Submitted — waiting for other players...</p>
          ) : timeUp ? (
            <p className="text-sm text-slate-600 dark:text-slate-400">Time's up — submitting your entry...</p>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={submitting}
              className="px-5 py-2.5 bg-sky-600 hover:bg-sky-500 disabled:opacity-50 text-white font-medium rounded-lg transition-colors"
            >
              {submitting ? 'Submitting...' : 'Submit'}
            </button>
          )}
        </div>

        <div className="flex flex-col min-h-0">
          <div className="flex items-center justify-between mb-1">
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
              {showTarget ? 'Target reference' : 'Your preview'}
            </label>
            <button
              onClick={() => setShowTarget((v) => !v)}
              disabled={!target}
              className="px-3 py-1.5 text-sm bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600 disabled:opacity-50 text-slate-800 dark:text-slate-200 font-medium rounded-md transition-colors"
            >
              Swap
            </button>
          </div>
          <div className="grow min-h-[240px] rounded-md overflow-hidden border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-900">
            {showTarget ? (
              target ? (
                <img
                  src={target.referenceImage}
                  alt="Target reference"
                  className="w-full h-full object-contain"
                />
              ) : (
                <div className="flex items-center justify-center h-full text-slate-500">No target for this round</div>
              )
            ) : (
              <SandboxFrame html={html} css={css} title="your submission preview" className="h-full" />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
