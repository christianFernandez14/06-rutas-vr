import { BrowserRouter, Routes, Route, NavLink, Link } from 'react-router-dom'

import Inicio from '../components/Inicio'
import Articulos from '../components/Articulos'
import Contacto from '../components/Contacto'
import ErrorPage from '../components/ErrorPage'

const RouterPrincipal = () => {
  return (

    <BrowserRouter>

      <nav>
        <ul>
          <li>
            {/* Revisar la diferencia entre Link y NavLink */}
            {/* En este caso ambas funcionan para lo que quiero hacer */}
            <Link to={'/inicio'}>Inicio</Link>
          </li>
          <li>
            <NavLink to={'/articulos'}>Articulos</NavLink>
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
        {/* Esta es cualquier ruta que no esta definida */}
        <Route path='*' element={<ErrorPage />} />

      </Routes>
    </BrowserRouter>
  )
}

export default RouterPrincipal