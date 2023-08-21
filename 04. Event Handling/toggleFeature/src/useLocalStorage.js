import { useState, useEffect } from "react";
function useLocalStorage(key, value) {
  const [data, setData] = useState(
    localStorage.getItem(key) ? localStorage.getItem(key) : value
  );
  useEffect(() => {
    localStorage.setItem(key, data);
  }, data);
  return {
    data,
    setData,
  };
}
export default useLocalStorage;
