import Navbar from './Navbar'

export default function Vistool() {
  const Topics = [
    'Background', 
    { title: 'Border', subItems: ['Border Radius', 'Border Style'] },  
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
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              border: border-width border-style border-color;
            </p>

            <div id="border-radius" className="mb-8 scroll-mt-24 pt-4 border-t border-slate-300 dark:border-slate-700">
              <h4 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">Border Radius</h4>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Rounds the corners of an element's outer border edge.
              </p>
            </div>

            <div id="border-style" className="mb-8 scroll-mt-24 pt-4 border-t border-slate-300 dark:border-slate-700">
              <h4 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">Border Style</h4>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Sets the line style for all four sides of an element's border (e.g., solid, dashed, dotted).
              </p>
            </div>
          </section>

          {/* DIMENSIONS SECTION */}
          <section id="dimensions" className='p-8 bg-slate-200/50 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-800 rounded-xl shadow-lg scroll-mt-24'>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">Dimensions</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 pb-4 border-b border-slate-300 dark:border-slate-700">
              Controls the width and height properties of an element, dictating its overall size within the layout document.
            </p>
            <p className="text-slate-600 dark:text-slate-400 mb-6 pb-4 border-b border-slate-300 dark:border-slate-700">
              width: lenth;
            </p>
            <p className="text-slate-600 dark:text-slate-400 mb-6 pb-4 border-b border-slate-300 dark:border-slate-700">
              height: length;
            </p>
          </section>

          {/* DISPLAY SECTION */}
          <section id="display" className='p-8 bg-slate-200/50 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-800 rounded-xl shadow-lg scroll-mt-24'>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">Display</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 pb-4 border-b border-slate-300 dark:border-slate-700">
              Determines whether an element is treated as a block or inline element, and sets the layout model used for its children.
            </p>

            <p className="text-slate-600 dark:text-slate-400 mb-6 pb-4 border-b border-slate-300 dark:border-slate-700">
              display: value;
            </p>
          </section>

          {/* FLEX SECTION */}
          <section id="flex" className="p-8 bg-slate-200/50 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-800 rounded-xl shadow-lg scroll-mt-24">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">Flex</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 pb-4 border-b border-slate-300 dark:border-slate-700">
              Flexbox provides a one-dimensional layout method for arranging items in rows or columns, managing their alignment and space distribution.
            </p>

            <p className="text-slate-600 dark:text-slate-400 mb-6 pb-4 border-b border-slate-300 dark:border-slate-700">
              flex: flex-grow flex-shirnk flex-basis;
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

          {/* FONT SECTION */}
          <section id="font" className='p-8 bg-slate-200/50 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-800 rounded-xl shadow-lg scroll-mt-24'>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">Font</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Defines the typographic characteristics of text elements, dictating how characters are rendered.
            </p>

            <p className="text-slate-600 dark:text-slate-400 mb-6">
              font-size: font-style font-variant font-weight font-size font-family;
            </p>

            <div id="font-size" className="mb-8 scroll-mt-24 pt-4 border-t border-slate-300 dark:border-slate-700">
              <h4 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">Font Size</h4>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Sets the size of the font, adjusting the overall height of the text characters.
              </p>
            </div>

            <div id="font-weight" className="mb-8 scroll-mt-24 pt-4 border-t border-slate-300 dark:border-slate-700">
              <h4 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">Font Weight</h4>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Sets the thickness or boldness of the font, ranging from thin to heavy.
              </p>
            </div>
          </section>

          {/* GRID SECTION */}
          <section id="grid" className='p-8 bg-slate-200/50 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-800 rounded-xl shadow-lg scroll-mt-24'>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">Grid</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 pb-4 border-b border-slate-300 dark:border-slate-700">
              Provides a two-dimensional layout system that organizes content into a matrix of columns and rows.
            </p>

            <p className="text-slate-600 dark:text-slate-400 mb-6 pb-4 border-b border-slate-300 dark:border-slate-700">
              grid: none|grid-template-rows|columns|areas
            </p>
          </section>

          {/* JUSTIFY & ALIGN SECTION */}
          <section id="justify-&-align" className='p-8 bg-slate-200/50 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-800 rounded-xl shadow-lg scroll-mt-24'>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">Justify & Align</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 pb-4 border-b border-slate-300 dark:border-slate-700">
              Controls the alignment and spacing of items across the horizontal axis (justify) and vertical axis (align) within flexbox or grid containers.
            </p>

            <p className="text-slate-600 dark:text-slate-400 mb-6 pb-4 border-b border-slate-300 dark:border-slate-700">
              justify-content: stretch|center|flex-start|flex-end|space-between|space-around|space-evenly;<br></br>
              justify-items: normal|stretch|positional alignment|flex-start|flex-end|baseline;<br></br>
              justify-self: auto|stretch|center|flex-start|flex-end|baseline;<br></br>
              align-content: stretch|center|flex-start|flex-end|space-between|space-around|space-evenly;<br></br>
              align-items: normal|stretch|positional alignment|flex-start|flex-end|baseline;<br></br>
              align-self: auto|stretch|center|flex-start|flex-end|baseline;
            </p>
          </section>

          {/* MARGIN SECTION */}
          <section id="margin" className='p-8 bg-slate-200/50 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-800 rounded-xl shadow-lg scroll-mt-24'>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">Margin</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 pb-4 border-b border-slate-300 dark:border-slate-700">
              Creates space around elements, completely outside of any defined borders, effectively pushing adjacent elements away.
            </p>

            <p className="text-slate-600 dark:text-slate-400 mb-6 pb-4 border-b border-slate-300 dark:border-slate-700">
              margin: length;
            </p>
          </section>

          {/* PADDING SECTION */}
          <section id="padding" className="p-8 bg-slate-200/50 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-800 rounded-xl shadow-lg scroll-mt-24">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">Padding</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 pb-4 border-b border-slate-300 dark:border-slate-700">
              Creates internal space around an element's content, pushing the border outward and increasing the element's total size.
            </p>

            <p className="text-slate-600 dark:text-slate-400 mb-6 pb-4 border-b border-slate-300 dark:border-slate-700">
              padding: length;
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

          {/* POSITION SECTION */}
          <section id="position" className='p-8 bg-slate-200/50 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-800 rounded-xl shadow-lg scroll-mt-24'>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">Position</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 pb-4 border-b border-slate-300 dark:border-slate-700">
              Specifies how an element is positioned in a document (static, relative, absolute, fixed, or sticky) and anchors it using directional offsets.
            </p>

            <p className="text-slate-600 dark:text-slate-400 mb-6 pb-4 border-b border-slate-300 dark:border-slate-700">
              position: static|absolute|fixed|relative|sticky;<br></br>
              left: length;<br></br>
              right: length;<br></br>
              top: length;<br></br>
              bottom: length;
            </p>
          </section>

          {/* SHADOW SECTION */}
          <section id="shadow" className='p-8 bg-slate-200/50 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-800 rounded-xl shadow-lg scroll-mt-24'>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">Shadow</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 pb-4 border-b border-slate-300 dark:border-slate-700">
              Applies drop shadows to the element's bounding box (box-shadow) or directly to its text (text-shadow) to create the illusion of depth.
            </p>

            <p className="text-slate-600 dark:text-slate-400 mb-6 pb-4 border-b border-slate-300 dark:border-slate-700">
              box-shadow: h-offset v-offset blur spread color ;<br></br>
              text-shadow: h-shadow v-shadow blur-radius color;
            </p>
          </section>

          {/* TRANSFORM SECTION */}
          <section id="transform" className='p-8 bg-slate-200/50 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-800 rounded-xl shadow-lg scroll-mt-24'>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">Transform</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 pb-4 border-b border-slate-300 dark:border-slate-700">
              Modifies the coordinate space of the CSS visual formatting model, allowing elements to be rotated, scaled, skewed, or translated.
            </p>

            <p className="text-slate-600 dark:text-slate-400 mb-6 pb-4 border-b border-slate-300 dark:border-slate-700">
              transform: transform-functions;
            </p>
            {/* Table with each function, and a description */}
          </section>

          {/* Z-INDEX SECTION */}
          <section id="z-index" className='p-8 bg-slate-200/50 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-800 rounded-xl shadow-lg scroll-mt-24'>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">Z-Index</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 pb-4 border-b border-slate-300 dark:border-slate-700">
              Controls the vertical stacking order of elements that overlap, determining which elements appear in front of others.
            </p>

            <p className="text-slate-600 dark:text-slate-400 mb-6 pb-4 border-b border-slate-300 dark:border-slate-700">
              z-index: number;
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}