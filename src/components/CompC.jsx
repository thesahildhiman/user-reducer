import React, { useContext } from "react";
import { ContextData } from "..";
import { ThemeContext } from "./CompA";

const CompC = () => {
  const data = useContext(ContextData);
  const [color, setColor] = useContext(ThemeContext);
  console.log("----", data);
  const colorClick = () => {
    setColor("green");
    console.log("---color---", color);
  };
  return (
    <>
      <div style={{ border: "2px solid black", margin: "10px" }}>
        <h2>CompC --- {data}</h2>
        <button onClick={colorClick}>Click</button>
      </div>
    </>
  );
};

export default CompC;
