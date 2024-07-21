import './styles.scss';

import { NavLink, Outlet } from 'react-router-dom';

import { ArrowUp } from '../UI/index.js';

export function Layout() {
  return (
    <div className='layout'>
      <header>
        <h1>Galeria de Arte</h1>
        <nav>
          <ul>
            <li>
              <NavLink
                to={'/'}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Página inicial
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/gallery'}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Galeria
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/about'}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Sobre
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/favorite'}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Favoritos
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main className='content'>
        <Outlet />
      </main>

      <footer>
        <p>&copy; 2023/2024 Escola Secundária Miguel Torga</p>
      </footer>

      <ArrowUp />
    </div>
  );
}
