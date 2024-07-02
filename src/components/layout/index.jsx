import { Link, Outlet } from "react-router-dom";
import "./styles.scss";
export function Layout() {
  return (
    <div className="layout">
      <header>
        <h1>Art Gallery</h1>
        <nav>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/gallery"}>Gallery</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </nav>
      </header>

      <Outlet />

      <footer>
        <p>&copy; 2024 Art Gallery</p>
      </footer>
    </div>
  );
}
