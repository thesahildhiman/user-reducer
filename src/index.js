import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
const ContextData = createContext();
root.render(
  <React.StrictMode>
    <ContextData.Provider value={"it is context value"}>
      {/* value={string/array/object} */}
      <App />
    </ContextData.Provider>
  </React.StrictMode>
);
export { ContextData };
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
