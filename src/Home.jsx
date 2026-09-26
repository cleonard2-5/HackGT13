export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center grow p-8">
      <div className="w-full max-w-2xl p-8 bg-slate-200/50 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-800 rounded-xl shadow-lg">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">Welcome to SeaSS</h1>
        <p className="mb-6">Your journey starts here. Navigate to the lobby to get started or dive straight into the tools.</p>
        <button className="px-5 py-2.5 bg-sky-600 hover:bg-sky-500 text-white font-medium rounded-lg transition-colors">
          Get Started
        </button>
      </div>
    </div>
  )
}