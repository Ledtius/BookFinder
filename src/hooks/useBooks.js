import { useState, useEffect } from "react";
import googleBooks from "../services/googleBooks.js";

function useBooks() {
  const [bookName, setBookName] = useState("");
  const [books, setBooks] = useState([]);
  const [globalBookInfo, setGlobalBookInfo] = useState({});
  const [stateRequest, setStateRequest] = useState(false);

  useEffect(() => {
    if (bookName)
      googleBooks(bookName, setBooks, stateRequest, setStateRequest);
  }, [bookName]);

  useEffect(() => {
    console.log(stateRequest);
  }, [stateRequest]);
  useEffect(() => {
    console.log(books);
  }, [books]);

  return {
    bookName,
    setBookName,
    books,
    setBooks,
    globalBookInfo,
    setGlobalBookInfo,
    stateRequest,
    setStateRequest,
  };
}

export default useBooks;
