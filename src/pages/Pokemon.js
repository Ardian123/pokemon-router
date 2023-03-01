import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Pokemon = () => {
  const { name } = useParams();

  const data = useLoaderData();

  if (!data) {
    return (
      <>
        <h1>Sorry</h1>
        <p>Pokemon you are looking for doesn't exist.</p>
      </>
    );
  }

  const pokemon = {
    name: name.charAt(0).toUpperCase() + name.slice(1),
    id: data.id,
    type: data.types
      .map(
        (type) =>
          type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)
      )
      .join(", "),
    images: [
      data.sprites.front_default,
      data.sprites.front_shiny,
      data.sprites.other.dream_world.front_default,
      data.sprites.other["official-artwork"].front_default,
    ],
  };

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <div className="pokemon-gallery">
        {pokemon.images.map(
          (image) => image && <img src={image} alt={data.name} />
        )}
      </div>
      <p>
        <strong>Pokedex ID:</strong> {pokemon.id}
      </p>
      <p>
        <strong>Type:</strong> {pokemon.type}
      </p>
    </div>
  );
};

export const pokemonLoader = async ({ params }) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`);

  if (!res) {
    return;
  }

  return res.json();
};

export default Pokemon;
