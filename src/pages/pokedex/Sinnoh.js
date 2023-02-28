import React from "react";
import { useLoaderData } from "react-router-dom";

const Sinnoh = () => {
  const data = useLoaderData();
  const sinnoh = data.results;
  return (
    <div className="grid grid-center pokedex">
      {sinnoh.map((pokemon) => (
        <div key={pokemon.name}>
          <p>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</p>
        </div>
      ))}
    </div>
  );
};

export const sinnohLoader = async () => {
  const res = await fetch(
    "https://pokeapi.co/api/v2/pokemon?offset=386&limit=107"
  );

  return res.json();
};

export default Sinnoh;
