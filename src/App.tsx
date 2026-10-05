import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Lab from './pages/Lab'
import Practice from './pages/Practice'
import MyLabs from './pages/MyLabs'
import Learn from './pages/Learn'
import Challenges from './pages/Challenges'
import Bookmarks from './pages/Bookmarks'
import ProgressPage from './pages/Progress'
import Settings from './pages/Settings'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/lab" element={<Lab />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/my-labs" element={<MyLabs />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/challenges" element={<Challenges />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/progress" element={<ProgressPage />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App