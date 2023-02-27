import React from "react";
import { Link } from "react-router-dom";

import unown from "../images/unown.png";

const NotFound = () => {
  return (
    <div className="error">
      <h1>Page not found</h1>
      <figure className="error__figure u-shadow">
        <img width={100} height={100} src={unown} alt="" />
        <figcaption className="error__figcaption">
          <strong>Unown</strong> - cool Pokemon which has many forms. Every form
          presents one of the alphabet's character.
        </figcaption>
      </figure>
      <Link className="btn" to="/">
        Back
      </Link>
    </div>
  );
};

export default NotFound;
