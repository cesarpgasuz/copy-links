export const quitarEspacios = (texto) => {
    return texto.split(" ").join("");
}

export const mayusculas = (texto) => {
    
    texto = texto.toLowerCase();

    let palabras = texto.split(" ");

    for(let i = 0; i < palabras.length; i++){
        palabras[i] = palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1)
    }

    const textoMayusculas = palabras.join(" ");

    return textoMayusculas


}

export const textosConGuion = (texto) => {

    let palabras = texto.split(" ");

    for(let i = 0; i < palabras.length; i++){
        palabras[i] =  palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1).toLowerCase()
    }
    
    const resultado = palabras.join("_");

    return resultado

}