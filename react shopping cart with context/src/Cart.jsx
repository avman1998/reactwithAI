import { useContext } from "react";
import { cartContext } from "./CartContext";
const Cart = () => {
  const { cartArray } = useContext(cartContext);
  return <h1 className="text-right">Cart:{cartArray.length}</h1>;
};

export default Cart;
