import { useState } from "react";

const Texto = () => {
  const [personaje, setPersonaje] = useState("");
  const [coleccion, setColeccion] = useState("");
  const [titulo, setTitulo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [dragActive, setDragActive] = useState(false);

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);

    const file = e.dataTransfer.files[0];
    if (file && file.type === "text/plain") {
      const reader = new FileReader();
      reader.onload = (event) => {
        const text = event.target.result.split("\n").map((line) => line.trim());

        // Línea 1 -> Nombre del personaje
        setPersonaje(text[0] || "");

        // Línea 3 -> Colección
        // Línea 3 -> Colección (solo números)
        const colMatch = text[2]?.match(/\d+/)?.[0] || "";
        setColeccion(colMatch);


        // Línea 4 -> Título
        setTitulo(text[3] || "");

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
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 bg-gray-100">
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDragActive(true);
        }}
        onDragLeave={() => setDragActive(false)}
        onDrop={handleDrop}
        className={`w-96 h-40 flex items-center justify-center border-2 border-dashed rounded-lg cursor-pointer transition-colors ${dragActive ? "border-blue-500 bg-blue-50" : "border-gray-400"
          }`}
      >
        {dragActive ? "Suelta el archivo aquí" : "Arrastra y suelta tu .txt aquí"}
      </div>

      <input
        type="text"
        placeholder="Nombre del personaje"
        value={personaje}
        onChange={(e) => setPersonaje(e.target.value)}
        className="px-4 py-2 border rounded w-96"
      />
      <input
        type="number"
        placeholder="Colección"
        value={coleccion}
        onChange={(e) => setColeccion(e.target.value)}
        className="px-4 py-2 border rounded w-96"
      />

      <input
        type="text"
        placeholder="Título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        className="px-4 py-2 border rounded w-96"
      />
      <input
        type="text"
        placeholder="Contraseña"
        value={contrasena}
        onChange={(e) => setContrasena(e.target.value)}
        className="px-4 py-2 border rounded w-96"
      />
    </div>
  );

}

export default Texto