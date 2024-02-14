import { useParams } from "react-router-dom"


const Persona = () => {

  // Con este Hook, extraigo el parametro por la URL
  const parametros = useParams()
  const { nombre, apellido } = parametros

  console.log(parametros)

  return (
    <div>
      <h1>Bienvenido {nombre} {apellido}</h1>
      <p>Esta es la pagina de Persona</p>
    </div>
  )
}

export default Persona