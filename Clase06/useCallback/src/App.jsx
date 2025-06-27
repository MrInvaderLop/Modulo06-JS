import React, {useCallback, useState} from 'react'
import './App.css'

function ListaNombres({onFilter}) {
  console.log ("Renderizado de Lista de nombres")

  return (
    <input type="text" placeholder='Buscar Nombres' onChange={(e) => onFilter(e.target.value)} />
  )
}

const memorizarListaNombres = React.memo(ListaNombres)

function App() {
  const [nombres] = useState(["Armando", "Juan", "Pablo", "Lucía", "Marcos"])
  const [filtro, setFiltro] = useState("")

  const filtrar = useCallback((value) => {
    setFiltro(value.toLowerCase())
  },[])

  const resultado = nombres.filter(n => n.toLowerCase().includes(filtro))

  return ( 
    <>
      <h1>Buscar Nombre</h1>
      <memorizarListaNombres onFilter={filtrar}></>
      <ul>
        {resultado.map((n,i) => {
          <li key={i}>{n}</li>
        })}
      </ul>


    </>
  )
  
}

export default App
