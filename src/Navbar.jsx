import { useState } from 'react'

export default function Navbar({ type, items }) {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdowns, setOpenDropdowns] = useState({})

  const toId = (str) => str.toLowerCase().replace(/\s+/g, '-')

  const toggleDropdown = (title) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [title]: !prev[title]
    }))
  }

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed bottom-6 right-6 z-50 px-4 py-3 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded-full shadow-lg transition-colors"
      >
        {isOpen ? 'Close Menu' : 'Topics Menu'}
      </button>

      {isOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside className={`fixed md:relative z-40 shrink-0 w-64 border-r border-slate-300 dark:border-slate-800 bg-slate-100/95 dark:bg-slate-900/95 md:bg-slate-100/50 md:dark:bg-slate-900/50 p-6 flex flex-col min-h-full h-[calc(100vh-73px)] overflow-y-auto transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
        <h3 className="text-sm font-bold text-sky-600 dark:text-sky-400 mb-4 uppercase tracking-wider">
          {type === 'players' ? 'Connected Players' : 'Topics'}
        </h3>
        
        <ul className="flex flex-col gap-2">
          {items.map((item, index) => {
            
            // 1. RENDER PLAYERS
            if (type === 'players') {
              return (
                <li key={index}>
                  <div className="flex items-center gap-3 p-2 rounded-md bg-slate-200/50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 shadow-sm">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]"></div>
                    {item}
                  </div>
                </li>
              )
            }

            // 2. RENDER STANDARD TOPICS (Strings)
            if (typeof item === 'string') {
              return (
                <li key={index}>
                  <a 
                    href={`#${toId(item)}`} 
                    onClick={() => setIsOpen(false)}
                    className="block p-2 rounded-md hover:bg-sky-100 dark:hover:bg-sky-900/30 text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 font-medium transition-colors"
                  >
                    {item}
                  </a>
                </li>
              )
            }

            // 3. RENDER NESTED SUBHEADINGS (Objects)
            const isDropdownOpen = openDropdowns[item.title]

            return (
              <li key={index} className="flex flex-col mt-1 mb-2">
                <div className="flex items-center justify-between rounded-md hover:bg-sky-100 dark:hover:bg-sky-900/30 transition-colors">
                  <a 
                    href={`#${toId(item.title)}`}
                    onClick={() => setIsOpen(false)}
                    className="grow p-2 text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 font-medium"
                  >
                    {item.title}
                  </a>
                  
                  <button 
                    onClick={() => toggleDropdown(item.title)}
                    className="p-2 text-slate-500 hover:text-sky-600 dark:hover:text-sky-400 focus:outline-none"
                    aria-label={`Toggle ${item.title} sub-menu`}
                  >
                    <svg 
                      className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
                
                {isDropdownOpen && (
                  <ul className="flex flex-col ml-4 mt-1 border-l-2 border-slate-300 dark:border-slate-700 overflow-hidden">
                    {item.subItems.map((sub, subIndex) => (
                      <li key={subIndex}>
                        <a 
                          href={`#${toId(sub)}`}
                          onClick={() => setIsOpen(false)}
                          className="block p-1.5 pl-4 text-sm rounded-r-md hover:bg-sky-100/50 dark:hover:bg-sky-900/20 text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                        >
                          {sub}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            )
          })}
        </ul>
      </aside>
    </>
  )
}