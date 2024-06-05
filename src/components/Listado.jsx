import { useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast'

const Listado = ({ liga }) => {
    const { nombre, serie, coleccion } = liga;
    const cardRef = useRef(null);
    const card2Ref = useRef(null);

    const handleCopyCard1 = () => {
        copyToClipboard(cardRef.current);
        toast.success('Texto Copiado')
    };

    const handleCopyCard2 = () => {
        copyToClipboard(card2Ref.current);
        toast.success('Texto Copiado')
    };

    const copyToClipboard = (element) => {
        if (element) {
            const selection = window.getSelection();
            const range = document.createRange();
            range.selectNodeContents(element);
            selection.removeAllRanges();
            selection.addRange(range);
            document.execCommand('copy');
            selection.removeAllRanges();
        }
    };

    const quitarEspacios = (texto) => {
        return texto.split(" ").join("");
    }

    return (
        <div className="sm:w-2/4 h-full mt-12 sm:mt-0 bg-white">
            <h2>Listado</h2>
            {liga && liga.nombre ? (
                <>
                    <Toaster />
                    <p>Nombre: {nombre}</p>
                    <p>Serie: {serie}</p>
                    <p>Colección: {coleccion}</p>

                    <div className="card border boder-black" ref={cardRef}>
                        {nombre} - {serie} No. {coleccion}
                        
                    </div><button className='bg-orange-300' onClick={handleCopyCard1}>Copiar texto</button>

                    <div className="card-2 border boder-black" ref={card2Ref}>
                        <span>Personaje: {nombre}</span><br />
                        <span>Serie: {serie}</span><br />
                        <span>Numero de Coleccion: {coleccion}</span><br />
                        <span>👉 https://monaschinas.link</span><br />
                        <span>#{quitarEspacios(nombre)} #{quitarEspacios(serie)} #anime #animefanart #animeia #animecosplay</span>
                        
                    </div><button className='bg-orange-300' onClick={handleCopyCard2}>Copiar texto</button>
                </>
            ) : (
                <p>Agrega un personaje..</p>
            )}
        </div>
    );
};

export default Listado;
