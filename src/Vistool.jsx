import Navbar from './Navbar'

export default function Vistool() {
  const Topics = [
    'Background', 
    'Border',  
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

            <p className="text-slate-600 dark:text-slate-400 mb-6">
              background: bg-color bg-image position/bg-size bg-repeat bg-origin bg-clip bg-attachment;
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

          {/* BORDER SECTION */}
          <section id="border" className='p-8 bg-slate-200/50 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-800 rounded-xl shadow-lg scroll-mt-24'>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">Border</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              The border property dictates the boundary around an element's content and padding.
            </p>
            <p className="text-slate-800 dark:text-slate-200 mb-8 font-mono bg-white/50 dark:bg-slate-900/50 p-3 rounded-md border border-slate-300 dark:border-slate-700 inline-block shadow-sm">
              border: <span className="text-sky-600 dark:text-sky-400">border-width</span> <span className="text-emerald-600 dark:text-emerald-400">border-style</span> <span className="text-purple-600 dark:text-purple-400">border-color</span>;
            </p>

            <div className="flex gap-8">
              <div className="w-1/3 flex flex-col gap-6">
                
                {/* Border Width Slider */}
                <label className="flex flex-col text-sm font-medium text-slate-700 dark:text-slate-300">
                  <div className="flex justify-between mb-1">
                    <span>Border Width (px)</span>
                    <span>4px</span>
                  </div>
                  <input type="range" min="0" max="32" defaultValue="4" className="mt-1 accent-sky-500" />
                </label>

                {/* Border Style Dropdown */}
                <div id="border-style" className="scroll-mt-24 pt-6 border-t border-slate-300 dark:border-slate-700">
                  <label className="flex flex-col text-sm font-medium text-slate-700 dark:text-slate-300">
                    Border Style
                    <select className="mt-2 p-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-700 dark:text-slate-300">
                      <option value="solid">solid</option>
                      <option value="dashed">dashed</option>
                      <option value="dotted">dotted</option>
                      <option value="double">double</option>
                      <option value="groove">groove</option>
                      <option value="ridge">ridge</option>
                    </select>
                  </label>
                </div>

                {/* Border Color Picker & Hex Input */}
                <div className="pt-6 border-t border-slate-300 dark:border-slate-700">
                  <label className="flex flex-col text-sm font-medium text-slate-700 dark:text-slate-300">
                    Border Color
                    <div className="flex gap-2 mt-2">
                      <input 
                        type="color" 
                        defaultValue="#0ea5e9" 
                        className="h-10 w-12 p-0 border-0 rounded cursor-pointer shrink-0 bg-transparent" 
                      />
                      <input 
                        type="text" 
                        defaultValue="#0ea5e9" 
                        className="grow p-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-md font-mono text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-700 dark:text-slate-300" 
                      />
                    </div>
                  </label>
                </div>

                {/* Border Radius Slider */}
                <div id="border-radius" className="scroll-mt-24 pt-6 border-t border-slate-300 dark:border-slate-700">
                  <label className="flex flex-col text-sm font-medium text-slate-700 dark:text-slate-300">
                    <div className="flex justify-between mb-1">
                      <span>Border Radius (px)</span>
                      <span>8px</span>
                    </div>
                    <input type="range" min="0" max="100" defaultValue="8" className="mt-1 accent-sky-500" />
                  </label>
                </div>

              </div>
              
              {/* Preview Container */}
              <div className="grow flex items-center justify-center bg-slate-300/50 dark:bg-slate-900/50 rounded-xl border border-slate-300 dark:border-slate-700 p-8 min-h-100">
                <div 
                  className="bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 font-medium"
                  style={{
                    width: '250px',
                    height: '250px',
                    borderWidth: '4px',
                    borderStyle: 'solid',
                    borderColor: '#0ea5e9',
                    borderRadius: '8px'
                  }}
                >
                  Preview Box
                </div>
              </div>
            </div>
          </section>

          {/* DIMENSIONS SECTION */}
          <section id="dimensions" className='p-8 bg-slate-200/50 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-800 rounded-xl shadow-lg scroll-mt-24'>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">Dimensions</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Controls the width and height properties of an element, dictating its overall size within the layout document.
            </p>
            
            <div className="flex gap-4 mb-8">
              <p className="text-slate-800 dark:text-slate-200 font-mono bg-white/50 dark:bg-slate-900/50 p-3 rounded-md border border-slate-300 dark:border-slate-700 shadow-sm">
                width: <span className="text-sky-600 dark:text-sky-400">length</span>;
              </p>
              <p className="text-slate-800 dark:text-slate-200 font-mono bg-white/50 dark:bg-slate-900/50 p-3 rounded-md border border-slate-300 dark:border-slate-700 shadow-sm">
                height: <span className="text-emerald-600 dark:text-emerald-400">length</span>;
              </p>
            </div>

            <div className="flex gap-8">
              <div className="w-1/3 flex flex-col gap-6">
                
                {/* Width Slider */}
                <label className="flex flex-col text-sm font-medium text-slate-700 dark:text-slate-300">
                  <div className="flex justify-between mb-1">
                    <span>Width (px)</span>
                    <span>250px</span>
                  </div>
                  <input type="range" min="50" max="400" defaultValue="250" className="mt-1 accent-sky-500" />
                </label>

                {/* Height Slider */}
                <div className="pt-6 border-t border-slate-300 dark:border-slate-700">
                  <label className="flex flex-col text-sm font-medium text-slate-700 dark:text-slate-300">
                    <div className="flex justify-between mb-1">
                      <span>Height (px)</span>
                      <span>150px</span>
                    </div>
                    <input type="range" min="50" max="400" defaultValue="150" className="mt-1 accent-emerald-500" />
                  </label>
                </div>

              </div>
              
              {/* Preview Container */}
              <div className="grow flex items-center justify-center bg-slate-300/50 dark:bg-slate-900/50 rounded-xl border border-slate-300 dark:border-slate-700 p-8 min-h-112.5">
                <div 
                  className="bg-sky-500 flex items-center justify-center text-white font-medium rounded-md shadow-md"
                  style={{
                    width: '250px',
                    height: '150px'
                  }}
                >
                  Preview Box
                </div>
              </div>
            </div>
          </section>

          {/* DISPLAY SECTION */}
          <section id="display" className='p-8 bg-slate-200/50 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-800 rounded-xl shadow-lg scroll-mt-24'>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">Display</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Determines whether an element is treated as a block or inline element, and sets the layout model used for its children.
            </p>
            
            <p className="text-slate-800 dark:text-slate-200 mb-8 font-mono bg-white/50 dark:bg-slate-900/50 p-3 rounded-md border border-slate-300 dark:border-slate-700 inline-block shadow-sm">
              display: <span className="text-sky-600 dark:text-sky-400">value</span>;
            </p>

            <div className="flex gap-8">
              <div className="w-1/3 flex flex-col gap-6">
                
                {/* Display Dropdown */}
                <label className="flex flex-col text-sm font-medium text-slate-700 dark:text-slate-300">
                  Display Value
                  <select className="mt-2 p-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-700 dark:text-slate-300">
                    <option value="block">block</option>
                    <option value="inline">inline</option>
                    <option value="inline-block">inline-block</option>
                    <option value="none">none</option>
                    <option value="flex">flex</option>
                    <option value="grid">grid</option>
                  </select>
                </label>

              </div>
              
              {/* Preview Container */}
              <div className="grow flex items-center justify-center bg-slate-300/50 dark:bg-slate-900/50 rounded-xl border border-slate-300 dark:border-slate-700 p-8 min-h-75">
                <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-md w-full text-slate-700 dark:text-slate-300 shadow-sm border border-slate-300 dark:border-slate-700">
                  <span>Here is some text before the element. </span>
                  <div 
                    className="bg-sky-500 text-white font-medium px-4 py-2 rounded shadow-md border border-sky-600"
                    style={{ display: 'block' }}
                  >
                    Target Element
                  </div>
                  <span> And here is some text flowing after the element to demonstrate document flow.</span>
                </div>
              </div>
            </div>
          </section>

          {/* FLEX SECTION */}
          <section id="flex" className="p-8 bg-slate-200/50 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-800 rounded-xl shadow-lg scroll-mt-24">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">Flex</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Flexbox provides a one-dimensional layout method for arranging items in rows or columns, managing their alignment and space distribution.
            </p>

            <p className="text-slate-800 dark:text-slate-200 mb-8 font-mono bg-white/50 dark:bg-slate-900/50 p-3 rounded-md border border-slate-300 dark:border-slate-700 inline-block shadow-sm">
              flex: <span className="text-sky-600 dark:text-sky-400">flex-grow</span> <span className="text-emerald-600 dark:text-emerald-400">flex-shrink</span> <span className="text-purple-600 dark:text-purple-400">flex-basis</span>;
            </p>
            
            <div className="flex gap-8">
              <div className="w-1/3 flex flex-col gap-6">
                
                {/* Flex Direction Dropdown */}
                <label className="flex flex-col text-sm font-medium text-slate-700 dark:text-slate-300">
                  Flex Direction
                  <select className="mt-2 p-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-700 dark:text-slate-300">
                    <option value="row">row</option>
                    <option value="column">column</option>
                  </select>
                </label>

                {/* Element Controls */}
                <div className="pt-6 border-t border-slate-300 dark:border-slate-700 flex flex-col gap-3">
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Child Elements</span>
                  <button className="px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white font-medium rounded-md transition-colors shadow-sm">
                    + Add Element
                  </button>
                  <button className="px-4 py-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-200 font-medium rounded-md transition-colors shadow-sm">
                    - Remove Element
                  </button>
                </div>

              </div>
              
              {/* Preview Container */}
              <div className="grow flex bg-slate-300/50 dark:bg-slate-900/50 rounded-xl border border-slate-300 dark:border-slate-700 p-8 min-h-87.5">
                {/* Inner flexbox element that reacts to the controls */}
                <div 
                  className="w-full bg-slate-100 dark:bg-slate-800 border-2 border-dashed border-slate-400 dark:border-slate-500 p-4 rounded-lg flex gap-4"
                  style={{ flexDirection: 'row' }}
                >
                  <div className="w-16 h-16 bg-sky-400 rounded-md flex items-center justify-center text-white font-bold shadow-md">1</div>
                  <div className="w-16 h-16 bg-sky-500 rounded-md flex items-center justify-center text-white font-bold shadow-md">2</div>
                  <div className="w-16 h-16 bg-sky-600 rounded-md flex items-center justify-center text-white font-bold shadow-md">3</div>
                </div>
              </div>
            </div>
          </section>

          {/* FONT SECTION */}
          <section id="font" className='p-8 bg-slate-200/50 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-800 rounded-xl shadow-lg scroll-mt-24'>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">Font</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Defines the typographic characteristics of text elements, dictating how characters are rendered.
            </p>

            <p className="text-slate-800 dark:text-slate-200 mb-8 font-mono bg-white/50 dark:bg-slate-900/50 p-3 rounded-md border border-slate-300 dark:border-slate-700 inline-block shadow-sm">
              font: <span className="text-sky-600 dark:text-sky-400">font-style</span> <span className="text-emerald-600 dark:text-emerald-400">font-variant</span> <span className="text-purple-600 dark:text-purple-400">font-weight</span> <span className="text-pink-600 dark:text-pink-400">font-size</span> <span className="text-amber-600 dark:text-amber-400">font-family</span>;
            </p>

            <div className="flex gap-8">
              <div className="w-1/3 flex flex-col gap-6">
                
                {/* Font Size Slider */}
                <div id="font-size" className="scroll-mt-24">
                  <label className="flex flex-col text-sm font-medium text-slate-700 dark:text-slate-300">
                    <div className="flex justify-between mb-1">
                      <span>Font Size (px)</span>
                      <span>16px</span>
                    </div>
                    <input type="range" min="8" max="72" defaultValue="16" className="mt-1 accent-pink-500" />
                  </label>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                    Sets the size of the font, adjusting the overall height of the text characters.
                  </p>
                </div>

                {/* Font Weight Slider */}
                <div id="font-weight" className="scroll-mt-24 pt-6 border-t border-slate-300 dark:border-slate-700">
                  <label className="flex flex-col text-sm font-medium text-slate-700 dark:text-slate-300">
                    <div className="flex justify-between mb-1">
                      <span>Font Weight</span>
                      <span>400</span>
                    </div>
                    <input type="range" min="100" max="900" step="100" defaultValue="400" className="mt-1 accent-purple-500" />
                  </label>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                    Sets the thickness or boldness of the font, ranging from thin to heavy.
                  </p>
                </div>

                {/* Font Family Dropdown */}
                <div className="pt-6 border-t border-slate-300 dark:border-slate-700">
                  <label className="flex flex-col text-sm font-medium text-slate-700 dark:text-slate-300">
                    Font Family
                    <select className="mt-2 p-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-700 dark:text-slate-300">
                      <option value="sans-serif">sans-serif</option>
                      <option value="serif">serif</option>
                      <option value="monospace">monospace</option>
                      <option value="cursive">cursive</option>
                    </select>
                  </label>
                </div>

                {/* Font Style Dropdown */}
                <div className="pt-6 border-t border-slate-300 dark:border-slate-700">
                  <label className="flex flex-col text-sm font-medium text-slate-700 dark:text-slate-300">
                    Font Style
                    <select className="mt-2 p-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-700 dark:text-slate-300">
                      <option value="normal">normal</option>
                      <option value="italic">italic</option>
                      <option value="oblique">oblique</option>
                    </select>
                  </label>
                </div>

              </div>
              
              {/* Preview Container */}
              <div className="grow flex items-center justify-center bg-slate-300/50 dark:bg-slate-900/50 rounded-xl border border-slate-300 dark:border-slate-700 p-8 min-h-100 overflow-hidden text-center">
                <div 
                  className="text-slate-900 dark:text-slate-100 max-w-full wrap-break-word"
                  style={{
                    fontSize: '16px',
                    fontWeight: 400,
                    fontFamily: 'sans-serif',
                    fontStyle: 'normal'
                  }}
                >
                  The quick brown fox jumps over the lazy dog.
                </div>
              </div>
            </div>
          </section>

          {/* GRID SECTION */}
          <section id="grid" className='p-8 bg-slate-200/50 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-800 rounded-xl shadow-lg scroll-mt-24'>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">Grid</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Provides a two-dimensional layout system that organizes content into a matrix of columns and rows.
            </p>

            <div className="flex flex-col gap-3 mb-8">
              <p className="text-slate-800 dark:text-slate-200 font-mono bg-white/50 dark:bg-slate-900/50 p-3 rounded-md border border-slate-300 dark:border-slate-700 shadow-sm w-fit">
                grid-template-columns: <span className="text-sky-600 dark:text-sky-400">repeat(3, 1fr)</span>;
              </p>
              <p className="text-slate-800 dark:text-slate-200 font-mono bg-white/50 dark:bg-slate-900/50 p-3 rounded-md border border-slate-300 dark:border-slate-700 shadow-sm w-fit">
                gap: <span className="text-emerald-600 dark:text-emerald-400">16px</span>;
              </p>
            </div>

            <div className="flex gap-8">
              <div className="w-1/3 flex flex-col gap-6">
                
                {/* Columns Slider */}
                <label className="flex flex-col text-sm font-medium text-slate-700 dark:text-slate-300">
                  <div className="flex justify-between mb-1">
                    <span>Columns</span>
                    <span>3</span>
                  </div>
                  <input type="range" min="1" max="6" defaultValue="3" className="mt-1 accent-sky-500" />
                </label>

                {/* Rows Slider */}
                <div className="pt-6 border-t border-slate-300 dark:border-slate-700">
                  <label className="flex flex-col text-sm font-medium text-slate-700 dark:text-slate-300">
                    <div className="flex justify-between mb-1">
                      <span>Rows</span>
                      <span>2</span>
                    </div>
                    <input type="range" min="1" max="6" defaultValue="2" className="mt-1 accent-purple-500" />
                  </label>
                </div>

                {/* Gap Slider */}
                <div className="pt-6 border-t border-slate-300 dark:border-slate-700">
                  <label className="flex flex-col text-sm font-medium text-slate-700 dark:text-slate-300">
                    <div className="flex justify-between mb-1">
                      <span>Grid Gap (px)</span>
                      <span>16px</span>
                    </div>
                    <input type="range" min="0" max="64" defaultValue="16" className="mt-1 accent-emerald-500" />
                  </label>
                </div>

                {/* Element Controls */}
                <div className="pt-6 border-t border-slate-300 dark:border-slate-700 flex flex-col gap-3">
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Child Elements</span>
                  <div className="flex gap-2">
                    <button className="grow px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white font-medium rounded-md transition-colors shadow-sm">
                      + Add
                    </button>
                    <button className="grow px-4 py-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-200 font-medium rounded-md transition-colors shadow-sm">
                      - Remove
                    </button>
                  </div>
                </div>

              </div>
              
              {/* Preview Container */}
              <div className="grow flex bg-slate-300/50 dark:bg-slate-900/50 rounded-xl border border-slate-300 dark:border-slate-700 p-8 min-h-100">
                <div 
                  className="w-full h-full bg-slate-100 dark:bg-slate-800 border-2 border-dashed border-slate-400 dark:border-slate-500 p-4 rounded-lg grid"
                  style={{
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gridTemplateRows: 'repeat(2, 1fr)',
                    gap: '16px'
                  }}
                >
                  <div className="bg-sky-400 rounded-md flex items-center justify-center text-white font-bold shadow-md min-h-15">1</div>
                  <div className="bg-sky-500 rounded-md flex items-center justify-center text-white font-bold shadow-md min-h-15">2</div>
                  <div className="bg-sky-600 rounded-md flex items-center justify-center text-white font-bold shadow-md min-h-15">3</div>
                  <div className="bg-sky-400 rounded-md flex items-center justify-center text-white font-bold shadow-md min-h-15">4</div>
                  <div className="bg-sky-500 rounded-md flex items-center justify-center text-white font-bold shadow-md min-h-15">5</div>
                  <div className="bg-sky-600 rounded-md flex items-center justify-center text-white font-bold shadow-md min-h-15">6</div>
                </div>
              </div>
            </div>
          </section>

          {/* JUSTIFY & ALIGN SECTION */}
          <section id="justify-&-align" className='p-8 bg-slate-200/50 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-800 rounded-xl shadow-lg scroll-mt-24'>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">Justify & Align</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Controls the alignment and spacing of items across the horizontal axis (justify) and vertical axis (align) within flexbox or grid containers.
            </p>

            {/* Organized Syntax Blocks */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="grow text-slate-800 dark:text-slate-200 font-mono bg-white/50 dark:bg-slate-900/50 p-4 rounded-md border border-slate-300 dark:border-slate-700 shadow-sm text-sm">
                <span className="text-sky-600 dark:text-sky-400 font-bold block mb-2 uppercase tracking-wide text-xs">Container Properties</span>
                justify-content: <span className="text-slate-500">value</span>;<br/>
                justify-items: <span className="text-slate-500">value</span>;<br/>
                align-content: <span className="text-slate-500">value</span>;<br/>
                align-items: <span className="text-slate-500">value</span>;
              </div>
              <div className="grow text-slate-800 dark:text-slate-200 font-mono bg-white/50 dark:bg-slate-900/50 p-4 rounded-md border border-slate-300 dark:border-slate-700 shadow-sm text-sm">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold block mb-2 uppercase tracking-wide text-xs">Individual Item Properties</span>
                justify-self: <span className="text-slate-500">value</span>;<br/>
                align-self: <span className="text-slate-500">value</span>;
              </div>
            </div>

            <div className="flex gap-8">
              <div className="w-1/3 flex flex-col gap-6">
                
                {/* Container Controls */}
                <div>
                  <h4 className="text-sm font-bold mb-3 uppercase tracking-wider text-sky-600 dark:text-sky-400">Container Alignment</h4>
                  
                  <label className="flex flex-col text-sm font-medium text-slate-700 dark:text-slate-300 mb-4">
                    justify-content (Main Axis)
                    <select className="mt-2 p-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-700 dark:text-slate-300">
                      <option value="flex-start">flex-start</option>
                      <option value="center">center</option>
                      <option value="flex-end">flex-end</option>
                      <option value="space-between">space-between</option>
                      <option value="space-around">space-around</option>
                      <option value="space-evenly">space-evenly</option>
                    </select>
                  </label>

                  <label className="flex flex-col text-sm font-medium text-slate-700 dark:text-slate-300">
                    align-items (Cross Axis)
                    <select className="mt-2 p-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-700 dark:text-slate-300">
                      <option value="stretch">stretch</option>
                      <option value="flex-start">flex-start</option>
                      <option value="center">center</option>
                      <option value="flex-end">flex-end</option>
                      <option value="baseline">baseline</option>
                    </select>
                  </label>
                </div>

                {/* Target Item Controls */}
                <div className="pt-6 border-t border-slate-300 dark:border-slate-700">
                  <h4 className="text-sm font-bold mb-3 uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Target Item Alignment</h4>
                  
                  <label className="flex flex-col text-sm font-medium text-slate-700 dark:text-slate-300">
                    align-self (Target Item 2)
                    <select className="mt-2 p-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-700 dark:text-slate-300">
                      <option value="auto">auto</option>
                      <option value="flex-start">flex-start</option>
                      <option value="center">center</option>
                      <option value="flex-end">flex-end</option>
                      <option value="stretch">stretch</option>
                    </select>
                  </label>
                </div>

                {/* Element Controls */}
                <div className="pt-6 border-t border-slate-300 dark:border-slate-700 flex flex-col gap-3">
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Child Elements</span>
                  <div className="flex gap-2">
                    <button className="grow px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white font-medium rounded-md transition-colors shadow-sm">
                      + Add
                    </button>
                    <button className="grow px-4 py-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-200 font-medium rounded-md transition-colors shadow-sm">
                      - Remove
                    </button>
                  </div>
                </div>

              </div>
              
              {/* Preview Container */}
              <div className="grow flex bg-slate-300/50 dark:bg-slate-900/50 rounded-xl border border-slate-300 dark:border-slate-700 p-8 min-h-112.5">
                <div 
                  className="w-full h-full bg-slate-100 dark:bg-slate-800 border-2 border-dashed border-slate-400 dark:border-slate-500 p-4 rounded-lg flex gap-4"
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <div className="w-16 h-16 bg-sky-400 rounded-md flex items-center justify-center text-white font-bold shadow-md">1</div>
                  
                  {/* Highlighted Target Item */}
                  <div 
                    className="w-16 h-16 bg-emerald-500 border-4 border-emerald-300 rounded-md flex items-center justify-center text-white font-bold shadow-lg"
                    style={{ alignSelf: 'auto' }}
                  >
                    2
                  </div>
                  
                  <div className="w-16 h-16 bg-sky-600 rounded-md flex items-center justify-center text-white font-bold shadow-md">3</div>
                </div>
              </div>
            </div>
          </section>

          {/* MARGIN SECTION */}
          <section id="margin" className='p-8 bg-slate-200/50 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-800 rounded-xl shadow-lg scroll-mt-24'>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">Margin</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Creates space around elements, completely outside of any defined borders, effectively pushing adjacent elements away.
            </p>

            <p className="text-slate-800 dark:text-slate-200 mb-8 font-mono bg-white/50 dark:bg-slate-900/50 p-3 rounded-md border border-slate-300 dark:border-slate-700 inline-block shadow-sm">
              margin: <span className="text-sky-600 dark:text-sky-400">length</span>;
            </p>
            
            <div className="flex gap-8">
              <div className="w-1/3 flex flex-col gap-6">
                
                {/* Margin Slider */}
                <label className="flex flex-col text-sm font-medium text-slate-700 dark:text-slate-300">
                  <div className="flex justify-between mb-1">
                    <span>Margin All (px)</span>
                    <span>16px</span>
                  </div>
                  <input type="range" min="0" max="64" defaultValue="16" className="mt-1 accent-sky-500" />
                </label>

                {/* Element Controls */}
                <div className="pt-6 border-t border-slate-300 dark:border-slate-700 flex flex-col gap-3">
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Adjacent Elements</span>
                  <div className="flex gap-2">
                    <button className="grow px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white font-medium rounded-md transition-colors shadow-sm">
                      + Add
                    </button>
                    <button className="grow px-4 py-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-200 font-medium rounded-md transition-colors shadow-sm">
                      - Remove
                    </button>
                  </div>
                </div>

              </div>
              
              {/* Preview Container */}
              <div className="grow flex items-center justify-center bg-slate-300/50 dark:bg-slate-900/50 rounded-xl border border-slate-300 dark:border-slate-700 p-8 min-h-75 overflow-hidden">
                <div className="flex flex-wrap bg-slate-100 dark:bg-slate-800 p-4 border border-slate-300 dark:border-slate-600 rounded-lg shadow-inner items-center justify-center">
                  <div className="w-16 h-16 bg-slate-400 dark:bg-slate-600 rounded-md flex items-center justify-center text-white font-bold shadow-sm">1</div>
                  
                  {/* Target element with margin */}
                  <div 
                    className="w-16 h-16 bg-sky-500 border-2 border-sky-300 rounded-md flex items-center justify-center text-white font-bold shadow-md relative"
                    style={{ margin: '16px' }}
                  >
                    <span className="absolute -top-6 text-xs text-sky-600 dark:text-sky-400 font-mono font-bold">Target</span>
                    2
                  </div>
                  
                  <div className="w-16 h-16 bg-slate-400 dark:bg-slate-600 rounded-md flex items-center justify-center text-white font-bold shadow-sm">3</div>
                </div>
              </div>
            </div>
          </section>

          {/* PADDING SECTION */}
          <section id="padding" className="p-8 bg-slate-200/50 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-800 rounded-xl shadow-lg scroll-mt-24">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">Padding</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Creates internal space around an element's content, pushing the border outward and increasing the element's total size.
            </p>

            <p className="text-slate-800 dark:text-slate-200 mb-8 font-mono bg-white/50 dark:bg-slate-900/50 p-3 rounded-md border border-slate-300 dark:border-slate-700 inline-block shadow-sm">
              padding: <span className="text-sky-600 dark:text-sky-400">length</span>;
            </p>
            
            <div className="flex gap-8">
              <div className="w-1/3 flex flex-col gap-6">
                
                {/* Padding Slider */}
                <label className="flex flex-col text-sm font-medium text-slate-700 dark:text-slate-300">
                  <div className="flex justify-between mb-1">
                    <span>Padding All (px)</span>
                    <span>24px</span>
                  </div>
                  <input type="range" min="0" max="64" defaultValue="24" className="mt-1 accent-sky-500" />
                </label>

              </div>
              
              {/* Preview Container */}
              <div className="grow flex items-center justify-center bg-slate-300/50 dark:bg-slate-900/50 rounded-xl border border-slate-300 dark:border-slate-700 p-8 min-h-75">
                <div 
                  className="bg-sky-500/20 border-2 border-sky-500 border-dashed rounded-lg transition-all"
                  style={{ padding: '24px' }}
                >
                  <div className="bg-slate-100 dark:bg-slate-800 py-4 px-8 rounded text-center font-medium text-slate-700 dark:text-slate-300 shadow-sm border border-slate-300 dark:border-slate-700">
                    Content Box
                  </div>
                </div>
              </div>
            </div>
          </section>

{/* POSITION SECTION */}
          <section id="position" className='p-8 bg-slate-200/50 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-800 rounded-xl shadow-lg scroll-mt-24'>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">Position</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Specifies how an element is positioned in a document (static, relative, absolute, fixed, or sticky) and anchors it using directional offsets.
            </p>

            <div className="text-slate-800 dark:text-slate-200 mb-8 font-mono bg-white/50 dark:bg-slate-900/50 p-4 rounded-md border border-slate-300 dark:border-slate-700 inline-block shadow-sm text-sm">
              position: <span className="text-sky-600 dark:text-sky-400">value</span>;<br/>
              top: <span className="text-emerald-600 dark:text-emerald-400">length</span>;<br/>
              right: <span className="text-emerald-600 dark:text-emerald-400">length</span>;<br/>
              bottom: <span className="text-emerald-600 dark:text-emerald-400">length</span>;<br/>
              left: <span className="text-emerald-600 dark:text-emerald-400">length</span>;
            </div>

            <div className="flex gap-8">
              <div className="w-1/3 flex flex-col gap-6">
                
                {/* Position Dropdown */}
                <label className="flex flex-col text-sm font-medium text-slate-700 dark:text-slate-300">
                  Position Property
                  <select className="mt-2 p-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-700 dark:text-slate-300">
                    <option value="static">static</option>
                    <option value="relative">relative</option>
                    <option value="absolute">absolute</option>
                    <option value="fixed">fixed</option>
                    <option value="sticky">sticky</option>
                  </select>
                </label>

                {/* Top Slider */}
                <div className="pt-6 border-t border-slate-300 dark:border-slate-700">
                  <label className="flex flex-col text-sm font-medium text-slate-700 dark:text-slate-300">
                    <div className="flex justify-between mb-1">
                      <span>Top (px)</span>
                      <span>0px</span>
                    </div>
                    <input type="range" min="-50" max="150" defaultValue="0" className="mt-1 accent-emerald-500" />
                  </label>
                </div>

                {/* Right Slider */}
                <div className="pt-4">
                  <label className="flex flex-col text-sm font-medium text-slate-700 dark:text-slate-300">
                    <div className="flex justify-between mb-1">
                      <span>Right (px)</span>
                      <span>auto</span>
                    </div>
                    <input type="range" min="-50" max="150" defaultValue="0" className="mt-1 accent-emerald-500" />
                  </label>
                </div>

                {/* Bottom Slider */}
                <div className="pt-4">
                  <label className="flex flex-col text-sm font-medium text-slate-700 dark:text-slate-300">
                    <div className="flex justify-between mb-1">
                      <span>Bottom (px)</span>
                      <span>auto</span>
                    </div>
                    <input type="range" min="-50" max="150" defaultValue="0" className="mt-1 accent-emerald-500" />
                  </label>
                </div>

                {/* Left Slider */}
                <div className="pt-4">
                  <label className="flex flex-col text-sm font-medium text-slate-700 dark:text-slate-300">
                    <div className="flex justify-between mb-1">
                      <span>Left (px)</span>
                      <span>0px</span>
                    </div>
                    <input type="range" min="-50" max="150" defaultValue="0" className="mt-1 accent-emerald-500" />
                  </label>
                </div>

              </div>
              
              {/* Preview Container */}
              <div className="grow flex bg-slate-300/50 dark:bg-slate-900/50 rounded-xl border border-slate-300 dark:border-slate-700 p-8 min-h-125">
                {/* 
                  The parent container has position: relative so that absolute children 
                  are positioned relative to this box rather than the whole page. 
                */}
                <div className="w-full h-full relative bg-slate-100 dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-600 rounded-lg p-4 overflow-y-auto shadow-inner">
                  
                  <div className="w-full h-20 bg-slate-200 dark:bg-slate-700 rounded-md mb-4 flex items-center justify-center text-slate-500 dark:text-slate-400 font-medium">
                    Static Element 1
                  </div>
                  
                  {/* Target Element */}
                  <div 
                    className="w-32 h-32 bg-sky-500 border-2 border-sky-300 rounded-md flex items-center justify-center text-white font-bold shadow-lg z-10 opacity-90 transition-all"
                    style={{ 
                      position: 'relative',
                      top: '0px',
                      left: '0px'
                    }}
                  >
                    Target Element
                  </div>
                  
                  <div className="w-full h-32 bg-slate-200 dark:bg-slate-700 rounded-md mt-4 flex items-center justify-center text-slate-500 dark:text-slate-400 font-medium">
                    Static Element 2
                  </div>
                  <div className="w-full h-32 bg-slate-200 dark:bg-slate-700 rounded-md mt-4 flex items-center justify-center text-slate-500 dark:text-slate-400 font-medium">
                    Static Element 3
                  </div>

                </div>
              </div>
            </div>
          </section>

          {/* SHADOW SECTION */}
          <section id="shadow" className='p-8 bg-slate-200/50 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-800 rounded-xl shadow-lg scroll-mt-24'>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">Shadow</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Applies drop shadows to the element's bounding box (box-shadow) or directly to its text (text-shadow) to create the illusion of depth.
            </p>

            <div className="flex flex-col gap-3 mb-8">
              <p className="text-slate-800 dark:text-slate-200 font-mono bg-white/50 dark:bg-slate-900/50 p-3 rounded-md border border-slate-300 dark:border-slate-700 shadow-sm w-fit text-sm">
                box-shadow: <span className="text-sky-600 dark:text-sky-400">h-offset</span> <span className="text-emerald-600 dark:text-emerald-400">v-offset</span> <span className="text-purple-600 dark:text-purple-400">blur</span> <span className="text-pink-600 dark:text-pink-400">spread</span> <span className="text-amber-600 dark:text-amber-400">color</span>;
              </p>
              <p className="text-slate-800 dark:text-slate-200 font-mono bg-white/50 dark:bg-slate-900/50 p-3 rounded-md border border-slate-300 dark:border-slate-700 shadow-sm w-fit text-sm">
                text-shadow: <span className="text-sky-600 dark:text-sky-400">h-shadow</span> <span className="text-emerald-600 dark:text-emerald-400">v-shadow</span> <span className="text-purple-600 dark:text-purple-400">blur-radius</span> <span className="text-amber-600 dark:text-amber-400">color</span>;
              </p>
            </div>

            <div className="flex gap-8">
              <div className="w-1/3 flex flex-col gap-6">
                
                {/* H-Offset Slider */}
                <label className="flex flex-col text-sm font-medium text-slate-700 dark:text-slate-300">
                  <div className="flex justify-between mb-1">
                    <span>Horizontal Offset (px)</span>
                    <span>10px</span>
                  </div>
                  <input type="range" min="-50" max="50" defaultValue="10" className="mt-1 accent-sky-500" />
                </label>

                {/* V-Offset Slider */}
                <div className="pt-2">
                  <label className="flex flex-col text-sm font-medium text-slate-700 dark:text-slate-300">
                    <div className="flex justify-between mb-1">
                      <span>Vertical Offset (px)</span>
                      <span>10px</span>
                    </div>
                    <input type="range" min="-50" max="50" defaultValue="10" className="mt-1 accent-emerald-500" />
                  </label>
                </div>

                {/* Blur Slider */}
                <div className="pt-2">
                  <label className="flex flex-col text-sm font-medium text-slate-700 dark:text-slate-300">
                    <div className="flex justify-between mb-1">
                      <span>Blur Radius (px)</span>
                      <span>15px</span>
                    </div>
                    <input type="range" min="0" max="100" defaultValue="15" className="mt-1 accent-purple-500" />
                  </label>
                </div>

                {/* Spread Slider */}
                <div className="pt-2">
                  <label className="flex flex-col text-sm font-medium text-slate-700 dark:text-slate-300">
                    <div className="flex justify-between mb-1">
                      <span>Spread Radius (px)</span>
                      <span>-3px</span>
                    </div>
                    <input type="range" min="-50" max="50" defaultValue="-3" className="mt-1 accent-pink-500" />
                  </label>
                </div>

                {/* Color Picker & Hex Input */}
                <div className="pt-6 border-t border-slate-300 dark:border-slate-700">
                  <label className="flex flex-col text-sm font-medium text-slate-700 dark:text-slate-300">
                    Shadow Color
                    <div className="flex gap-2 mt-2">
                      <input 
                        type="color" 
                        defaultValue="#000000" 
                        className="h-10 w-12 p-0 border-0 rounded cursor-pointer shrink-0 bg-transparent" 
                      />
                      <input 
                        type="text" 
                        defaultValue="rgba(0, 0, 0, 0.4)" 
                        className="grow p-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-md font-mono text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-700 dark:text-slate-300" 
                      />
                    </div>
                  </label>
                </div>

              </div>
              
              {/* Preview Container */}
              <div className="grow flex items-center justify-center bg-slate-300/50 dark:bg-slate-900/50 rounded-xl border border-slate-300 dark:border-slate-700 p-8 min-h-112.5">
                <div 
                  className="w-48 h-48 bg-sky-500 rounded-xl flex items-center justify-center text-white font-bold text-xl transition-all"
                  style={{ 
                    boxShadow: '10px 10px 15px -3px rgba(0, 0, 0, 0.4)'
                  }}
                >
                  Preview Box
                </div>
              </div>
            </div>
          </section>

          {/* TRANSFORM SECTION */}
          <section id="transform" className='p-8 bg-slate-200/50 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-800 rounded-xl shadow-lg scroll-mt-24'>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">Transform</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Modifies the coordinate space of the CSS visual formatting model, allowing elements to be rotated, scaled, skewed, or translated.
            </p>

            <p className="text-slate-800 dark:text-slate-200 mb-6 font-mono bg-white/50 dark:bg-slate-900/50 p-3 rounded-md border border-slate-300 dark:border-slate-700 inline-block shadow-sm">
              transform: <span className="text-sky-600 dark:text-sky-400">translateX(20px)</span> <span className="text-emerald-600 dark:text-emerald-400">scale(1.2)</span> <span className="text-purple-600 dark:text-purple-400">rotate(45deg)</span>;
            </p>

            {/* Transform Functions Table */}
            <div className="overflow-hidden rounded-lg border border-slate-300 dark:border-slate-700 mb-8 bg-slate-100 dark:bg-slate-900/50 shadow-sm">
              <table className="w-full text-left text-sm text-slate-700 dark:text-slate-300">
                <thead className="bg-slate-200/80 dark:bg-slate-800/80 border-b border-slate-300 dark:border-slate-700">
                  <tr>
                    <th className="p-4 font-bold">Function</th>
                    <th className="p-4 font-bold">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-300 dark:divide-slate-700">
                  <tr>
                    <td className="p-4 font-mono text-sky-600 dark:text-sky-400">translate(x, y)</td>
                    <td className="p-4">Moves the element horizontally (x) and vertically (y) from its current position.</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-mono text-emerald-600 dark:text-emerald-400">scale(x, y)</td>
                    <td className="p-4">Resizes the element. A value of 1 is the original size, &gt;1 enlarges, and &lt;1 shrinks.</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-mono text-purple-600 dark:text-purple-400">rotate(angle)</td>
                    <td className="p-4">Rotates the element clockwise around its transform origin (e.g., 45deg, -90deg).</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-mono text-pink-600 dark:text-pink-400">skew(x, y)</td>
                    <td className="p-4">Tilts or skews the element along the X and Y axes, distorting its shape.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="flex gap-8">
              <div className="w-1/3 flex flex-col gap-6">
                
                {/* Transform Origin Dropdown */}
                <label className="flex flex-col text-sm font-medium text-slate-700 dark:text-slate-300">
                  Transform Origin
                  <select className="mt-2 p-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-700 dark:text-slate-300">
                    <option value="center">center</option>
                    <option value="top left">top left</option>
                    <option value="top right">top right</option>
                    <option value="bottom left">bottom left</option>
                    <option value="bottom right">bottom right</option>
                  </select>
                </label>

                {/* Rotate Slider */}
                <div className="pt-6 border-t border-slate-300 dark:border-slate-700">
                  <label className="flex flex-col text-sm font-medium text-slate-700 dark:text-slate-300">
                    <div className="flex justify-between mb-1">
                      <span>Rotate (deg)</span>
                      <span>45deg</span>
                    </div>
                    <input type="range" min="-180" max="180" defaultValue="45" className="mt-1 accent-purple-500" />
                  </label>
                </div>

                {/* Scale Slider */}
                <div className="pt-2">
                  <label className="flex flex-col text-sm font-medium text-slate-700 dark:text-slate-300">
                    <div className="flex justify-between mb-1">
                      <span>Scale</span>
                      <span>1.2</span>
                    </div>
                    <input type="range" min="0.5" max="2" step="0.1" defaultValue="1.2" className="mt-1 accent-emerald-500" />
                  </label>
                </div>

                {/* Translate X Slider */}
                <div className="pt-2">
                  <label className="flex flex-col text-sm font-medium text-slate-700 dark:text-slate-300">
                    <div className="flex justify-between mb-1">
                      <span>Translate X (px)</span>
                      <span>20px</span>
                    </div>
                    <input type="range" min="-100" max="100" defaultValue="20" className="mt-1 accent-sky-500" />
                  </label>
                </div>

                {/* Skew X Slider */}
                <div className="pt-2">
                  <label className="flex flex-col text-sm font-medium text-slate-700 dark:text-slate-300">
                    <div className="flex justify-between mb-1">
                      <span>Skew X (deg)</span>
                      <span>0deg</span>
                    </div>
                    <input type="range" min="-90" max="90" defaultValue="0" className="mt-1 accent-pink-500" />
                  </label>
                </div>

              </div>
              
              {/* Preview Container */}
              <div className="grow flex items-center justify-center bg-slate-300/50 dark:bg-slate-900/50 rounded-xl border border-slate-300 dark:border-slate-700 p-8 min-h-112.5 overflow-hidden">
                <div 
                  className="w-32 h-32 bg-sky-500 border-4 border-sky-400 shadow-lg flex items-center justify-center text-white font-bold text-center p-4 rounded-md transition-all"
                  style={{ 
                    transformOrigin: 'center',
                    transform: 'translateX(20px) scale(1.2) rotate(45deg) skewX(0deg)'
                  }}
                >
                  Target Element
                </div>
              </div>
            </div>
          </section>

{/* Z-INDEX SECTION */}
          <section id="z-index" className='p-8 bg-slate-200/50 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-800 rounded-xl shadow-lg scroll-mt-24'>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">Z-Index</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Controls the vertical stacking order of elements that overlap, determining which elements appear in front of others.
            </p>

            <p className="text-slate-800 dark:text-slate-200 mb-8 font-mono bg-white/50 dark:bg-slate-900/50 p-3 rounded-md border border-slate-300 dark:border-slate-700 inline-block shadow-sm">
              z-index: <span className="text-sky-600 dark:text-sky-400">number</span>;
            </p>

            <div className="flex gap-8">
              <div className="w-1/3 flex flex-col gap-6">
                
                {/* Z-Index Slider */}
                <label className="flex flex-col text-sm font-medium text-slate-700 dark:text-slate-300">
                  <div className="flex justify-between mb-1">
                    <span>Target Z-Index</span>
                    <span>10</span>
                  </div>
                  <input type="range" min="0" max="20" defaultValue="10" className="mt-1 accent-sky-500" />
                </label>

                {/* Element Controls */}
                <div className="pt-6 border-t border-slate-300 dark:border-slate-700 flex flex-col gap-3">
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Overlapping Elements</span>
                  <div className="flex gap-2">
                    <button className="grow px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white font-medium rounded-md transition-colors shadow-sm">
                      + Add
                    </button>
                    <button className="grow px-4 py-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-200 font-medium rounded-md transition-colors shadow-sm">
                      - Remove
                    </button>
                  </div>
                </div>

              </div>
              
              {/* Preview Container */}
              <div className="grow flex items-center justify-center bg-slate-300/50 dark:bg-slate-900/50 rounded-xl border border-slate-300 dark:border-slate-700 p-8 min-h-112.5">
                <div className="relative w-72 h-72 bg-slate-100 dark:bg-slate-800 rounded-lg shadow-inner border border-slate-300 dark:border-slate-600">
                  
                  {/* Background Static Element */}
                  <div 
                    className="absolute top-4 left-4 w-32 h-32 bg-slate-400 dark:bg-slate-600 rounded-md flex items-center justify-center text-white font-bold shadow-md" 
                    style={{ zIndex: 1 }}
                  >
                    z-index: 1
                  </div>
                  
                  {/* Foreground Static Element */}
                  <div 
                    className="absolute bottom-4 right-4 w-32 h-32 bg-slate-500 dark:bg-slate-700 rounded-md flex items-center justify-center text-white font-bold shadow-md" 
                    style={{ zIndex: 5 }}
                  >
                    z-index: 5
                  </div>
                  
                  {/* Target Element */}
                  <div 
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-sky-500 border-2 border-sky-300 rounded-md flex flex-col items-center justify-center text-white font-bold shadow-2xl transition-all" 
                    style={{ zIndex: 10 }}
                  >
                    <span className="text-xs uppercase tracking-wider mb-1 opacity-80">Target</span>
                    z-index: 10
                  </div>
                  
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}