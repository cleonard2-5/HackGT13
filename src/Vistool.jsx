import Navbar from './Navbar'

export default function Vistool() {
  // Keep this array for the Navbar to generate the sidebar links
const Topics = [
    'Background', 
    { title: 'Border', subItems: ['Border Radius', 'Border Style'] }, 
    'Color', 
    'Dimensions', 
    'Display', 
    'Flex', 
    { title: 'Font', subItems: ['Font Size', 'Font Weight'] },
    'Grid', 
    'Justify & Align', 
    'Margin', 
    'Padding', 
    'Position', 
    'Shadow', 
    { title: 'Text', subItems: ['Text Align', 'Text Decoration'] },
    'Transform', 
    'Z-index'
  ]

  return (
    <div className="flex grow w-full h-[calc(100vh-73px)]">
      <Navbar type="Topics" items={Topics} />

      <div className="flex flex-col grow p-8 overflow-y-auto scroll-smooth">
        <div className="w-full max-w-4xl mx-auto space-y-12 pb-32">
          
          <div className="p-8 bg-slate-200/50 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-800 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">Visualization Tool</h2>
            <p className="text-slate-700 dark:text-slate-300">Select a CSS property from the sidebar to jump to its interactive visualizer.</p>
          </div>

          {/* BACKGROUND SECTION */}
          <section id="background" className="p-8 bg-slate-200/50 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-800 rounded-xl shadow-lg scroll-mt-24">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">Background</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 pb-4 border-b border-slate-300 dark:border-slate-700">
              The background property sets the background effects for an element, including color, images, and gradients.
            </p>
            
            <div className="flex gap-8">
              <div className="w-1/3 flex flex-col gap-4">
                <label className="flex flex-col text-sm font-medium text-slate-700 dark:text-slate-300">
                  Background Color
                  <input type="color" className="mt-1 block w-16 h-10 rounded cursor-pointer" defaultValue="#0ea5e9" />
                </label>
              </div>
              <div className="grow h-48 bg-sky-500 rounded-xl shadow-inner flex items-center justify-center text-white font-bold">
                Preview Box
              </div>
            </div>
          </section>

          {/* FLEX SECTION */}
          <section id="flex" className="p-8 bg-slate-200/50 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-800 rounded-xl shadow-lg scroll-mt-24">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">Flex</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 pb-4 border-b border-slate-300 dark:border-slate-700">
              Flexbox provides a more efficient way to lay out, align, and distribute space among items in a container.
            </p>
            
            <div className="flex flex-col gap-6">
              <div className="flex gap-4">
                <button className="px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white font-medium rounded-md transition-colors">
                  + Add Element
                </button>
                <button className="px-4 py-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-200 font-medium rounded-md transition-colors">
                  - Remove Element
                </button>
                <select className="ml-auto px-4 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-md">
                  <option>flex-row</option>
                  <option>flex-col</option>
                </select>
              </div>
              <div className="min-h-32 p-4 bg-slate-300/50 dark:bg-slate-900/50 rounded-xl border border-slate-300 dark:border-slate-700 flex flex-row gap-4">
                <div className="w-16 h-16 bg-sky-400 rounded-md"></div>
                <div className="w-16 h-16 bg-sky-500 rounded-md"></div>
                <div className="w-16 h-16 bg-sky-600 rounded-md"></div>
              </div>
            </div>
          </section>

          {/* PADDING SECTION */}
          <section id="padding" className="p-8 bg-slate-200/50 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-800 rounded-xl shadow-lg scroll-mt-24">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">Padding</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 pb-4 border-b border-slate-300 dark:border-slate-700">
              Padding creates space around an element's content, inside of any defined borders.
            </p>
            
            <div className="flex gap-8">
              <div className="w-1/3 flex flex-col gap-6">
                <label className="flex flex-col text-sm font-medium text-slate-700 dark:text-slate-300">
                  Padding All (px): <span>24px</span>
                  <input type="range" min="0" max="64" defaultValue="24" className="mt-2 accent-sky-500" />
                </label>
              </div>
              <div className="grow flex items-center justify-center bg-slate-300/50 dark:bg-slate-900/50 rounded-xl border border-slate-300 dark:border-slate-700 p-8">
                <div className="bg-sky-500/20 border-2 border-sky-500 border-dashed rounded-lg p-6">
                  <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded text-center font-medium">
                    Content Box
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* BORDER SECTION */}
          <section id="border" className='p-8 bg-slate-200/50 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-800 rounded-xl shadow-lg scroll-mt-24'>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">Border</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 pb-4 border-b border-slate-300 dark:border-slate-700">
              Border allows for the modification of the border around an element, such as it's color, radius, and style.
            </p>
          </section>

        </div>
      </div>
    </div>
  )
}