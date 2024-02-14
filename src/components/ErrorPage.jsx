import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div>
      <h1>Error</h1>
      <p>Pagina de Error</p>
      <Link to={'/inicio'}>Volver al incio</Link>
    </div>
  )
}

export default ErrorPage