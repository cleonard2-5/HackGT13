export default function Lobby() {
  return (
    <div className="page-container">
      <div className="card">
        <h2>Lobby</h2>
        <p>Waiting for other participants to join the session...</p>
        <div style={{ margin: '24px 0', padding: '16px', background: 'var(--code-bg)', borderRadius: '6px' }}>
          <strong>Status:</strong> 3/4 Players Connected
        </div>
      </div>
    </div>
  )
}