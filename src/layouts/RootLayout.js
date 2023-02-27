import { NavLink, Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="root-layout">
      <header class="header">
        <div className="wrapper u-flex">
          <h1>PokeRouter</h1>
          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item">
                <NavLink className="nav__link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink className="nav__link" to="about">
                  About
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink className="nav__link" to="pokedex">
                  Pokedex
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="wrapper">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
