import { ContextBooks } from "../../context/ContextBooks.js";

import BookItem from "./BookItem.jsx";

import { useContext } from "react";
import emptySearch from "../../assets/image/emptySearch.png";
import errorSvg from "../../assets/image/error.svg";
import noBook from "../../assets/image/noBook.png";

const BookList = () => {
  const {
    books,
    setBooks,
    stateRequest,
    stateError,
    setStateError,
    setStateRequest,
  } = useContext(ContextBooks);

  return (
    <>
      <img
        className={`size-9/12 max-w-sm mt-20 transition-all ease-in ${
          books.length === 0 && !stateError
            ? "opacity-100"
            : " opacity-0 size-10 pointer-events-none"
        }`}
        src={emptySearch}
        alt="no-search"
      />

      <svg
        className={`size-20 transition-all ${
          stateRequest ? "opacity-100" : "opacity-0 absolute"
        }`}
        fill="#FF0043FF"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cx="12" cy="5" rx="4" ry="4">
          <animate
            id="spinner_jbYs"
            begin="0;spinner_JZdr.end"
            attributeName="cy"
            calcMode="spline"
            dur="0.375s"
            values="5;20"
            keySplines=".33,0,.66,.33"
            fill="freeze"
          />
          <animate
            begin="spinner_jbYs.end"
            attributeName="rx"
            calcMode="spline"
            dur="0.05s"
            values="4;4.8;4"
            keySplines=".33,0,.66,.33;.33,.66,.66,1"
          />
          <animate
            begin="spinner_jbYs.end"
            attributeName="ry"
            calcMode="spline"
            dur="0.05s"
            values="4;3;4"
            keySplines=".33,0,.66,.33;.33,.66,.66,1"
          />
          <animate
            id="spinner_ADF4"
            begin="spinner_jbYs.end"
            attributeName="cy"
            calcMode="spline"
            dur="0.025s"
            values="20;20.5"
            keySplines=".33,0,.66,.33"
          />
          <animate
            id="spinner_JZdr"
            begin="spinner_ADF4.end"
            attributeName="cy"
            calcMode="spline"
            dur="0.4s"
            values="20.5;5"
            keySplines=".33,.66,.66,1"
          />
        </ellipse>
      </svg>

      {stateError && <img className="size-90" src={errorSvg} alt="error" />}

      <ul
        className={`book-list-ul transition-all ${
          stateRequest
            ? "opacity-0 pointer-events-none translate-y-0"
            : "opacity-100 translate-y-1  pointer-events-auto"
        }`}
      >
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

          const { thumbnail = noBook , smallThumbnail = noBook  } =
            imageLinks || {};

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
