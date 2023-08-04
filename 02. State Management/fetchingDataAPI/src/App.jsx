import { useState, useEffect } from "react";

import "./App.css";

// eslint-disable-next-line react/prop-types
function App({ id }) {
  const [product, setProduct] = useState();

  // impure code written here
  async function fetchData(id) {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await res.json();
    setProduct(data);
  }

  //safe place to write impure code to avoid side effects.
  useEffect(() => {
    fetchData(id);
  }, [id]);
  return (
    <>
      <h1>{product.brand}</h1>
      <p>{product.title}</p>
      <img src={product.images[0]} alt={product.title} />
      <p>Rs. {product.price}</p>
    </>
  );
}

export default App;
