import React from "react";
import { Link } from "react-router-dom";
import './ErrorPage.css';

const Error404 = () => {
  return (
    <>
      <div className="notfound">
        <h1>Error! 404</h1>
        <h3>WE ARE SORRY, PAGE NOT FOUND!</h3>
        <p>
          The page you are looking for may have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link to="/">back to homepage</Link>
      </div>
    </>
  );
};

export default Error404;