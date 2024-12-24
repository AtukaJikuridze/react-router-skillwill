import React from "react";
import Navbar from "./components/MyNavbar";
import { Routes, Route } from "react-router-dom";
import Main from "./Pages/Main";
import Fact from "./Pages/Fact";
import About from "./Pages/About";
import InCorrectFact from "./Pages/InCorrectFact";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route element={<Main />} path="/" />
        <Route element={<About />} path="/about" />
        <Route element={<Fact />} path="/about/facts/:id" />
        <Route element={<InCorrectFact />} path="/about/facts/incorrect" />
        
      </Routes>
    </div>
  );
};

export default App;
