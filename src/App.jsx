import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Formulario from './components/Formulario'
import './App.css'
import Listado from './components/Listado'

function App() {
  const [liga, setLiga] = useState({})

  return (
    <section className='sm:flex'>
      <Formulario
        liga={liga}
        setLiga={setLiga}
      />
      <Listado
        liga={liga}
      />
    </section>
  )
}

export default App
