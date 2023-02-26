import { Link } from "react-router-dom";
import React from 'react';

const NavBar = () => {
  return (
    <nav classname="navbar">
      <h1 className = "homepage">
        <Link to="/">Home Page</Link>
      </h1>
      <div className="links">
        <Link to="/">Back </Link>
        <Link to="/create"> Create Blog</Link>
      </div>
    </nav>
  );
};
export default NavBar;
