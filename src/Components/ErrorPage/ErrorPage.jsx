import React from "react";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h2>OOOps!!!</h2>
      <p>Errror khaisi re</p>
      <NavLink to="/">
        <button className="btn btn-primary">Go Back To Home</button>
      </NavLink>
    </div>
  );
};

export default ErrorPage;
