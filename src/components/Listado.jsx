import { useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast'
import Article from './ui/Article';
import ArticleTitle from './ui/ArticleTitle';
import ArticleBody from './ui/ArticleBody';
import LinkError from './ui/LinkError';
import { quitarEspacios, mayusculas, textosConGuion, eliminarCadenaPatreon } from '../utilities';
import TitlePersonajeDescriptionPatreon from './ui/TitlePersonajeDescriptionPatreon';
import Contrasena from './ui/Contrasena';

const Listado = ({ liga }) => {
    const { nombre, serie, coleccion, monitas, ia, contrasena, enlacePatreon, enlaceMega, enlaceGumroad, buttonKurumi } = liga;
    const cardRef = useRef(null);
    const cardPatreonDescriptionRef = useRef(null);
    const card3Ref = useRef(null);
    const card5Ref = useRef(null);
    const card7Ref = useRef(null);
    const card9Ref = useRef(null);
    const card11Ref = useRef(null);
    const card12Ref = useRef(null);
    const card13Ref = useRef(null);
    const card15Ref = useRef(null);
    const nombreRef = useRef(null);
    const cardTitleXJaponesRef = useRef(null);
    const serieRef = useRef(null)
    const cardTextDiscord = useRef(null)
    const contrasenaRef = useRef(null)


    const handleCopyCard1 = () => {
        copyToClipboard(cardRef.current);
        toast.success('Texto Copiado')
    };

    const handleCopyPatreonDescription = () => {
        copyToClipboard(cardPatreonDescriptionRef.current);
        toast.success('Texto Copiado')
    };
    const handleCopyCard3 = () => {
        copyToClipboard(card3Ref.current);
        toast.success('Texto Copiado')
    };
  
    const handleCopyCard5 = () => {
        copyToClipboard(card5Ref.current);
        toast.success('Texto Copiado')
    };
  
    const handleCopyCard7 = () => {
        copyToClipboard(card7Ref.current);
        toast.success('Texto Copiado')
    };

    const handleCopyCard9 = () => {
        copyToClipboard(card9Ref.current);
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
  
    const handleCopyCard15 = () => {
        copyToClipboard(card15Ref.current);
        toast.success('Texto Copiado')
    };

    const handleCopyNombreRef = () => {
        copyToClipboard(nombreRef.current);
        toast.success('Texto Copiado')
    };

    const handleCopyCardTitleXJaponesRef = () => {
        copyToClipboard(cardTitleXJaponesRef.current);
        toast.success('Texto Copiado')
    };

    const handleCopySerieRef = () => {
        copyToClipboard(serieRef.current);
        toast.success('Texto Copiado')
    };

    const handleCopyCardTextDiscord = () => {
        copyToClipboard(cardTextDiscord.current);
        toast.success('Parrafo Copiado')
    }

    const handleCopyContrasenaRef = () => {
        copyToClipboard(contrasenaRef.current);
        toast.success('Contraseña copiada')
    }

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
                    {/* -------------nombre personajes ------------------ */}
                    <div className='flex items-center gap-4'>
                        <h2 className='font-bold text-2xl text-slate-950' ref={nombreRef}>{mayusculas(nombre)}</h2>
                        <button onClick={handleCopyNombreRef} className='bg-slate-100 px-2 border border-slate-200 rounded'>copiar</button>
                    </div>
                    {/* ------------- coleccion ---------*/}
                    <div className='flex items-center gap-4'>
                        <h3 className='text-slate-600 font-bold'>Coleccion #{coleccion}</h3>
                    </div>
                    {/* ------------- serie ------------------ */}
                    <div className='flex items-center gap-4'>
                        <span className='text-slate-400' ref={serieRef}>{mayusculas(serie)}</span> <button onClick={handleCopySerieRef} className='bg-slate-100 px-2 border border-slate-200 rounded'>copiar</button>
                    </div>
                    {/* ------------- contraseña ------------------ */}
                    <div className='flex items-center gap-4'>
                        <p><strong>Contraseña:</strong> {contrasena ? (<><span className='text-slate-600' ref={contrasenaRef}>{contrasena.trim()}</span> <button onClick={handleCopyContrasenaRef} className='bg-slate-100 px-2 border border-slate-200 rounded'>copiar</button> </>) : ('No hay contraseña para el archivo')}</p>
                    </div>



                    <section className='flex flex-col gap-4 pt-5 pb-10'>


                        {/* ------------------------- nombre del archivo .rar ----------------------- */}
                        <Article>
                            <ArticleTitle><strong className='bg-cyan-300 text-slate-900 px-1'>Winrar</strong></ArticleTitle>
                            <ArticleBody>
                                <p ref={card7Ref}>{`${textosConGuion(nombre)}_${coleccion}`}</p>
                                <button className='button-copy' onClick={handleCopyCard7}>Copy</button>
                            </ArticleBody>
                        </Article>

                        {/* ----------- producto de gumroad ---------------------- */}
                        {enlaceGumroad && ia && (

                            <>
                                <Article>
                                    <ArticleTitle><strong className='bg-pink-300 text-pink-900'>Gumroad </strong> - Cosplay IA</ArticleTitle>
                                    <ArticleBody>
                                        <div ref={card11Ref}>
                                            <p>{mayusculas(nombre)} #{coleccion}</p>
                                        </div>
                                        <button className='button-copy' onClick={handleCopyCard11}>Copy</button>
                                    </ArticleBody>
                                </Article>
                                <Article>
                                    <ArticleTitle><strong className='bg-pink-300 text-pink-900'>Gumroad </strong> - Contraseña 🔑</ArticleTitle>
                                    <ArticleBody>
                                        <div ref={card12Ref}>
                                            <span>pass: <strong>{contrasena}</strong></span>
                                        </div>
                                        <button className='button-copy' onClick={handleCopyCard12}>Copy</button>
                                    </ArticleBody>

                                </Article>

                            </>
                        )}


                        {/* ------------------------ nombre para el post de patreon -------------- */}
                        <Article>
                            <ArticleTitle><strong className='bg-black text-white px-1'>Patreon</strong> Title</ArticleTitle>
                            <ArticleBody>
                                <p ref={cardRef}>{mayusculas(nombre)} #{coleccion}</p>
                                <button className='button-copy' onClick={handleCopyCard1}>Copy</button>
                            </ArticleBody>
                        </Article>


                        {/* ------------------- descripcion para el post de patreon -------------- */}
                        <Article>
                            <ArticleTitle><strong className='bg-black text-white px-1'>Patreon</strong> Descripcion</ArticleTitle>
                            <ArticleBody>
                                <div ref={cardPatreonDescriptionRef}>

                                    {/* -------descripcion para monas chinas sin contraseña */}
                                    {nombre && !contrasena && !monitas && !buttonKurumi && (
                                        <>
                                            <TitlePersonajeDescriptionPatreon nombre={nombre} />

                                            <br />
                                            <br />
                                            <span>◼️ すべての登場人物は法定年齢に達した成人です。</span>

                                            <br />
                                            <br />
                                            <span>◼️ Diviertete 🥳</span><br />
                                            <span>◼️ Have fun 🥳</span><br />
                                            <span>◼️ 楽しんでください🥳</span>

                                            <br />
                                            <br />
                                            <span>🔽 Descarga la carpeta comprimida.</span><br />
                                            <span>🔽 Download the compressed folder.</span><br />
                                            <span>🔽 圧縮されたフォルダーをダウンロードしてください</span>
                                            <br />
                                            <br />
                                            <br />
                                        </>
                                    )}

                                    {/* -------descripcion para monas chinas con contraseña */}
                                    {nombre && contrasena && !monitas && enlaceMega && !ia && !enlacePatreon && (

                                        <>
                                            <TitlePersonajeDescriptionPatreon nombre={nombre} />

                                            <br />
                                            <br />
                                            <span>◼️ La colección completa está en el siguiente enlace.</span><br />
                                            <span>◼️ The complete collection is in the following link.</span><br />
                                            <span>◼️ 完全なコレクションは次のリンクにあります。</span>

                                            <p>🌍&nbsp; *{enlaceMega ? enlaceMega : <LinkError />}*</p>

                                            <br />
                                            <Contrasena contrasena={contrasena} />
                                            <br />
                                            <br />
                                            <br />
                                        </>
                                    )}

                                    {/* -------descripcion para monitas chinas con contraseña */}
                                    {nombre && contrasena && monitas && (
                                        <>
                                            <TitlePersonajeDescriptionPatreon nombre={nombre} />

                                            <br />
                                            <br />
                                            <span>◼️ Dirígete al canal de Discord para obtener el archivo .rar completo.</span><br />
                                            <span>◼️ Head over to the Discord channel to get the full .rar file.</span><br />
                                            <span>◼️ 完全な .rar ファイルを入手するには、Discord チャンネルにアクセスしてください。</span>

                                            <p>👉 &nbsp; https://www.patreon.com/c/monitaschinas92/membership</p>

                                            <br />
                                            <span>◼️ Diviertete 🥳</span><br />
                                            <span>◼️ Have fun 🥳</span><br />
                                            <span>◼️ 楽しんでください🥳</span>

                                            <br />
                                            <br />
                                            <Contrasena contrasena={contrasena} />
                                            <br />
                                            <br />
                                            <br />
                                        </>
                                    )}

                                    {/* ---------- patredon descripcion para kurumi ------------------- */}

                                    {nombre && buttonKurumi && !contrasena && !monitas && (

                                        <>
                                            <TitlePersonajeDescriptionPatreon nombre={nombre} />

                                            <br />
                                            <br />
                                            <span>◼️ すべての登場人物は法定年齢に達した成人です。</span>

                                            <br />
                                            <br />
                                            <span>◼️ Diviertete 🥳</span><br />
                                            <span>◼️ Have fun 🥳</span><br />
                                            <span>◼️ 楽しんでください🥳</span>

                                            <br />
                                            <br />
                                            <span>🔽 Descarga la carpeta comprimida.</span><br />
                                            <span>🔽 Download the compressed folder.</span><br />
                                            <span>🔽 圧縮されたフォルダーをダウンロードしてください</span>
                                            <br />
                                            <br />
                                            <br />
                                        </>

                                    )}

                                    {/* ------------ descripcion la pagina de cosplay ia  ------------- */}
                                    {nombre && ia && contrasena && !monitas && !buttonKurumi && enlaceMega && (
                                        <>
                                            <TitlePersonajeDescriptionPatreon nombre={nombre} />

                                            <br />
                                            <br />
                                            <span>◼️ Utiliza la siguiente contraseña para desbloquear el archivo .rar.</span><br />
                                            <span>◼️ Use the following password to unlock the .rar file.</span><br />
                                            <span>◼️ 次のパスワードを使用して、.rarファイルを解除してください</span>

                                            <br />
                                            <br />
                                            <Contrasena contrasena={contrasena} />
                                            <br />
                                            <br />
                                            <br />
                                        </>
                                    )}

                                    {/* -----------descripcion para la version realista de monas chinas --------*/}
                                    {!ia && !monitas && !buttonKurumi && contrasena && enlaceMega && !enlaceGumroad && enlacePatreon && (
                                        <>

                                            <TitlePersonajeDescriptionPatreon nombre={nombre} />

                                            <br />
                                            <br />
                                            <span>◼️ Dirígete al canal de Discord para obtener el archivo .rar completo.</span><br />
                                            <span>◼️ Head over to the Discord channel to get the full .rar file.</span><br />
                                            <span>◼️ 完全な .rar ファイルを入手するには、Discord チャンネルにアクセスしてください。</span>

                                            <p>🌍&nbsp; *https://linktr.ee/monaschinas_ia*</p>

                                            <br />
                                            <span>◼️ Utiliza la siguiente contraseña para desbloquear el archivo .rar.</span>
                                            <br />
                                            <psan>◼️ Use the following password to unlock the .rar file.</psan>
                                            <br />
                                            <span>◼️ 次のパスワードを使用して、.rarファイルを解除してください</span>


                                            <br />
                                            <br />
                                            <Contrasena contrasena={contrasena} />
                                            <br />
                                            <br />
                                            <br />
                                        </>

                                    )}


                                </div>
                                <button className='button-copy' onClick={handleCopyPatreonDescription}>Copy</button>
                            </ArticleBody>
                        </Article>










                        {/* ------------------------------ descripcion para el post de discord ------------------ -------------- */}

                        {enlacePatreon && (

                            <Article>
                                <ArticleTitle><strong className='bg-violet-500 text-white px-1'>Discord</strong> Descripcion</ArticleTitle>
                                <ArticleBody>
                                    <div ref={cardTextDiscord}>

                                        {/* ---------discord monitas chinas descripcion ----------------- */}
                                        {monitas && contrasena && enlacePatreon && !buttonKurumi && enlaceMega && (
                                            <>
                                                <h1>**{mayusculas(nombre)} #{coleccion} - {mayusculas(serie)}**</h1>
                                                <br />
                                                <ul className='list-disc'>
                                                    <li>🟡 Utiliza el siguiente enlace para ir a Patreon y obtener la contraseña del archivo.</li>
                                                    <li>🟡 Please use the link below to go to Patreon and get the password for the file.</li>
                                                    <li>🟡 以下のリンクを使用して Patreon にアクセスし、ファイルのパスワードを取得します。</li>
                                                </ul>
                                                <br />
                                                <h5><strong>Link: </strong>{enlacePatreon ? enlacePatreon : <LinkError />}</h5>
                                                <br />
                                                <ul>
                                                    <li>🟢 Descarga el Archivo utilizando este enlace.</li>
                                                    <li>🟢 Download the file using this link</li>
                                                    <li>🟢 このリンクを使用してファイルをダウンロードしてください。</li>
                                                </ul>
                                                <br />
                                                <h5><strong>Link:  </strong>{enlaceMega ? enlaceMega : <LinkError />}</h5>
                                            </>
                                        )}

                                        {/* ------- discord cosplay ia -------------*/}
                                        {ia && contrasena && enlacePatreon && enlaceMega && !monitas && !buttonKurumi && (

                                            <>
                                                <h1>**{mayusculas(nombre)} #{coleccion} - {mayusculas(serie)}**</h1>
                                                <br />
                                                <ul className='list-disc'>
                                                    <li>🟡 Utiliza el siguiente enlace para ir a Patreon y obtener la contraseña del archivo.</li>
                                                    <li>🟡 Please use the link below to go to Patreon and get the password for the file.</li>
                                                    <li>🟡 以下のリンクを使用して Patreon にアクセスし、ファイルのパスワードを取得します。</li>
                                                </ul>
                                                <br />
                                                <h5><strong>Link:  </strong>{enlacePatreon ? enlacePatreon : <LinkError />}</h5>
                                                <br />
                                                {/* <ul className='list-disc'>
                                                    <li>🟠 Si no tienes cuenta de Patreon o no quieres pagar mensualmente, puedes comprar la clave del archivo en Gumroad.</li>
                                                    <li>🟠 If you don't have a Patreon account or don't want to pay monthly, you can buy the file key on Gumroad.</li>
                                                    <li>🟠 Patreonのアカウントをお持ちでない場合や、毎月お支払いしたくない場合は、Gumroadでファイルのキーを購入できます。</li>
                                                </ul>
                                                <br />
                                                <h5><strong>Link:  </strong>{enlaceGumroad ? enlaceGumroad : <LinkError />}</h5>
                                                <br /> */}
                                                <ul>
                                                    <li>🟢 Descarga el Archivo utilizando este enlace.</li>
                                                    <li>🟢 Download the file using this link</li>
                                                    <li>🟢 このリンクを使用してファイルをダウンロードしてください。</li>
                                                </ul>
                                                <br />
                                                <h5><strong>Link:  </strong>{enlaceMega ? enlaceMega : <LinkError />}</h5>

                                            </>

                                        )}

                                        {!ia && !monitas && !buttonKurumi && contrasena && enlaceMega && !enlaceGumroad && enlacePatreon && (

                                            <>
                                                <h1>**{mayusculas(nombre)} #{coleccion} - {mayusculas(serie)}**</h1>
                                                <br />
                                                <ul className='list-disc'>
                                                    <li>🟡 Utiliza el siguiente enlace para ir a Patreon y obtener la contraseña del archivo.</li>
                                                    <li>🟡 Please use the link below to go to Patreon and get the password for the file.</li>
                                                    <li>🟡 以下のリンクを使用して Patreon にアクセスし、ファイルのパスワードを取得します。</li>
                                                </ul>
                                                <br />
                                                <h5><strong>Link: </strong>{enlacePatreon ? enlacePatreon : <LinkError />}</h5>
                                                <br />
                                                <ul className='list-disc'>
                                                    <li>🟢 Descarga el Archivo utilizando este enlace.</li>
                                                    <li>🟢 Download the file using this link</li>
                                                    <li>🟢 このリンクを使用してファイルをダウンロードしてください。</li>
                                                </ul>
                                                <br />
                                                <h5><strong>Link:  </strong>{enlaceMega ? enlaceMega : <LinkError />}</h5>
                                            </>
                                        )}

                                    </div>
                                    <button className='button-copy' onClick={handleCopyCardTextDiscord}>Copy</button>
                                </ArticleBody>
                            </Article>


                        )}




                        { /* --------------------- post facebook cosplay ia ------------------ */}

                        {ia && (

                            <>
                                <Article>
                                    <ArticleTitle><strong className='bg-blue-200 text-blue-900'>Facebook</strong> - Cosplay IA</ArticleTitle>
                                    <ArticleBody>
                                        <div ref={card9Ref}>
                                            <strong>{mayusculas(nombre)} - {mayusculas(serie)}</strong><br /><br />
                                            <ul>
                                                <li>Redes Sociales</li>
                                                <li>https://linktr.ee/cosplay_ia</li>
                                                <li>‎ </li>
                                                <li>‎ </li>
                                            </ul>


                                            <p>#{quitarEspacios(nombre).toLowerCase()} #{quitarEspacios(serie).toLowerCase()} #AIart #AIphoto #anime #AiAnime #AIanimegirl #DigitalArt #AIArtwork #aigirls #animeIA #waifu #cosplay</p>
                                        </div>

                                        <button className='button-copy' onClick={handleCopyCard9}>Copy</button>
                                    </ArticleBody>
                                </Article>

                                <Article>
                                    <ArticleTitle><strong className='bg-black text-gray-200'>Twitter</strong> - Cosplay IA</ArticleTitle>
                                    <ArticleBody>
                                        <div ref={card3Ref}>
                                            <span>{mayusculas(nombre)} - {mayusculas(serie)} </span>< br />
                                            <p>#{quitarEspacios(nombre).toLowerCase()} #AIグラビア #AIグラドル #AIイラスト #AIArtwork #AI美女 #AI美少女 #AI彼女 #SDXL #anime #AiAnime #AIanimegirl #DigitalArt #AIArtwork #aigirls #animeIA #waifu</p>
                                        </div>
                                        <button className='button-copy' onClick={handleCopyCard3}>Copy</button>
                                    </ArticleBody>
                                </Article>

                            </>
                        )}




                        {!ia && (


                            <>

                                <Article>
                                    <ArticleTitle><strong className='bg-cyan-300 px-2'>Pixiv</strong> Title {monitas ? 'Monitas Chinas' : (buttonKurumi ? 'Kurumi Tokisaki' : 'Monas Chinas Anime')}</ArticleTitle>
                                    <ArticleBody>
                                        <p ref={card5Ref}>{mayusculas(nombre)} #{coleccion}</p>
                                        <button className='button-copy' onClick={handleCopyCard5}>Copy</button>
                                    </ArticleBody>
                                </Article>

                                {monitas && (

                                    <Article>
                                        <ArticleTitle><strong className='bg-cyan-300 px-2'>Pixiv</strong> Descripcion Monitas Chinas</ArticleTitle>
                                        <ArticleBody>
                                            <div ref={card15Ref}>
                                                <strong>Social networks</strong><br />
                                                <span>https://linktr.ee/monitaschinas92 </span><br /><br />
                                            </div>
                                            <button className='button-copy' onClick={handleCopyCard15}>Copy</button>
                                        </ArticleBody>
                                    </Article>
                                )}

                                {!monitas && (

                                    <Article>
                                        <ArticleTitle><strong className='bg-cyan-300 px-2'>Pixiv</strong> {!buttonKurumi ? 'Descripcion Monas Chinas Anime' : 'Descripcion Kurumi Tokisaki'}</ArticleTitle>
                                        <ArticleBody>
                                            <div ref={card13Ref}>
                                                <strong>Social networks</strong><br />
                                                <span>{!buttonKurumi ? 'https://linktr.ee/monaschinas_ia' : 'https://linktr.ee/kurumitokisaki__'} </span><br /><br />
                                            </div>
                                            <button className='button-copy' onClick={handleCopyCard13}>Copy</button>
                                        </ArticleBody>
                                    </Article>
                                )}

                                <Article>
                                    <ArticleTitle>{monitas ? 'Twitter Monitas Chinas' : 'Twitter Monas Chinas Anime'}</ArticleTitle>
                                    <ArticleBody>
                                        <div ref={cardTitleXJaponesRef}>
                                            <span>{mayusculas(nombre)} - {mayusculas(serie)} </span>< br />
                                            <p>#{quitarEspacios(nombre).toLowerCase()} #AIグラビア #AIグラドル #AIイラスト #AIArtwork #AI美女 #AI美少女 #AI彼女 #SDXL #anime #AiAnime #AIanimegirl #DigitalArt #AIArtwork #aigirls #animeIA #waifu</p>
                                        </div>
                                        <button className='button-copy' onClick={handleCopyCardTitleXJaponesRef}>Copy</button>
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
