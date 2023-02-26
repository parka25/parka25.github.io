import { Link } from "react-router-dom";
import React from 'react';

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>404 Error</h2>
      <p>We Cannot find the page</p>
      <Link to="/">Take me back Home</Link>
    </div>
  );
};
export default NotFound;
