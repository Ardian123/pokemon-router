import React from "react";
import { useLoaderData } from "react-router-dom";

const Paldea = () => {
  const data = useLoaderData();
  const paldea = data.results;
  return (
    <div className="grid grid-center pokedex">
      {paldea.map((pokemon) => (
        <div key={pokemon.name}>
          <p>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</p>
        </div>
      ))}
    </div>
  );
};

export const paldeaLoader = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?offset=905");

  return res.json();
};

export default Paldea;
