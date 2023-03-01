import React from "react";
import { Link, useRouteError } from "react-router-dom";

const PokemonError = () => {
  const error = useRouteError();

  return (
    <div className="pokemon-error">
      <h1>Pika pika</h1>
      <p>There's no Pokemon like: {error.message}</p>
      <Link className="btn" to="/">
        Back to HomePage
      </Link>
    </div>
  );
};

export default PokemonError;
