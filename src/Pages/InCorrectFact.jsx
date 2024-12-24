import React from "react";
import { Link } from "react-router-dom";
const InCorrectFact = () => {
  return (
    <div className="incorrect">
      <h1>Oops! The fact you're looking for doesn't exist.</h1>
      <Link to={"/"}>Back to home page</Link>
    </div>
  );
};

export default InCorrectFact;
