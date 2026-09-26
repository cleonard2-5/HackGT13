import { useState } from 'react'

export default function Navbar({ type, items }) {
  // Tracks the mobile sidebar visibility
  const [isOpen, setIsOpen] = useState(false)
  // Dropdo
  const [openDropdowns, setOpenDropdowns] = useState({})

  const toId = (str) => str.toLowerCase().replace(/\s+/g, '-')

  const toggleDropdown = (title) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [title]: !prev[title]
    }))
  }

  return (
    <aside className="w-64 shrink-0 border-r border-slate-300 dark:border-slate-800 bg-slate-100/50 dark:bg-slate-900/50 p-6 flex flex-col min-h-full">
      <h3 className="text-sm font-bold text-sky-600 dark:text-sky-400 mb-4 uppercase tracking-wider">
        {type === 'players' ? 'Connected Players' : 'Topics'}
      </h3>
      <ul className="flex flex-col gap-2">
        {items.map((item, index) => (
          <li key={item?.id ?? index}>
            {type === 'players' ? (
              <div className="flex items-center gap-3 p-2 rounded-md bg-slate-200/50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 shadow-sm">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]"></div>
                <span className={item?.isSelf ? 'font-bold' : ''}>{item?.name ?? item}</span>
              </div>
            ) : (
              <a 
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
                className="block p-2 rounded-md hover:bg-sky-100 dark:hover:bg-sky-900/30 text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 font-medium transition-colors"
              >
                {item}
              </a>
            )}
          </li>
        ))}
      </ul>
    </aside>
  )
}