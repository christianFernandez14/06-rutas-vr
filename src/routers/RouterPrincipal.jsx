import { BrowserRouter, Routes, Route, NavLink, Link, Navigate } from 'react-router-dom'

import Inicio from '../components/Inicio'
import Articulos from '../components/Articulos'
import Contacto from '../components/Contacto'
import ErrorPage from '../components/ErrorPage'
import Persona from '../components/Persona'

const RouterPrincipal = () => {
  return (

    <BrowserRouter>

      <nav>
        <ul>
          <li>
            {/* Ya vi al menos una de la diferencias y es la creacion de una class atummatica*/}
            <NavLink to={'/inicio'}>Inicio</NavLink>
          </li>
          <li>
            <Link to={'/articulos'}>Articulos</Link>
          </li>
          <li>
            <NavLink to={'/contacto'}>Contacto</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/inicio' element={<Inicio />} />
        <Route path='/articulos' element={<Articulos />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/persona/:nombre/:apellido' element={<Persona />} />
        <Route path='/persona/:nombre/' element={<Persona />} />
        <Route path='/persona/' element={<Persona />} />

        {/* Usando un componente Navigate del Router-dom */}
        <Route path='/redirigir' element={<Navigate to={'/persona'} />} />

        <Route path='*' element={<ErrorPage />} />

      </Routes>
    </BrowserRouter>
  )
}

export default RouterPrincipal