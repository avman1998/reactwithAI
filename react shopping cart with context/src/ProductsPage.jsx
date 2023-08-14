import { useEffect, useState } from "react";
import Product from "./Product";
const ProductsPage = () => {
  const PROD_URL = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState();

  useEffect(() => {
    fetchProducts();
  }, []);
  const fetchProducts = async () => {
    const res = await fetch(PROD_URL);
    const data = await res.json();
    setProducts(data);
  };
  const DisplayProducts = products?.map((item) => {
    return <Product key={item.id} item={item} />;
  });
  if (!products) return null;
  return (
    <>
      <div className="flex justify-center items-center flex-wrap gap-[20px]">
        {DisplayProducts}
      </div>
    </>
  );
};

export default ProductsPage;
