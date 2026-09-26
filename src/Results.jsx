export default function Results() {
  return (
    <div className="flex flex-col items-center justify-center grow p-8">
      <div className="w-full max-w-2xl p-8 bg-slate-200/50 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-800 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">Final Results</h2>
        <p className="mb-6">The analysis is complete. Here is the summary of your session.</p>
        <ul className="space-y-2 text-left">
          <li className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded-md">
            <span>Accuracy:</span> <strong className="text-sky-600 dark:text-sky-400">94%</strong>
          </li>
          <li className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded-md">
            <span>Time Elapsed:</span> <strong className="text-sky-600 dark:text-sky-400">12m 34s</strong>
          </li>
          <li className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded-md">
            <span>Items Processed:</span> <strong className="text-sky-600 dark:text-sky-400">1,402</strong>
          </li>
        </ul>
      </div>
    </div>
  )
}