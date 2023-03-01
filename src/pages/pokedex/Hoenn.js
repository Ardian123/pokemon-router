import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Hoenn = () => {
  const data = useLoaderData();
  const hoenn = data.results;
  return (
    <div className="grid grid-center pokedex">
      {hoenn.map((pokemon) => (
        <div key={pokemon.name}>
          <Link to={`../../pokemon/${pokemon.name}`}>
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </Link>
        </div>
      ))}
    </div>
  );
};

export const hoennLoader = async () => {
  const res = await fetch(
    "https://pokeapi.co/api/v2/pokemon?offset=251&limit=135"
  );

  return res.json();
};

export default Hoenn;
