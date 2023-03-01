import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Alola = () => {
  const data = useLoaderData();
  const alola = data.results;
  return (
    <div className="grid grid-center pokedex">
      {alola.map((pokemon) => (
        <div key={pokemon.name}>
          <Link to={`../../pokemon/${pokemon.name}`}>
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </Link>
        </div>
      ))}
    </div>
  );
};

export const alolaLoader = async () => {
  const res = await fetch(
    "https://pokeapi.co/api/v2/pokemon?offset=721&limit=88"
  );

  return res.json();
};

export default Alola;
