import { mayusculas } from "../../utilities"

export default function TitlePersonajeDescriptionPatreon({nombre}) {
    return (
        <>
            <span>◼️ Nueva Ilustración de {mayusculas(nombre)}</span>
            <br />
            <span>◼️ New Illustration of {mayusculas(nombre)}</span>
        </>
    )
}
