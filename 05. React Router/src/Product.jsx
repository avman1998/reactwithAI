// eslint-disable-next-line react/prop-types
const Product = ({ image }) => {
  return (
    <div>
      <img src={image} width="300px" height="200px" alt="image" />
    </div>
  );
};

export default Product;
