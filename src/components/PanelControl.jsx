import { NavLink, Outlet } from "react-router-dom"

const PanelControl = () => {
  return (
    <div>

      <h3>Panel de Control</h3>
      <p>Elige una de las siguientes opciones</p>
      <nav>
        <ul>
          <li><NavLink to="/panel/inicio">Inicio</NavLink></li>
          <li><NavLink to="/panel/crear-articulo">Crear Articulo</NavLink></li>
          <li><NavLink to="/panel/gestion-usuario">Gestion de Usuario</NavLink></li>
          <li><NavLink to="/panel/acerca-de">Acerca de</NavLink></li>
        </ul>
      </nav>

      <div>
        {/* Aca voy a mostrar la info del los sub paneles */}
        <Outlet />
      </div>

    </div>
  )
}

export default PanelControl