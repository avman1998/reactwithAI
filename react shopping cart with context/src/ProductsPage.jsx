import { useEffect, useMemo, useState, useCallback } from "react";
import Product from "./Product";
const ProductsPage = () => {
  const PROD_URL = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState();
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetchProducts();
  }, []);

  // useCallback=> related to re-creating
  const fetchProducts = useCallback(async () => {
    const res = await fetch(PROD_URL);
    const data = await res.json();
    setProducts(data);
  }, []);

  // const fetchProducts = async () => {
  //   const res = await fetch(PROD_URL);
  //   const data = await res.json();
  //   setProducts(data);
  // };

  // useMemo=> storing results of complex computation
  const DisplayProducts = useMemo(() => {
    return products?.map((item) => {
      console.log("It is rendering");
      return <Product key={item.id} item={item} />;
    });
  }, [products]);

  if (!products) return null;
  return (
    <>
      <div className="flex justify-center items-center flex-wrap gap-[20px]">
        {DisplayProducts}
      </div>
      <button onClick={() => setCount((prev) => prev + 1)}>Click me</button>
      <p>{count}</p>
    </>
  );
};

export default ProductsPage;
