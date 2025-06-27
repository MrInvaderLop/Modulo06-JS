//Usando Hook: useReducer

import { useReducer } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const initialState = {count: 0}

function reducer {state, action}{
  switch(action, type){
    case 'incrementar':
      return {count: state.count + 1};
    case 'decrementar':
      return {count: state.count - 1};
    case 'reiniciar':
      return {count: 0};
    default:
      throw new Error('Acción no reconocida')
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
 //dispatch es una función para enviar las acciones
  return (
    <>
    <h2>Contador: {state.count} </h2>

    <button onClick = {() => dispatch({type: 'incrementar'})}> +1 </button>
    <button onClick = {() => dispatch({type: 'decrementar'})}> -1 </button>
    <button onClick = {() => dispatch({type: 'reiniciar'})}> Reiniciar </button>

    </>
  )
}

export default App
