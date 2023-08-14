/* eslint-disable react/prop-types */
import { useContext } from "react";
import { cartContext } from "./CartContext";
// eslint-disable-next-line react/prop-types
const Product = ({ item }) => {
  const { cartArray, setCartArray } = useContext(cartContext);
  console.log(cartArray);
  function addToCart() {
    setCartArray((prev) => [...prev, item]);
  }
  return (
    <div className="flex flex-col gap-3 p-2 bg-blue-300 text-black w-[200px]">
      <img src={item.image} alt={item.title} />
      <p>{item.title}</p>
      <button onClick={addToCart} className="text-white">
        Add to cart
      </button>
    </div>
  );
};

export default Product;
