import { useState } from "react"
import toast, { Toaster } from 'react-hot-toast'

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




    const handleSubmit = (e) => {
        e.preventDefault()


        if ([nombre, serie, coleccion].includes('')) {
            toast.error("hay campos vacios")
            return
        }



        setLiga({ nombre, serie, coleccion, isChecked, monitas, ia })

    }

    const handleLimpiarFormulario = () => {
        setNombre('')
        setSerie('')
        setColeccion('')
        setLiga({})
        setIsChecked(false)
        setMonitas(false)
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

                <div className="flex items-center gap-3">
                    <label htmlFor="checkBox" className="font-bold text-slate-950 text-lg mb-1 block">Monas China IA</label>
                    <input
                        id="checkBox"
                        type="checkbox"
                        checked={ia}
                        onChange={() => setIa(!ia)}
                    />
                </div>
                <br />

                <div className="flex items-center gap-3">
                    <label htmlFor="checkBox" className="font-bold text-slate-950 text-lg mb-1 block">Monitas Chinas</label>
                    <input
                        id="checkBox"
                        type="checkbox"
                        checked={monitas}
                        onChange={() => setMonitas(!monitas)}
                    />
                </div>

                <br />
                <br />
                <div className="flex items-center gap-3">
                    <label htmlFor="checkBox" className="font-bold text-slate-950 text-lg mb-1 block">Producto de Gumroad</label>
                    <input
                        id="checkBox"
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => setIsChecked(!isChecked)}
                    />
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