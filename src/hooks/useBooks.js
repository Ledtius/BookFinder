import { useState, useEffect } from "react";
import googleBooks from "../services/googleBooks.js";

function useBooks() {
  const [bookName, setBookName] = useState("");
  const [books, setBooks] = useState([]);
  const [globalBookInfo, setGlobalBookInfo] = useState({});
  const [stateRequest, setStateRequest] = useState(false);
  const [stateError, setStateError] = useState(false);

  useEffect(() => {
    if (bookName)
      googleBooks(bookName, setBooks, setStateRequest, setStateError);
  }, [bookName]);

  useEffect(() => {
    console.log(stateRequest);
  }, [stateRequest]);
  useEffect(() => {
    console.log(books);
  }, [books]);

  useEffect(() => {
    console.log(stateError);
  }, [stateError]);

  return {
    bookName,
    setBookName,
    books,
    setBooks,
    globalBookInfo,
    setGlobalBookInfo,
    stateRequest,
    setStateRequest,
    stateError,
    setStateError,
  };
}

export default useBooks;
