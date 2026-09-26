import { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import Navbar from './Navbar'
import { subscribeLobby, updateLobbySettings, startRound } from './lib/lobby'
import { getPlayerId } from './lib/playerId'

const DIFFICULTIES = ['easy', 'medium', 'hard']

export default function Lobby() {
  const { code } = useParams()
  const navigate = useNavigate()
  const [lobby, setLobby] = useState(undefined) // undefined = loading, null = not found
  const [error, setError] = useState('')

  const playerId = getPlayerId()

  useEffect(() => {
    if (!code) return
    const unsubscribe = subscribeLobby(code, setLobby)
    return unsubscribe
  }, [code])

  // All connected clients react to the status change themselves, rather than
  // only the player who clicked Start navigating locally.
  useEffect(() => {
    if (lobby?.status === 'round') {
      navigate(`/round/${code}`)
    }
  }, [lobby?.status, code, navigate])

  if (!code) {
    return (
      <div className="flex flex-col items-center justify-center grow p-8">
        <p className="mb-4">No lobby code in the URL.</p>
        <Link to="/" className="text-sky-600 dark:text-sky-400 font-medium">Go home</Link>
      </div>
    )
  }

  if (lobby === undefined) {
    return (
      <div className="flex flex-col items-center justify-center grow p-8">
        <p>Loading lobby...</p>
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

  const isHost = lobby.hostId === playerId
  const navbarPlayers = (lobby.players || []).map((p) => ({ ...p, isSelf: p.id === playerId }))

  async function handleSettingChange(key, value) {
    setError('')
    try {
      await updateLobbySettings(code, { ...lobby.settings, [key]: value })
    } catch (err) {
      setError(err.message)
    }
  }

  async function handleStart() {
    setError('')
    try {
      await startRound(code)
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className="flex grow w-full">
      <Navbar type="players" items={navbarPlayers} />

      <div className="flex flex-col items-center justify-center grow p-8">
        <div className="w-full max-w-2xl p-8 bg-slate-200/50 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-800 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">Lobby</h2>

          <div className="mb-6 p-4 bg-slate-300/50 dark:bg-slate-900/50 rounded-lg border border-slate-300 dark:border-slate-700">
            <strong className="text-slate-900 dark:text-slate-100">Code:</strong>{' '}
            <span className="text-sky-600 dark:text-sky-400 font-mono text-xl tracking-widest">{lobby.code}</span>
          </div>

          <p className="mb-6">
            <strong className="text-slate-900 dark:text-slate-100">{navbarPlayers.length}</strong> player(s) connected
          </p>

          {error && (
            <div className="mb-4 p-3 rounded-md bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300 text-sm">
              {error}
            </div>
          )}

          <div className="p-4 bg-slate-300/50 dark:bg-slate-900/50 rounded-lg border border-slate-300 dark:border-slate-700 mb-6">
            <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">
              Settings {!isHost && <span className="text-sm font-normal text-slate-500 dark:text-slate-400">(set by host)</span>}
            </h3>

            <label className="block text-sm mb-1 text-slate-700 dark:text-slate-300">Time limit (seconds)</label>
            {isHost ? (
              <input
                type="number"
                className="w-full mb-4 px-3 py-2 rounded-md bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700"
                value={lobby.settings?.timeLimit ?? 120}
                onChange={(e) => handleSettingChange('timeLimit', Number(e.target.value))}
              />
            ) : (
              <p className="mb-4 text-slate-900 dark:text-slate-100">{lobby.settings?.timeLimit ?? 120}s</p>
            )}

            <label className="block text-sm mb-1 text-slate-700 dark:text-slate-300">Difficulty</label>
            {isHost ? (
              <div className="flex gap-2 mb-4">
                {DIFFICULTIES.map((d) => (
                  <button
                    key={d}
                    onClick={() => handleSettingChange('difficulty', d)}
                    className={`px-3 py-1.5 rounded-md font-medium capitalize transition-colors ${
                      lobby.settings?.difficulty === d
                        ? 'bg-sky-600 text-white'
                        : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            ) : (
              <p className="mb-4 text-slate-900 dark:text-slate-100 capitalize">{lobby.settings?.difficulty ?? 'easy'}</p>
            )}

            {isHost && (
              <button
                onClick={handleStart}
                className="w-full px-5 py-2.5 bg-sky-600 hover:bg-sky-500 text-white font-medium rounded-lg transition-colors"
              >
                Start
              </button>
            )}
          </div>

          {!isHost && (
            <p className="text-slate-600 dark:text-slate-400">Waiting for the host to start the round...</p>
          )}
        </div>
      </div>
    </div>
  )
}
