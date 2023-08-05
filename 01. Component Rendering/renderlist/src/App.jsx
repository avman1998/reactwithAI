const App = () => {
  //Array to be rendered.
  const names = ["aman", "riya", "amit", "tushar"];

  return (
    <div>
      <ul>
        {names.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default App;
