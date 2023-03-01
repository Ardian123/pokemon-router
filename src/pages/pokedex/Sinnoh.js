import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Sinnoh = () => {
  const data = useLoaderData();
  const sinnoh = data.results;
  return (
    <div className="grid grid-center pokedex">
      {sinnoh.map((pokemon) => (
        <div key={pokemon.name}>
          <Link to={`../../pokemon/${pokemon.name}`}>
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </Link>
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
