import { useEffect, useState } from "react";
function useStorage() {
  const [favBooks, setFavBooks] = useState(
    () => JSON.parse(localStorage.getItem("favBooks")) || []
  );

  useEffect(() => {
    console.log(favBooks);
  }, [favBooks]);

  return {
    favBooks,
    setFavBooks,
  };
}

export default useStorage;
