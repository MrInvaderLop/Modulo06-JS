import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Formulario from './pages/Formulario' 

import ProtectRoute from './components/ProtectRoute'


function App() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/formulario" element={<Formulario />} />

        
        <Route path="*" element={<NotFound />} />
        <Route path="/profile" element={<Profile />} />

      </Routes>
  )
}

export default App
