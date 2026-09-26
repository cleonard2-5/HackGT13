export default function Results() {
  return (
    <div className="page-container">
      <div className="card">
        <h2>Final Results</h2>
        <p>The analysis is complete. Here is the summary of your session.</p>
        <ul style={{ textAlign: 'left', marginTop: '20px', color: 'var(--text-h)' }}>
          <li>Accuracy: 94%</li>
          <li>Time Elapsed: 12m 34s</li>
          <li>Items Processed: 1,402</li>
        </ul>
      </div>
    </div>
  )
}