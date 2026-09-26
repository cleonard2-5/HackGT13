import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { subscribeLobby } from './lib/lobby'
import { subscribeRound } from './lib/round'
import { getTargetById } from './lib/targets'
import SandboxFrame from './SandboxFrame'

const DEFAULT_HTML = '<div class="box">edit me</div>'
const DEFAULT_CSS = '.box {\n  background: steelblue;\n  color: white;\n  width: 200px;\n  height: 100px;\n}'

export default function Round() {
  const { code } = useParams()
  const [lobby, setLobby] = useState(undefined)
  const [round, setRound] = useState(undefined)
  const [html, setHtml] = useState(DEFAULT_HTML)
  const [css, setCss] = useState(DEFAULT_CSS)
  const [showTarget, setShowTarget] = useState(false)

  useEffect(() => {
    if (!code) return
    return subscribeLobby(code, setLobby)
  }, [code])

  useEffect(() => {
    if (!code) return
    return subscribeRound(code, setRound)
  }, [code])

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

  return (
    <div className="flex flex-col grow w-full p-8 gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Round in progress</h2>
        <p className="text-sm text-slate-600 dark:text-slate-400">Lobby: <span className="font-mono">{lobby.code}</span></p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 grow min-h-0">
        <div className="flex flex-col gap-4 min-h-0">
          <div className="flex flex-col grow min-h-0">
            <label className="text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">HTML</label>
            <textarea
              value={html}
              onChange={(e) => setHtml(e.target.value)}
              spellCheck={false}
              className="grow min-h-[120px] font-mono text-sm p-3 rounded-md bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 resize-none"
            />
          </div>
          <div className="flex flex-col grow min-h-0">
            <label className="text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">CSS</label>
            <textarea
              value={css}
              onChange={(e) => setCss(e.target.value)}
              spellCheck={false}
              className="grow min-h-[120px] font-mono text-sm p-3 rounded-md bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 resize-none"
            />
          </div>
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
