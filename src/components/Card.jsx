import React from "react";
import "./Card.css";

const Card = (props) => {
  console.log(props.title);

  return (
    <div className="book">
      <h1>{props.title}</h1>
      <img src={props.image} alt={props.name} />
      <p className="description">{props.description}</p>
      <hr />
      <h1>Persons in this book</h1>
      <div className="persons">
        {props.persons?.map((e, i) => {
          return i !== props.persons.length - 1 ? (
            <h1>{e} ,</h1>
          ) : (
            <h1>{e} </h1>
          );
        })}
      </div>
      <hr />
      <div className="buto-main">
        <button
          onClick={() => {
            console.log(props.title);
            console.log(props.description);
            console.log(props.persons.join(","));
          }}
        >
          Print The Info
        </button>
      </div>
    </div>
  );
};

export default Card;
