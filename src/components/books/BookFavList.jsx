import { useContext } from "react";
import { ContextBooks } from "../../context/ContextBooks.js";

import BookItem from "./BookItem";
useContext;

const BookFavList = () => {
  const { favBooks = [] } = useContext(ContextBooks);

  console.log(favBooks);
  return (
    <>
      <ul className="book-list-ul">
        {favBooks.map(
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
            const bookInfo = {
              id,
              title,
              authors,
              description,
              publisher,
              publishedDate,
              previewLink,
              thumbnail,
              smallThumbnail,
            };
            return (
              <li className="book-list-li" key={id}>
                <BookItem bookInfo={bookInfo} />
              </li>
            );
          }
        )}
      </ul>
    </>
  );
};

export default BookFavList;
