import { useNavigate, useParams } from "react-router-dom"


const Persona = () => {

  const parametros = useParams()
  const { nombre, apellido } = parametros

  const navegar = useNavigate()

  console.log(navegar)


  const handleSubmit = e => {
    e.preventDefault();

    let nombre = e.target.nombre.value
    let apellido = e.target.apellido.value
    const URL = `/persona/${nombre}/${apellido}`

    navegar(URL)

  }

  return (
    <div>
      <h1>Bienvenido; {!nombre ? 'Usuario' : nombre} {!apellido ? "" : apellido }</h1>
      <p>Esta es la pagina es de Persona</p>

      <form onSubmit={handleSubmit}>
        <input type="text" name="nombre" />
        <input type="text" name="apellido" />
        <input type="submit" name="enviar" value='Enviar' />
      </form>
    </div>
  )
}

export default Persona