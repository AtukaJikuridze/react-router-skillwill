import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Main</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/about/facts/1">Facts</Link>
        </li>
      </ul>
    </nav>
  );
};

export default navbar;
