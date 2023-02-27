import { Outlet, NavLink } from "react-router-dom";

const PokedexLayout = () => {
  return (
    <div className="pokedex-layout">
      <h1>Pokedex for all regions</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero neque
        sint, temporibus quod incidunt odio sapiente dolore alias eligendi id
        dignissimos ut quae itaque.
      </p>

      <nav>
        <ul>
          <li>
            <NavLink className="nav__link" to="kanto">
              Kanto
            </NavLink>
          </li>
          <li>
            <NavLink className="nav__link" to="johto">
              Johto
            </NavLink>
          </li>
          <li>
            <NavLink className="nav__link" to="hoenn">
              Hoenn
            </NavLink>
          </li>
          <li>
            <NavLink className="nav__link" to="sinnoh">
              Sinnoh
            </NavLink>
          </li>
          <li>
            <NavLink className="nav__link" to="unova">
              Unova
            </NavLink>
          </li>
          <li>
            <NavLink className="nav__link" to="kalos">
              Kalos
            </NavLink>
          </li>
          <li>
            <NavLink className="nav__link" to="alola">
              Alola
            </NavLink>
          </li>
          <li>
            <NavLink className="nav__link" to="galar">
              Galar
            </NavLink>
          </li>
          <li>
            <NavLink className="nav__link" to="paldea">
              Paldea
            </NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
};

export default PokedexLayout;
