import React from "react";
import { Link } from "react-router-dom";

import unown from "../images/unown.png";

const NotFound = () => {
  return (
    <div>
      <h1>Page not found</h1>
      <figure>
        <img width={100} height={100} src={unown} alt="" />
        <figcaption>
          Unown - very cool Pokemon which has many forms. Every form presents
          one of the alphabet's character
        </figcaption>
      </figure>
      <Link to="/">Back</Link>
    </div>
  );
};

export default NotFound;
