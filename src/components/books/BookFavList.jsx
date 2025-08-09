import { useContext } from "react";
import { ContextBooks } from "../../context/ContextBooks.js";

import BookItem from "./BookItem";
useContext;

import emptySearch from "../../assets/image/emptySearch.png";

const BookFavList = () => {
  const { favBooks = [] } = useContext(ContextBooks);

  console.log(favBooks);
  return (
    <>
      <img
        className={`size-9/12 max-w-sm mt-0 transition-all ease-in ${
          favBooks.length === 0
            ? "opacity-100"
            : " opacity-0 size-10 pointer-events-none"
        }`}
        src={emptySearch}
        alt="no-search"
      />

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
