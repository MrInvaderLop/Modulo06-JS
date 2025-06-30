import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css'

import Home from './pages/Home'
import Citas from './pages/Citas'
import CitaDetalle from './pages/CitaDetalle'
import NotFound from './pages/NotFound'

import './pages/css/header.css'


function App() {

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/citas">Citas</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/citas" element={<Citas />} />
        <Route path="/cita/:id" element={<CitaDetalle />} />
        <Route path="*" element={<NotFound />} />
      </Routes>      
    </BrowserRouter>
  )
}

export default App
