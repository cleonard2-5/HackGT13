import { Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import Lobby from './Lobby'
import Results from './Results'
import Vistool from './Vistool'
import './App.css'

function App() {
  return (
    <>
      {/* Navigation Menu */}
      <nav style={{ padding: '20px', gap: '15px', display: 'flex', justifyContent: 'center' }}>
        <Link to="/">Home</Link>
        <Link to="/lobby">Lobby</Link>
        <Link to="/results">Results</Link>
        <Link to="/vistool">Vistool</Link>
      </nav>

      {/* Page Content Rendering */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lobby" element={<Lobby />} />
          <Route path="/results" element={<Results />} />
          <Route path="/vistool" element={<Vistool />} />
        </Routes>
      </main>
    </>
  )
}

export default App;