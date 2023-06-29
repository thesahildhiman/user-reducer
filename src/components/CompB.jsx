import React, { useContext } from "react";
import CompC from "./CompC";
import { ThemeContext } from "./CompA";

const CompB = () => {
  const [color] = useContext(ThemeContext);
  return (
    <div style={{ border: "2px solid blue" }}>
      <h3 style={{ color: color }}>Comp B ---</h3>
      <CompC />
    </div>
  );
};

export default CompB;
