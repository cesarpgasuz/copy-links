import { useState } from "react"
import toast, { Toaster } from 'react-hot-toast'
import styles from '../styles/styles.module.css'
import { generatePassword } from "../utilities/generatePassword"

const Formulario = ({ setLiga }) => {

    //nombre del personaje
    const [nombre, setNombre] = useState('')
    //nombre de la serie
    const [serie, setSerie] = useState('')
    // numero de la coleccion
    const [coleccion, setColeccion] = useState('')
    //activar gumroad 
    const [isChecked, setIsChecked] = useState(false);
    //link gumroad 
    // const [gumroad, setGumroad] = useState('')

    const [monitas, setMonitas] = useState(false)

    const [ia, setIa] = useState(false)

    const [contrasena, setContrasena] = useState('')

    const [enlacePatreon, setEnlacePatreon] = useState('')

    const [enlaceMega, setEnlaceMega] = useState('')




    const handleSubmit = (e) => {
        e.preventDefault()


        if ([nombre, serie, coleccion].includes('')) {
            toast.error("hay campos vacios")
            return
        }



        setLiga({ nombre, serie, coleccion, isChecked, monitas, ia, contrasena, enlacePatreon, enlaceMega })

    }

    const handleLimpiarFormulario = () => {
        setNombre('')
        setSerie('')
        setColeccion('')
        setLiga({})
        setIsChecked(false)
        setMonitas(false)
        setContrasena('')
        setEnlacePatreon('')
        setEnlaceMega('')
    }

    const handleGeneratePassword = () => {
        const newPassword = generatePassword();
        setContrasena(newPassword);
        toast.success("Contraseña generada")
    }

    const handleClearPassword = () => {
        setContrasena('');
        toast.success("Contraseña eliminada")
    }


    return (
        <div className="sm:w-2/5 sm:h-screen bg-sky-950">
            <Toaster />
            <form
                onSubmit={handleSubmit}
                className="bg-white m-4 p-6 w-[80%] mx-auto mt-6 rounded">
                <label htmlFor="nombre" className="font-bold text-slate-950 text-lg mb-1 block">Personaje</label>
                <input
                    id="nombre"
                    type="text"
                    name=""
                    placeholder="Nombre del personaje"
                    className="w-full border border-slate-300 mb-3 py-1 px-2 block"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
                <label htmlFor="serie" className="font-bold text-slate-950 text-lg mb-1 block">Serie</label>
                <input
                    id="serie"
                    type="text"
                    name=""
                    className="w-full border border-slate-300 mb-3 py-1 px-2 block"
                    placeholder="Nombre de la serie"
                    value={serie}
                    onChange={(e) => setSerie(e.target.value)}
                />
                <label htmlFor="coleccion" className="font-bold text-slate-950 text-lg mb-1 block">No. Coleccion</label>
                <input
                    id="coleccion"
                    type="number"
                    name=""
                    placeholder="Ingresa el no de la coleccion"
                    className="w-full border border-slate-300 mb-3 py-1 px-2 block"
                    value={coleccion}
                    onChange={(e) => setColeccion(e.target.value)}
                />
                <label htmlFor="contrasena" className="font-bold text-slate-950 text-lg mb-1 block">Contraseña Winrar</label>
                <div className="flex gap-2 items-center mb-3 ">
                    <input
                        id="contrasena"
                        type="text"
                        name=""
                        placeholder="Ingresa la contraseña del .rar"
                        className="w-full border border-slate-300 py-1 px-2 block"
                        value={contrasena}
                        onChange={(e) => setContrasena(e.target.value)}
                    />
                    <button
                        type="button"
                        onClick={handleGeneratePassword}
                        className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-700"
                    >Generar</button>
                    <button
                        type="button"
                        onClick={handleClearPassword}
                        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
                    >
                        Limpiar
                    </button>
                </div>


                <label htmlFor="enlaceColeccion" className="font-bold text-slate-950 text-lg mb-1 block">Enlace Coleccion Patreon</label>
                <input
                    id="enlaceColeccion"
                    type="text"
                    name=""
                    placeholder="Ingresa el enlace de la coleccion"
                    className="w-full border border-slate-300 mb-3 py-1 px-2 block"
                    value={enlacePatreon}
                    onChange={(e) => setEnlacePatreon(e.target.value)}
                />
                <label htmlFor="enlaceColeccionMega" className="font-bold text-red-500 text-lg mb-1 block">Enlace Coleccion Mega</label>
                <input
                    id="enlaceColeccionMega"
                    type="text"
                    name=""
                    placeholder="Ingresa el enlace de la coleccion de Mega"
                    className="w-full border border-slate-300 mb-3 py-1 px-2 block"
                    value={enlaceMega}
                    onChange={(e) => setEnlaceMega(e.target.value)}
                />


                <div className={`flex flex-col gap-3 py-4 ${styles.opciones}`}>
                    <div className={`flex items-center gap-3 ${ia ? styles.active : ''}`}>
                        <label htmlFor="monasia" className="font-bold text-slate-950 text-lg mb-1 block w-full h-full hover:cursor-pointer">Monas China IA</label>
                        <input
                            id="monasia"
                            type="checkbox"
                            checked={ia}
                            onChange={() => setIa(!ia)}
                            className="hidden"
                        />
                    </div>

                    <div className={`flex items-center gap-3 ${monitas ? styles.active : ''}`}>
                        <label htmlFor="monitasia" className="font-bold text-slate-950 text-lg mb-1 block w-full h-full hover:cursor-pointer">Monitas Chinas</label>
                        <input
                            id="monitasia"
                            type="checkbox"
                            checked={monitas}
                            onChange={() => setMonitas(!monitas)}
                            className="hidden"
                        />
                    </div>

                    <div className={`flex items-center gap-3 ${isChecked ? styles.active : ''}`}>
                        <label htmlFor="gumroad" className="font-bold text-slate-950 text-lg mb-1 block w-full h-full hover:cursor-pointer">Producto de Gumroad</label>
                        <input
                            id="gumroad"
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => setIsChecked(!isChecked)}
                            className="hidden"
                        />
                    </div>

                </div>

                {/* <label htmlFor="gumroad" className="font-bold text-slate-950 text-lg mb-1 block">Link Gumroad <strong className="text-pink-700">**</strong></label>
                <input
                    id="gumroad"
                    type="text"
                    name=""
                    placeholder="Ingresa el link de gumroad"
                    className="w-full border border-slate-300 mb-3 py-1 px-2 block"
                    value={gumroad}
                    onChange={(e) => setGumroad(e.target.value)}
                /> */}

                <input
                    type="submit"
                    className="mt-4 bg-lime-400 hover:bg-black hover:text-lime-400 text-black font-bold text-lg uppercase hover:cursor-pointer w-full py-1"
                    value='Generar Links'
                />

            </form>
            <button onClick={handleLimpiarFormulario} className="mx-auto block w-fit text-cyan-300 hover:border-b-2 pb-2 hover:border-cyan-300">Limpiar Formulario</button>
        </div>
    )
}
export default Formulario