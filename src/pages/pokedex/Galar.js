import React from "react";
import { useLoaderData } from "react-router-dom";

const Galar = () => {
  const data = useLoaderData();
  const galar = data.results;
  return (
    <div className="grid grid-center pokedex">
      {galar.map((pokemon) => (
        <div key={pokemon.name}>
          <p>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</p>
        </div>
      ))}
    </div>
  );
};

export const galarLoader = async () => {
  const res = await fetch(
    "https://pokeapi.co/api/v2/pokemon?offset=809&limit=96"
  );

  return res.json();
};

export default Galar;
