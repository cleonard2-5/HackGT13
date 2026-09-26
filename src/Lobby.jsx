export default function Lobby() {
  return (
    <div className="flex flex-col items-center justify-center grow p-8">
      <div className="w-full max-w-2xl p-8 bg-slate-200/50 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-800 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">Lobby</h2>
        <p className="mb-6">Waiting for other participants to join the session...</p>
        <div className="p-4 bg-slate-300/50 dark:bg-slate-900/50 rounded-lg border border-slate-300 dark:border-slate-700">
          <strong className="text-slate-900 dark:text-slate-100">Status:</strong> <span className="text-sky-600 dark:text-sky-400 font-medium">3/4 Players Connected</span>
        </div>
      </div>
    </div>
  )
}