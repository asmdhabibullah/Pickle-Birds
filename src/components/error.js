import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div className="error">
      <div className="container">
        <div className="card text-center alert alert-info">
          <h2>Oops!</h2>
          <h2>404 Not Found</h2>
          <p>Sorry, an error has occured, Requested "info" is not found!</p>
          <NavLink className="btn btn-warning btn-error" to="/">Go To Home.</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Error;