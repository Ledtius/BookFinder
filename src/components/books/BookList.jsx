import { Link } from "react-router";
import { ContextBooks } from "../../context/contextBooks.js";

import BookItem from "./BookItem.jsx";

import { useContext } from "react";

const BookList = () => {
  const { books } = useContext(ContextBooks);

  return (
    <>
      <img
        className={`size-9/12 max-w-sm mt-20 transition-all ease-in ${
          books.length === 0
            ? "opacity-100"
            : " opacity-0 size-10 pointer-events-none"
        }`}
        src="/src/assets/image/emptySearch.png"
        alt="no-search"
      />
      <ul className="book-list-ul">
        {books.map(({ volumeInfo, id }) => {
          const {
            title = "Sin titulo",
            authors = ["Sin autor"],
            description = "Sin descripción",
            publisher = "Sin editorial",
            publishedDate = "Sin fecha",
            previewLink = "about:blank",
            imageLinks,
          } = volumeInfo;

          const {
            thumbnail = "/src/assets/image/noBook.png",
            smallThumbnail = "/src/assets/image/noBook.png",
          } = imageLinks || {};

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
            <li key={id} className="book-list-li">
              <BookItem bookInfo={bookInfo} />
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default BookList;
