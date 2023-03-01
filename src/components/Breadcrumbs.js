import React from "react";
import { useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .join(" -> ");

  return (
    <div className="wrapper" style={{ marginBottom: "1rem" }}>
      {crumbs && (
        <p>
          <strong>You are here: </strong>
          <span className="breadcrumb">{crumbs}</span>
        </p>
      )}
    </div>
  );
};

export default Breadcrumbs;
