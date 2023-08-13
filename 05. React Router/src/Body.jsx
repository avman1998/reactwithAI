import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Product from "./Product";
// import Product from "./Product";
const Body = () => {
  const [products, setProducts] = useState([]);
  console.log(products);
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    setProducts(data);
  }
  const productsArray = products?.products?.map((item) => {
    return (
      <Link to={`product/${item.id}`} key={item.id}>
        <Product image={item?.images[0]} />
      </Link>
    );
  });
  return <div className="flex gap-3 flex-wrap">{productsArray}</div>;
};

export default Body;
