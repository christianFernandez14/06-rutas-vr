import { BrowserRouter, Routes, Route, NavLink, Link, Navigate } from 'react-router-dom'

import Inicio from '../components/Inicio'
import Articulos from '../components/Articulos'
import Contacto from '../components/Contacto'
import ErrorPage from '../components/ErrorPage'
import Persona from '../components/Persona'
import PanelControl from '../components/PanelControl'
import InicioPanel from '../components/panel/InicioPanel'
import CrearPanel from '../components/panel/CrearPanel'
import GestionPanel from '../components/panel/GestionPanel'
import AcercaPanel from '../components/panel/AcercaPanel'

const RouterPrincipal = () => {
  return (

    <BrowserRouter>

      <h3>Barra de navigacion</h3>
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
          <li>
            <NavLink to={'/panel'}>Panel del Control</NavLink>
          </li>
        </ul>
      </nav>
      <hr />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/inicio' element={<Inicio />} />
        <Route path='/articulos' element={<Articulos />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/persona/:nombre/:apellido' element={<Persona />} />
        <Route path='/persona/:nombre/' element={<Persona />} />
        <Route path='/persona/' element={<Persona />} />
        <Route path='/redirigir' element={<Navigate to={'/persona'} />} />

        {/* De esta manera creamos subrutas / sigues este parton puedes crear igual a las internas */}
        <Route path='/panel/*' element={<PanelControl />}>
          <Route path='inicio' element={<InicioPanel />} />
          <Route path='crear-articulo' element={<CrearPanel />} />
          <Route path='gestion-usuario' element={<GestionPanel />} />
          <Route path='acerca-de' element={<AcercaPanel />} />

        </Route>


        <Route path='*' element={<ErrorPage />} />

      </Routes>
    </BrowserRouter>
  )
}

export default RouterPrincipal