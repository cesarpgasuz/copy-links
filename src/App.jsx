import { useState } from 'react'
import Formulario from './components/Formulario'
import Listado from './components/Listado'

function App() {
  const [liga, setLiga] = useState({})

  return (
    <section className='sm:flex'>
      <Formulario
        setLiga={setLiga}
      />
      <Listado
        liga={liga}
      />
    </section>
  )
}

export default App
