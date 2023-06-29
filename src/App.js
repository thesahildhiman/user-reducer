import "./App.css";
import { useReducer } from "react";
import CompA from "./components/CompA";
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};
function App() {
  const initialValue = 0;
  const [state, dispatch] = useReducer(reducer, initialValue);
  return (
    <>
      <div className="App">
        <h2>{state}</h2>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      </div>
      <hr />
      <CompA />
    </>
  );
}

export default App;
