import './styles.scss';

import { NavLink, Outlet } from 'react-router-dom';

import { ArrowUp } from '../UI/index.js';

export function Layout() {
  return (
    <div className='layout'>
      <header>
        <h1>Art Gallery</h1>
        <nav>
          <ul>
            <li>
              <NavLink
                to={'/'}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/gallery'}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/about'}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/favorite'}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Favorite
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main className='content'>
        <Outlet />
      </main>

      <footer>
        <p>&copy; 2024 Art Gallery</p>
      </footer>

      <ArrowUp />
    </div>
  );
}
