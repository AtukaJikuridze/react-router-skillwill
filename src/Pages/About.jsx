import React from "react";
import { personInfo } from "../personInfo";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about-main">
      <div className="about-info">
        <h1>
          {personInfo.name} {personInfo.lastName}
        </h1>
        <p>{personInfo.about}</p>
        <Link to={"/about/facts/1"}>
          <h1>Here is some facts</h1>
        </Link>
      </div>
    </div>
  );
};

export default About;
