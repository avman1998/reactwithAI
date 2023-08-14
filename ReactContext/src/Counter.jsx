import { useContext } from "react";
import { counterContext } from "./CounterContext";
function Counter() {
  const { setCount } = useContext(counterContext);
  return (
    <>
      <div className="btns">
        <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
        <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
      </div>
    </>
  );
}
export default Counter;
