import { NavLink, Outlet } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";

const RootLayout = () => {
  return (
    <div className="root-layout">
      <header className="header">
        <div className="wrapper u-flex">
          <h1>PokeRouter</h1>
          <nav className="nav">
            <NavLink className="nav__link" to="/">
              Home
            </NavLink>
            <NavLink className="nav__link" to="about">
              About
            </NavLink>
            <NavLink className="nav__link" to="pokedex/kanto">
              Pokedex
            </NavLink>
          </nav>
        </div>
      </header>
      <Breadcrumbs />
      <main className="wrapper">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
