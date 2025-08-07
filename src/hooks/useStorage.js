import { useEffect, useState } from "react";
function useStorage() {
  const [favBooks, setFavBooks] = useState(
    () => JSON.parse(localStorage.getItem("favBooks")) || []
  );

  const [mode, setMode] = useState(
    () => JSON.parse(localStorage.getItem("mode")) || "system"
  );

  useEffect(() => {
    console.log(favBooks);
  }, [favBooks]);

  useEffect(() => {
    console.log(mode);
  }, [mode]);

  return {
    favBooks,
    setFavBooks,
    mode,
    setMode,
  };
}

export default useStorage;
