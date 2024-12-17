import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import useWindowResize from "./hooks/useWindowResize";

const App = () => {
  const isMobileVersion = useWindowResize();
  useEffect(() => {}, [isMobileVersion]);

  const [isDarkMode, setIsDarkMode] = useLocalStorage("color", "white");
  const switchColor = () => {
    switch (localStorage.getItem("color")) {
      case "black":
        localStorage.setItem("color", "white");
        setIsDarkMode("white");
        break;
      case "white":
        localStorage.setItem("color", "black");

        setIsDarkMode("black");
        break;
    }
    if (!localStorage.getItem("color")) {
      localStorage.setItem("color", "black");
      setIsDarkMode("black");
    }
  };
  return (
    <div
      className={`App ${
        !isMobileVersion
          ? isDarkMode === "black"
            ? "blackMODE"
            : "whiteMODE"
          : "white"
      } `}
    >
      <button onClick={switchColor}>Toggle Mode</button>
    </div>
  );
};
export default App;
