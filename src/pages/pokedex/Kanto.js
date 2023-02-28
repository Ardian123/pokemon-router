import React from "react";
import { useLoaderData } from "react-router-dom";

const Kanto = () => {
  const data = useLoaderData();
  const kanto = data.results;
  return (
    <div className="grid grid-center pokedex">
      {kanto.map((pokemon) => (
        <div key={pokemon.name}>
          <p>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</p>
        </div>
      ))}
    </div>
  );
};

export const kantoLoader = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");

  return res.json();
};

export default Kanto;
