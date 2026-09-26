import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createLobby, joinLobby } from './lib/lobby'
import { getPlayerId } from './lib/playerId'

export default function Home() {
  const navigate = useNavigate()
  const [hostName, setHostName] = useState('')
  const [joinName, setJoinName] = useState('')
  const [joinCode, setJoinCode] = useState('')
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)

  async function handleCreate() {
    setError('')
    if (!hostName.trim()) {
      setError('Enter a name to host the lobby')
      return
    }
    setBusy(true)
    try {
      const playerId = getPlayerId()
      const code = await createLobby({ id: playerId, name: hostName.trim() })
      navigate(`/lobby/${code}`)
    } catch (err) {
      setError(err.message)
    } finally {
      setBusy(false)
    }
  }

  async function handleJoin() {
    setError('')
    if (!joinCode.trim() || !joinName.trim()) {
      setError('Enter both a name and a lobby code')
      return
    }
    setBusy(true)
    try {
      const playerId = getPlayerId()
      const code = await joinLobby(joinCode, { id: playerId, name: joinName.trim() })
      navigate(`/lobby/${code}`)
    } catch (err) {
      setError(err.message)
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center grow p-8 gap-6">
      <div className="w-full max-w-2xl p-8 bg-slate-200/50 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-800 rounded-xl shadow-lg">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">Welcome to SeaSS</h1>
        <p className="mb-6">Create a lobby to host a round, or join one with a code.</p>

        {error && (
          <div className="mb-4 p-3 rounded-md bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300 text-sm">
            {error}
          </div>
        )}

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="p-4 bg-slate-300/50 dark:bg-slate-900/50 rounded-lg border border-slate-300 dark:border-slate-700">
            <h2 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Host a lobby</h2>
            <input
              className="w-full mb-3 px-3 py-2 rounded-md bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700"
              placeholder="Your name"
              value={hostName}
              onChange={(e) => setHostName(e.target.value)}
            />
            <button
              disabled={busy}
              onClick={handleCreate}
              className="w-full px-5 py-2.5 bg-sky-600 hover:bg-sky-500 disabled:opacity-50 text-white font-medium rounded-lg transition-colors"
            >
              Create Lobby
            </button>
          </div>

          <div className="p-4 bg-slate-300/50 dark:bg-slate-900/50 rounded-lg border border-slate-300 dark:border-slate-700">
            <h2 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Join a lobby</h2>
            <input
              className="w-full mb-3 px-3 py-2 rounded-md bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700"
              placeholder="Your name"
              value={joinName}
              onChange={(e) => setJoinName(e.target.value)}
            />
            <input
              className="w-full mb-3 px-3 py-2 rounded-md bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 uppercase"
              placeholder="Lobby code"
              value={joinCode}
              onChange={(e) => setJoinCode(e.target.value)}
            />
            <button
              disabled={busy}
              onClick={handleJoin}
              className="w-full px-5 py-2.5 bg-sky-600 hover:bg-sky-500 disabled:opacity-50 text-white font-medium rounded-lg transition-colors"
            >
              Join Lobby
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
