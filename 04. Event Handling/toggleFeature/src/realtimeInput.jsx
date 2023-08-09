import { useState } from "react";
import "./App.css";
const RealTimeInput = () => {
  const [text, setText] = useState("");
  console.log(text);
  return (
    <>
      <textarea
        name="myText"
        id=""
        cols="30"
        rows="10"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <p>{text}</p>
    </>
  );
};
export default RealTimeInput;
