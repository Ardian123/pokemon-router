import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Kalos = () => {
  const data = useLoaderData();
  const kalos = data.results;
  return (
    <div className="grid grid-center pokedex">
      {kalos.map((pokemon) => (
        <div key={pokemon.name}>
          <Link to={`../../pokemon/${pokemon.name}`}>
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </Link>
        </div>
      ))}
    </div>
  );
};

export const kalosLoader = async () => {
  const res = await fetch(
    "https://pokeapi.co/api/v2/pokemon?offset=649&limit=72"
  );

  return res.json();
};

export default Kalos;
