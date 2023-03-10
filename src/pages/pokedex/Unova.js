import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Unova = () => {
  const data = useLoaderData();
  const unova = data.results;
  return (
    <div className="grid grid-center pokedex">
      {unova.map((pokemon) => (
        <div key={pokemon.name}>
          <Link to={`../../pokemon/${pokemon.name}`}>
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </Link>
        </div>
      ))}
    </div>
  );
};

export const unovaLoader = async () => {
  const res = await fetch(
    "https://pokeapi.co/api/v2/pokemon?offset=493&limit=156"
  );

  return res.json();
};

export default Unova;
