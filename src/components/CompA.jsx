import React, { useState, createContext } from "react";
import CompB from "./CompB";
const ThemeContext = createContext();
const CompA = () => {
  const [color, setColor] = useState("blue");
  return (
    <ThemeContext.Provider value={[color, setColor]}>
      <CompB />
    </ThemeContext.Provider>
  );
};

export { ThemeContext };
export default CompA;
