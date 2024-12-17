import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const useLocalStorage = (key, fallBack) => {
  const [value, setValue] = useState(localStorage.getItem(key) ?? fallBack);
  useEffect(() => {
    localStorage.setItem(key, value);
  }, [value, key]);

  return [value, setValue];
};

export default useLocalStorage;
