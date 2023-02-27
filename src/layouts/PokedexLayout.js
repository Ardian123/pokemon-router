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

      <nav className="nav-pokedex">
        <NavLink className="nav-pokedex__link" to="kanto">
          Kanto
        </NavLink>
        <NavLink className="nav-pokedex__link" to="johto">
          Johto
        </NavLink>
        <NavLink className="nav-pokedex__link" to="hoenn">
          Hoenn
        </NavLink>
        <NavLink className="nav-pokedex__link" to="sinnoh">
          Sinnoh
        </NavLink>
        <NavLink className="nav-pokedex__link" to="unova">
          Unova
        </NavLink>
        <NavLink className="nav-pokedex__link" to="kalos">
          Kalos
        </NavLink>
        <NavLink className="nav-pokedex__link" to="alola">
          Alola
        </NavLink>
        <NavLink className="nav-pokedex__link" to="galar">
          Galar
        </NavLink>
        <NavLink className="nav-pokedex__link" to="paldea">
          Paldea
        </NavLink>
      </nav>

      <Outlet />
    </div>
  );
};

export default PokedexLayout;
