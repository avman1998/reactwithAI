import "./App.css";
import Counter from "./Counter";
import { useContext } from "react";
import { counterContext } from "./CounterContext";
function App() {
  const { count } = useContext(counterContext);

  return (
    <div className="appContainer">
      <h1>{count}</h1>
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
}

export default App;
