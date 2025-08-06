import { useState, useEffect } from "react";
import googleBooks from "../services/googleBooks.js";

function useBooks() {
  const [bookName, setBookName] = useState("");
  const [books, setBooks] = useState([]);
  const [globalBookInfo, setGlobalBookInfo] = useState({});

  useEffect(() => {
    if (bookName) googleBooks(bookName, setBooks);
  }, [bookName]);

  return {
    bookName,
    setBookName,
    books,
    setBooks,
    globalBookInfo,
    setGlobalBookInfo,
  };
}

export default useBooks;
