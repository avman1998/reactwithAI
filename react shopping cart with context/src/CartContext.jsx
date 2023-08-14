import { createContext, useState } from "react";
export const cartContext = createContext(null);
// eslint-disable-next-line react/prop-types
const ContextProvider = ({ children }) => {
  const [cartArray, setCartArray] = useState([]);
  return (
    <cartContext.Provider
      value={{
        cartArray,
        setCartArray,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};
export default ContextProvider;
