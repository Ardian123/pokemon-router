import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Johto = () => {
  const data = useLoaderData();
  const johto = data.results;
  return (
    <div className="grid grid-center pokedex">
      {johto.map((pokemon) => (
        <div key={pokemon.name}>
          <Link to={`../../pokemon/${pokemon.name}`}>
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </Link>
        </div>
      ))}
    </div>
  );
};

export const johtoLoader = async () => {
  const res = await fetch(
    "https://pokeapi.co/api/v2/pokemon?offset=151&limit=100"
  );

  return res.json();
};

export default Johto;
