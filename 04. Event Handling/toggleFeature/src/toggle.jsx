import { useState } from "react";
import "./App.css";
const Toggle = () => {
  const [showLogo, setShowLogo] = useState(false);
  return (
    <div className="container">
      <button onClick={() => setShowLogo((prev) => !prev)}>
        {showLogo === false ? "Show React Logo" : "Show Ember Logo"}
      </button>
      {showLogo ? (
        <img src="https://cdn.iconscout.com/icon/free/png-256/free-react-1-282599.png?f=webp" />
      ) : (
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmWt5nY9Fi0qNtidqe5YIBTaGzbLjC5PA4QK9HFAMGavNOfFsKW9-kCoJYleQjtkMpHQU&usqp=CAU" />
      )}
    </div>
  );
};
export default Toggle;
