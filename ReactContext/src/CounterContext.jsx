import { createContext } from "react";
import { useState } from "react";
export const counterContext = createContext(null);
// eslint-disable-next-line react/prop-types
function CounterContextProvider({ children }) {
  const [count, setCount] = useState(0);
  return (
    <counterContext.Provider
      value={{
        count,
        setCount,
      }}
    >
      {children}
    </counterContext.Provider>
  );
}
export default CounterContextProvider;
