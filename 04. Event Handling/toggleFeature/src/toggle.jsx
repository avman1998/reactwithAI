import { useState } from "react";
import useLocalStorage from "./useLocalStorage";
import "./App.css";
const Toggle = () => {
  const [showLogo, setShowLogo] = useState(false);
  const { data, setData } = useLocalStorage("name", "Aman");
  return (
    <div className="container">
      <button
        onClick={() => {
          setShowLogo((prev) => !prev);
          setData((prev) =>
            prev === "Aman" ? setData("Amit") : setData("Aman")
          );
        }}
      >
        {showLogo === false ? "Show React Logo" : "Show Ember Logo"}
      </button>
      {data}
      {showLogo ? (
        <img src="https://cdn.iconscout.com/icon/free/png-256/free-react-1-282599.png?f=webp" />
      ) : (
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmWt5nY9Fi0qNtidqe5YIBTaGzbLjC5PA4QK9HFAMGavNOfFsKW9-kCoJYleQjtkMpHQU&usqp=CAU" />
      )}
    </div>
  );
};
export default Toggle;
