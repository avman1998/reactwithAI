/* eslint-disable react/prop-types */
import "./App.css";
import PropTypes from "prop-types";
function App(props) {
  return (
    <>
      <h1>{props.name}</h1>
      <h2>{props.address}</h2>
      <h3>{props.phone}</h3>
    </>
  );
}
App.propTypes = {
  name: PropTypes.string,
  address: PropTypes.string,
  phone: PropTypes.string,
};
export default App;
