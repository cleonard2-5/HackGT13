import Navbar from './Navbar'

export default function Vistool() {
  // Consolidated your list and added a few key layout/effect properties
  const Topics = [
    'Background', 'Border', 'Color', 'Dimensions', 'Display', 'Flex', 
    'Font', 'Grid', 'Justify & Align', 'Margin', 'Padding', 
    'Position', 'Shadow', 'Text', 'Transform', 'Z-index'
  ]

  return (
    // Height constraint ensures the sidebar stays fixed while the right side scrolls
    <div className="flex grow w-full h-[calc(100vh-73px)]">
      <Navbar type="Topics" items={Topics} />

      {/* Main scrolling container */}
      <div className="flex flex-col grow p-8 overflow-y-auto scroll-smooth">
        <div className="w-full max-w-4xl mx-auto space-y-12 pb-32">
          
          {/* Header Card */}
          <div className="p-8 bg-slate-200/50 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-800 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">Visualization Tool</h2>
            <p className="text-slate-700 dark:text-slate-300">Select a CSS property from the sidebar to jump to its interactive visualizer.</p>
          </div>

          {/* Dynamic Topic Sections */}
          {Topics.map((topic) => {
            // Converts "Justify & Align" to "justify-&-align" to match the Navbar href format
            const sectionId = topic.toLowerCase().replace(/\s+/g, '-');
            
            return (
              <section 
                key={topic} 
                id={sectionId} 
                className="p-8 bg-slate-200/50 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-800 rounded-xl shadow-lg scroll-mt-24"
              >
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 border-b border-slate-300 dark:border-slate-700 pb-2">
                  {topic}
                </h3>
                
                {/* Interactive Tool Area */}
                <div className="h-64 flex items-center justify-center bg-sky-100/50 dark:bg-sky-900/20 border-2 border-dashed border-sky-400 dark:border-sky-700 rounded-xl">
                  <span className="text-sky-600 dark:text-sky-400 font-medium tracking-wide">
                    {topic} Interactive Area
                  </span>
                </div>
              </section>
            )
          })}

        </div>
      </div>
    </div>
  )
}