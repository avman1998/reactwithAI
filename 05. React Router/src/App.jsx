import "./App.css";
import Header from "./Header";
import { Outlet } from "react-router-dom";
function App() {
  // Outlet component is for childrens
  console.log("Outlet", Outlet);
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
