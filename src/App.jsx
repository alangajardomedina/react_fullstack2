import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'
import FormularioLibro from './components/FormularioLibro'

function App() {
  const [libros, setLibros] = useState([])

  //useEffect carga datos desde lugares externos:
  useEffect(()=>{
    fetch("src/data/libros.json")
    .then((res)=>res.json())
    .then((data)=>setLibros(data))
    .catch((ex)=>console.error("Error al obtener libros: ", ex))
  },[])

  const agregarLibro = (libro)=>{
    setLibros( [...libros,libro] )
  }

  const eliminarLibro = (id)=>{
    setLibros( libros.filter((li)=>li.id!==id) )
  }

  return (
    <div className='container mt-3'>
      <h1>Formulario Ingreso de Libros</h1>
      <FormularioLibro agregar={agregarLibro}/>
      <div className='row'>
        {
          libros.map(libro => (
            <div className='col-md-4' key={libro.id}>
              <Card titulo={libro.titulo} contenido={libro.contenido} eliminar={()=>eliminarLibro(libro.id)}/>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default App
