import { useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast'
import Article from './ui/Article';
import ArticleTitle from './ui/ArticleTitle';
import ArticleBody from './ui/ArticleBody';
import { quitarEspacios, mayusculas, textosConGuion } from '../utilities';

const Listado = ({ liga }) => {
    const { nombre, serie, coleccion, gumroad, isChecked } = liga;
    const cardRef = useRef(null);
    const card2Ref = useRef(null);
    const card3Ref = useRef(null);
    const card4Ref = useRef(null);
    const card5Ref = useRef(null);
    const card6Ref = useRef(null);
    const card7Ref = useRef(null);
    const card8Ref = useRef(null);
    const card9Ref = useRef(null);
    const card10Ref = useRef(null);
    const card11Ref = useRef(null);
    const card12Ref = useRef(null);
    const card13Ref = useRef(null);
    const card14Ref = useRef(null);

    const handleCopyCard1 = () => {
        copyToClipboard(cardRef.current);
        toast.success('Texto Copiado')
    };

    const handleCopyCard2 = () => {
        copyToClipboard(card2Ref.current);
        toast.success('Texto Copiado')
    };
    const handleCopyCard3 = () => {
        copyToClipboard(card3Ref.current);
        toast.success('Texto Copiado')
    };
    const handleCopyCard4 = () => {
        copyToClipboard(card4Ref.current);
        toast.success('Texto Copiado')
    };
    const handleCopyCard5 = () => {
        copyToClipboard(card5Ref.current);
        toast.success('Texto Copiado')
    };
    const handleCopyCard6 = () => {
        copyToClipboard(card6Ref.current);
        toast.success('Texto Copiado')
    };
    const handleCopyCard7 = () => {
        copyToClipboard(card7Ref.current);
        toast.success('Texto Copiado')
    };
    const handleCopyCard8 = () => {
        copyToClipboard(card8Ref.current);
        toast.success('Texto Copiado')
    };
    const handleCopyCard9 = () => {
        copyToClipboard(card9Ref.current);
        toast.success('Texto Copiado')
    };
    const handleCopyCard10 = () => {
        copyToClipboard(card10Ref.current);
        toast.success('Texto Copiado')
    };
    const handleCopyCard11 = () => {
        copyToClipboard(card11Ref.current);
        toast.success('Texto Copiado')
    };
    const handleCopyCard12 = () => {
        copyToClipboard(card12Ref.current);
        toast.success('Texto Copiado')
    };
    const handleCopyCard13 = () => {
        copyToClipboard(card13Ref.current);
        toast.success('Texto Copiado')
    };
    const handleCopyCard14 = () => {
        copyToClipboard(card14Ref.current);
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


    return (
        <div className="sm:w-3/5 h-full mt-12 px-6 sm:h-screen sm:mt-0 bg-white overflow-y-auto pt-5">
            {liga && liga.nombre ? (
                <main>
                    <Toaster />
                    <h2 className='font-bold text-2xl text-slate-950'>{mayusculas(nombre)}</h2>
                    <span className='text-slate-400'>{mayusculas(serie)}</span> <span className='text-slate-600 font-bold'>#{coleccion}</span>

                    <section className='flex flex-col gap-4 pt-5 pb-10'>
                        {/* archivos winrar */}
                        <Article>
                            <ArticleTitle>Winrar IA</ArticleTitle>
                            <ArticleBody>
                                <p ref={card7Ref}>{`${textosConGuion(nombre)}_IA_${coleccion}`}</p>
                                <button className='button-copy' onClick={handleCopyCard7}>Copy</button>
                            </ArticleBody>
                        </Article>
                        <Article>
                            <ArticleTitle>Winrar Anime</ArticleTitle>
                            <ArticleBody>
                                <p ref={card8Ref}>{`${textosConGuion(nombre)}_Anime_${coleccion}`}</p>
                                <button className='button-copy' onClick={handleCopyCard8}>Copy</button>
                            </ArticleBody>
                        </Article>

                        {/* Redes Sociales */}
                        <Article>
                            <ArticleTitle>Patreon IA - Title</ArticleTitle>
                            <ArticleBody>
                                <p ref={cardRef}>{mayusculas(nombre)} IA #{coleccion}</p>
                                <button className='button-copy' onClick={handleCopyCard1}>Copy</button>
                            </ArticleBody>
                        </Article>

                        <Article>
                            <ArticleTitle>Patreon Preview - Title</ArticleTitle>
                            <ArticleBody>
                                <p ref={card2Ref}>{mayusculas(nombre)} IA #{coleccion} (Preview)</p>
                                <button className='button-copy' onClick={handleCopyCard2}>Copy</button>
                            </ArticleBody>
                        </Article>

                        <Article>
                            <ArticleTitle>Patreon Anime</ArticleTitle>
                            <ArticleBody>
                                <p ref={card3Ref}>{mayusculas(nombre)} Anime #{coleccion}</p>
                                <button className='button-copy' onClick={handleCopyCard3}>Copy</button>
                            </ArticleBody>
                        </Article>


                        <Article>
                            <ArticleTitle>Facebook, Twitter, Instagram</ArticleTitle>
                            <ArticleBody>
                                <div ref={card4Ref}>
                                    <strong>{mayusculas(nombre)}</strong><br />
                                    <span>👉 https://monaschinas.link</span><br /><br />
                                    <span>#{quitarEspacios(nombre).toLowerCase()} #{quitarEspacios(serie).toLowerCase()} #AIart #AIphoto #anime #AiAnime #AIanimegirl #DigitalArt #AIArtwork #aigirls #animeIA #waifu #cosplay</span>
                                </div>
                                <button className='button-copy' onClick={handleCopyCard4}>Copy</button>
                            </ArticleBody>

                        </Article>

                        <Article>
                            <ArticleTitle>Grupo Facebook</ArticleTitle>
                            <ArticleBody>
                                <p ref={card14Ref}>{mayusculas(nombre)} - {mayusculas(serie)}</p>
                                <button className='button-copy' onClick={handleCopyCard14}>Copy</button>
                            </ArticleBody>

                        </Article>



                        {isChecked && (


                            <>
                                <Article>
                                    <ArticleTitle>FIgma IA</ArticleTitle>
                                    <ArticleBody>
                                        <div ref={card11Ref}>
                                            <strong>{mayusculas(nombre)} IA #{coleccion}</strong><br />
                                            <span>{mayusculas(serie)}</span>
                                        </div>
                                        <button className='button-copy' onClick={handleCopyCard11}>Copy</button>
                                    </ArticleBody>

                                </Article>


                                <Article>
                                    <ArticleTitle>Figma Anime</ArticleTitle>
                                    <ArticleBody>
                                        <div ref={card12Ref}>
                                            <strong>{mayusculas(nombre)} Anime #{coleccion}</strong><br />
                                            <span>{mayusculas(serie)}</span>
                                        </div>
                                        <button className='button-copy' onClick={handleCopyCard12}>Copy</button>
                                    </ArticleBody>

                                </Article>
                                <Article>
                                    <ArticleTitle>Gumroad IA - Title</ArticleTitle>
                                    <ArticleBody>
                                        <p ref={card9Ref}>{mayusculas(nombre)} IA #{coleccion} - {mayusculas(serie)}</p>
                                        <button className='button-copy' onClick={handleCopyCard9}>Copy</button>
                                    </ArticleBody>
                                </Article>
                                <Article>
                                    <ArticleTitle>Gumroad Anime - Title</ArticleTitle>
                                    <ArticleBody>
                                        <p ref={card10Ref}>{mayusculas(nombre)} Anime #{coleccion} - {mayusculas(serie)}</p>
                                        <button className='button-copy' onClick={handleCopyCard10}>Copy</button>
                                    </ArticleBody>
                                </Article>
                            </>

                        )}



                        <Article>
                            <ArticleTitle>Pixiv Title</ArticleTitle>
                            <ArticleBody>
                                <p ref={card5Ref}>{mayusculas(nombre)} #{coleccion}</p>
                                <button className='button-copy' onClick={handleCopyCard5}>Copy</button>
                            </ArticleBody>
                        </Article>


                        {!isChecked && (

                            <Article>
                                <ArticleTitle>Pixiv Body Sin Gumroad</ArticleTitle>
                                <ArticleBody>
                                    <div ref={card13Ref}>
                                        <span>👇👇Find various uncensored images in  🔥</span><br />
                                        <span>👉 https://www.patreon.com/monaschinas_ia  </span><br /><br />
                                        <span>👇👇Social networks  🔥</span><br />
                                        <span>👉 https://monaschinas.link  </span><br /><br />
                                    </div>
                                    <button className='button-copy' onClick={handleCopyCard13}>Copy</button>
                                </ArticleBody>
                            </Article>
                        )}


                        {gumroad && (
                            <>

                                <Article>
                                    <ArticleTitle>Pixiv Body</ArticleTitle>
                                    <ArticleBody>
                                        <div ref={card6Ref}>
                                            <span>Uncensored images 🔥</span><br />
                                            <span>👉 https://www.patreon.com/monaschinas_ia  </span><br /><br />
                                            <span>👇👇Social networks  🔥</span><br />
                                            <span>👉 https://monaschinas.link  </span><br /><br />

                                            {gumroad && (
                                                <>
                                                    <span>Buy Collection Separately</span><br />
                                                    <span className='break-words'>👉 {gumroad} 👈</span><br /><br />
                                                </>
                                            )}

                                        </div>
                                        <button className='button-copy' onClick={handleCopyCard6}>Copy</button>
                                    </ArticleBody>
                                </Article>

                            </>

                        )}










                    </section>




                </main>
            ) : (
                <div className='w-full h-full flex justify-center items-center text-4xl text-gray-300'>Agrega un personaje ...</div>
            )}
        </div>
    );
};

export default Listado;
