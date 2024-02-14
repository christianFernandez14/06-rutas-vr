import { useParams } from "react-router-dom"


const Persona = () => {

  const parametros = useParams()
  const { nombre, apellido } = parametros
  
  // Como otra opcion en los paremetros por default, se lo asignas en la destructuracion
  // const { nombre='Usuario', apellido='Apellido del Usuario' } = parametros
  

  // console.log(parametros)

  return (
    <div>
      <h1>Bienvenido; {!nombre ? 'Usuario' : nombre} {!apellido ? "" : apellido }</h1>
      <p>Esta es la pagina es de Persona</p>
    </div>
  )
}

export default Persona