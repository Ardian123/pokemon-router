import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Paldea = () => {
  const data = useLoaderData();
  const paldea = data.results;
  return (
    <div className="grid grid-center pokedex">
      {paldea.map((pokemon) => (
        <div key={pokemon.name}>
          <Link to={`../../pokemon/${pokemon.name}`}>
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </Link>
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
