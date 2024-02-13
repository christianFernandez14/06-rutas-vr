import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Inicio from '../components/Inicio'
import Articulos from '../components/Articulos'
import Contactos from '../components/Contactos'
import ErrorPage from '../components/ErrorPage'

const RouterPrincipal = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/inicio' element={<Inicio />} />
        <Route path='/articulos' element={<Articulos />} />
        <Route path='/contactos' element={<Contactos />} />
        {/* Esta es cualquier ruta que no esta definida */}
        <Route path='*' element={<ErrorPage />} />

      </Routes>
    </BrowserRouter>
  )
}

export default RouterPrincipal