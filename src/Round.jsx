import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { subscribeLobby } from './lib/lobby'

export default function Round() {
  const { code } = useParams()
  const [lobby, setLobby] = useState(undefined)

  useEffect(() => {
    if (!code) return
    return subscribeLobby(code, setLobby)
  }, [code])

  if (lobby === undefined) {
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

  return (
    <div className="flex flex-col items-center justify-center grow p-8">
      <div className="w-full max-w-2xl p-8 bg-slate-200/50 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-800 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">Round in progress</h2>
        <p className="mb-2">Lobby code: <span className="font-mono">{lobby.code}</span></p>
        <p>Status: <span className="text-sky-600 dark:text-sky-400 font-medium">{lobby.status}</span></p>
      </div>
    </div>
  )
}
