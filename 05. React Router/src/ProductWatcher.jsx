import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
const ProductWatcher = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await res.json();
    setProduct(data);
  };
  console.log(product);
  if (!product) return null;
  return product ? (
    <div className="flex flex-col gap-5">
      <img
        src={product?.thumbnail}
        alt={product.brand}
        width="300px"
        height="200px"
      />
      <h1>{product.title}</h1>
    </div>
  ) : (
    "Content is loading...."
  );
};

export default ProductWatcher;
