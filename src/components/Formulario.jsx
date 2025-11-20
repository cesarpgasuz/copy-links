import { useState } from "react"
import toast, { Toaster } from 'react-hot-toast'
import styles from '../styles/styles.module.css'
import { generatePassword } from "../utilities/generatePassword"
import Texto from "./Texto"

const Formulario = ({ setLiga }) => {

    //nombre del personaje
    const [nombre, setNombre] = useState('')
    //nombre de la serie
    const [serie, setSerie] = useState('')
    // numero de la coleccion
    const [coleccion, setColeccion] = useState('')
    

    const [monitas, setMonitas] = useState(false)

    const [ia, setIa] = useState(false)

    // activar kurumi
    const [buttonKurumi, setButtonKurumi] = useState(false)


    const [contrasena, setContrasena] = useState('')

    const [enlacePatreon, setEnlacePatreon] = useState('')

    const [enlaceMega, setEnlaceMega] = useState('')

    const [enlaceGumroad, setEnlaceGumroad] = useState('')

    

    const [dragActive, setDragActive] = useState(false);




    const handleSubmit = (e) => {
        e.preventDefault()


        //limpiamos los datos antes de enviarlos
        const datosLimpiados = {
            nombre: nombre.trim(),
            serie: serie.trim(),
            coleccion: coleccion.trim(),
            monitas,
            ia,
            contrasena: contrasena.trim(),
            enlacePatreon: enlacePatreon.trim(),
            enlaceMega: enlaceMega.trim(),
            enlaceGumroad: enlaceGumroad.trim(),
            buttonKurumi
        }


        // if ([nombre, serie, coleccion].includes('')) {
        //     toast.error("hay campos vacios")
        //     return
        // }

        //comprobamos si hay campos vacios
        if ([datosLimpiados.nombre, datosLimpiados.serie, datosLimpiados.coleccion].includes('')) {
            toast.error("hay campos vacios")
            return
        }



        // setLiga({ nombre, serie, coleccion, isChecked, monitas, ia, contrasena, enlacePatreon, enlaceMega })

        //datos limpiados
        setLiga(datosLimpiados)

    }

    const handleLimpiarFormulario = () => {
        setNombre('')
        setSerie('')
        setColeccion('')
        setLiga({})
       
        setMonitas(false)
        setContrasena('')
        setEnlacePatreon('')
        setEnlaceMega('')
        setEnlaceGumroad('')
       
        setIa(false)
        setButtonKurumi(false)
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



    const handleDrop = (e) => {
        e.preventDefault();
        setDragActive(false);

        const file = e.dataTransfer.files[0];
        if (file && file.type === "text/plain") {
            const reader = new FileReader();
            reader.onload = (event) => {
                const text = event.target.result.split("\n").map((line) => line.trim());

                // Línea 1 -> Nombre del personaje
                setNombre(text[0] || "");

                // Línea 3 -> Colección
                const colMatch = text[2]?.match(/\d+/)?.[0] || "";
                setColeccion(colMatch);

                // Línea 4 -> Título
                setSerie(text[3] || "");

                // Línea 6 -> Contraseña con validación y limpieza
                const passLine = text[5] || "";
                const passMatch = passLine.match(/Contraseña:\s*(.+)/i);
                if (
                    passMatch &&
                    passMatch[1] !== "No hay contraseña para el archivo"
                ) {
                    // Tomar solo la primera palabra y quitar espacios extra
                    setContrasena(passMatch[1].split(" ")[0].trim());
                } else {
                    setContrasena("");
                }

            };
            reader.readAsText(file);
        }
    };


    return (

        <>
            <div className="sm:w-2/5 sm:h-screen bg-sky-950">
                {/* <Texto /> */}
                <Toaster />

                <div
                    onDragOver={(e) => {
                        e.preventDefault();
                        setDragActive(true);
                    }}
                    onDragLeave={() => setDragActive(false)}
                    onDrop={handleDrop}
                    className={` bg-white m-4 p-6 w-[80%] mx-auto mt-6 h-20 flex items-center justify-center border-2 border-dashed rounded-lg cursor-pointer transition-colors ${dragActive ? "border-blue-500 bg-blue-50" : "border-gray-400"
                        }`}
                >
                    {dragActive ? "Suelta el archivo aquí" : "Arrastra y suelta tu .txt aquí"}
                </div>


                <form
                    onSubmit={handleSubmit}
                    className="bg-white m-4 p-6 w-[80%] mx-auto mt-6 rounded">
                    <label htmlFor="nombre" className="font-bold text-slate-950 text-lg mb-1 block">Nombre Personaje</label>
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


                    <label htmlFor="enlaceColeccion" className="font-bold text-slate-950 text-lg mb-1 block">{ia ? 'SuscribeAdult' : 'Enlace Coleccion Patreon'}</label>
                    <input
                        id="enlaceColeccion"
                        type="text"
                        name=""
                        placeholder="Ingresa el enlace de la coleccion"
                        className="w-full border border-slate-300 mb-3 py-1 px-2 block"
                        value={enlacePatreon}
                        onChange={(e) => setEnlacePatreon(e.target.value)}
                    />
                    <label htmlFor="enlaceColeccionMega" className="font-bold text-orange-700 text-lg mb-1 block">Enlace Coleccion Mega</label>
                    <input
                        id="enlaceColeccionMega"
                        type="text"
                        name=""
                        placeholder="Ingresa el enlace de la coleccion de Mega"
                        className="w-full border border-slate-300 mb-3 py-1 px-2 block"
                        value={enlaceMega}
                        onChange={(e) => setEnlaceMega(e.target.value)}
                    />

                    <label htmlFor="enlaceColeccionGumroad" className="font-bold text-red-600 text-lg mb-1 block">Enlace Coleccion Boosty</label>
                    <input
                        id="enlaceColeccionGumroad"
                        type="text"
                        name=""
                        placeholder="Ingresa el enlace de la coleccion de Gumroad"
                        className="w-full border border-slate-300 mb-3 py-1 px-2 block"
                        value={enlaceGumroad}
                        onChange={(e) => setEnlaceGumroad(e.target.value)}
                    />

                  


                    <div className={`flex flex-col gap-3 py-4 ${styles.opciones}`}>
                        <div className={`flex items-center gap-3 ${ia ? styles.active : ''}`}>
                            <label htmlFor="monasia" className="font-bold text-slate-950 text-lg mb-1 block w-full h-full hover:cursor-pointer">Cosplay IA</label>
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

                        {/* <div className={`flex items-center gap-3 ${isChecked ? styles.active : ''}`}>
                            <label htmlFor="gumroad" className="font-bold text-slate-950 text-lg mb-1 block w-full h-full hover:cursor-pointer">Producto de Gumroad</label>
                            <input
                                id="gumroad"
                                type="checkbox"
                                checked={isChecked}
                                onChange={() => setIsChecked(!isChecked)}
                                className="hidden"
                            />
                        </div> */}

                        <div className={`flex items-center gap-3 ${buttonKurumi ? styles.active : ''}`}>
                            <label htmlFor="buttonKurumi" className="font-bold text-slate-950 text-lg mb-1 block w-full h-full hover:cursor-pointer">Kurumi Tokisaki</label>
                            <input
                                id="buttonKurumi"
                                type="checkbox"
                                checked={buttonKurumi}
                                onChange={() => setButtonKurumi(!buttonKurumi)}
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
                        className="mt-4 bg-lime-400 hover:bg-black hover:text-lime-400 text-black font-bold text-2xl uppercase hover:cursor-pointer w-full py-4"
                        value='Generar Links'
                    />

                </form>
                <button onClick={handleLimpiarFormulario} className="mx-auto block w-fit text-cyan-300 hover:border-b-2 pb-2 hover:border-cyan-300">Limpiar Formulario</button>
            </div>


        </>
    )
}
export default Formulario