import { Routes, Route } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Lobby from './Lobby'
import Round from './Round'
import Voting from './Voting'
import Results from './Results'
import Vistool from './Vistool'

function App() {
  return (
    <>
      <Header />
      <main className="grow flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lobby" element={<Lobby />} />
          <Route path="/lobby/:code" element={<Lobby />} />
          <Route path="/round/:code" element={<Round />} />
          <Route path="/voting/:code" element={<Voting />} />
          <Route path="/results" element={<Results />} />
          <Route path="/results/:code" element={<Results />} />
          <Route path="/vistool" element={<Vistool />} />
        </Routes>
      </main>
    </>
  )
}

export default App