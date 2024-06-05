import { useState } from "react"
import toast, {Toaster} from 'react-hot-toast'

const Formulario = ({ liga, setLiga }) => {

    //nombre del personaje
    const [nombre, setNombre] = useState('')
    //nombre de la serie
    const [serie, setSerie] = useState('')
    // numero de la coleccion
    const [coleccion, setColeccion] = useState('')
    //link gumroad 
    const [gumroad, setGumroad] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        

        if([nombre, serie, coleccion].includes('')){
            toast.error("hay campos vacios")
            return
        }

        

        setLiga({nombre, serie, coleccion, gumroad})
        console.log('link generado..')

    }


    return (
        <div className="sm:w-2/4 sm:h-full bg-gray-400">
            <Toaster />
            <h1>Formulario</h1>
            <form
                onSubmit={handleSubmit}
                className="bg-white m-4 p-2">
                <label htmlFor="nombre" className="font-bold">Nombre Personaje</label>
                <input
                    id="nombre"
                    type="text"
                    name=""
                    placeholder="Nombre del personaje"
                    className="w-full border border-gray-500"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
                <label htmlFor="serie" className="font-bold">Nombre de la Serie</label>
                <input
                    id="serie"
                    type="text"
                    name=""
                    className="w-full border border-gray-500"
                    placeholder="Nombre de la serie"
                    value={serie}
                    onChange={(e) => setSerie(e.target.value)}
                />
                <label htmlFor="coleccion" className="font-bold">No. Coleccion</label>
                <input
                    id="coleccion"
                    type="text"
                    name=""
                    placeholder="Ingresa el no de la coleccion"
                    className="w-full border border-gray-500"
                    value={coleccion}
                    onChange={(e) => setColeccion(e.target.value)}
                />
                <label htmlFor="gumroad" className="font-bold">Link Gumroad</label>
                <input
                    id="gumroad"
                    type="text"
                    name=""
                    placeholder="Ingresa el link de gumroad"
                    className="w-full border border-500"
                    value={gumroad}
                    onChange={(e) => setGumroad(e.target.value)}
                />

                <input
                    type="submit"
                    className="mt-4 bg-blue-300 text-blue-700 hover:cursor-pointer w-full py-4"
                    value='Generar Links'
                />
            </form>
        </div>
    )
}
export default Formulario