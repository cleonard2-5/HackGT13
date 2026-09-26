import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-300 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-5xl mx-auto flex items-center justify-between p-4 px-6">
        <div className="text-2xl font-bold text-sky-600 dark:text-sky-400 tracking-wide">
          SeaSS
        </div>
        <nav className="flex gap-6">
          <Link to="/" className="text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 font-medium transition-colors">Home</Link>
          <Link to="/lobby" className="text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 font-medium transition-colors">Lobby</Link>
          <Link to="/results" className="text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 font-medium transition-colors">Results</Link>
          <Link to="/vistool" className="text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 font-medium transition-colors">Vistool</Link>
        </nav>
      </div>
    </header>
  )
}