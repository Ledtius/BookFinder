import { useContext } from "react";
import { ContextBooks } from "../../context/contextBooks.js";

import BookItem from "./BookItem";
useContext;

const BookFavList = () => {
  const { favBook } = useContext(ContextBooks);

  return (
    <>
      <ul className="book-list-ul">
        {favBook.map(
          ({
            id,
            title,
            authors,
            description,
            publisher,
            publishedDate,
            previewLink,
            thumbnail,
            smallThumbnail,
          }) => {
            return (
              <li className="book-list-li" key={id}>
                <BookItem />
              </li>
            );
          }
        )}
      </ul>
    </>
  );
};

export default BookFavList;
