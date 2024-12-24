import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { personInfo } from "../personInfo";
import { Link } from "react-router-dom";

const Fact = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the fact corresponding to the given id
  const correctFact = personInfo.facts.find((e) => e.id == id);

  useEffect(() => {
    // If the fact doesn't exist, navigate to the incorrect page
    if (!correctFact) {
      navigate("/about/facts/incorrect");
    }
  }, [correctFact, id, navigate]); // Dependencies to track id and correctFact

  // If the fact is not found, the component won't render until the redirect happens
  if (!correctFact) {
    return null; // Or render a loading state, as the redirect will happen
  }

  return (
    <div className="fact-main">
      <h1>Fact: {id}</h1>
      <h1>{correctFact.fact}</h1>
      <div className="inputs">
        <Link to={`/about/facts/${id == 1 ? 1 : +id - 1}`}>
          <button>Prev</button>
        </Link>
        <Link to={`/about/facts/${+id + 1}`}>
          <button>Next</button>
        </Link>
      </div>
    </div>
  );
};

export default Fact;
