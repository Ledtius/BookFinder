import { useState } from "react";

function useBooks() {
  const [bookName, setBookName] = useState("");

  return {
    bookName,
    setBookName,
  };
}

export default useBooks;
