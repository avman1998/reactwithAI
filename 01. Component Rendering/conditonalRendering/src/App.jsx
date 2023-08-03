import "./App.css";

// eslint-disable-next-line react/prop-types
function App({ show }) {
  return <div>{show && <p>show me..</p>}</div>;
}

export default App;
