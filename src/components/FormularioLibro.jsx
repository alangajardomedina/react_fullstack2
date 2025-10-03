import { useState } from "react"

function FormularioLibro( {agregar} ) {
    const [titulo,setTitulo] = useState("")
    const [contenido,setContenido] = useState("")
    
    const handleSubmit = (event)=>{
        event.preventDefault()
        if(!titulo || !contenido) return
        
        agregar( {id: Date.now(),titulo,contenido} )

        setTitulo("")
        setContenido("")
    }

    return (
        <form className="mb-4" onSubmit={handleSubmit}>
            <input className="form-control mb-2" type="text" placeholder="Ingrese título" onChange={(e)=> setTitulo(e.target.value) } />
            <input className="form-control mb-2" type="text" placeholder="Ingrese contenido" onChange={(e)=> setContenido(e.target.value) } />
            <button type="submit" className="btn btn-success">Agregar libro</button>
        </form>
    )
}

export default FormularioLibro