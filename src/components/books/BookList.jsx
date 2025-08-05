import { ContextBooks } from "../../context/contextBooks.js";

import BookItem from "./BookItem.jsx";

import { useContext, useState } from "react";

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
      <ul className="flex flex-col justify-center gap-6 md:flex-row md:flex-wrap max-w-5xl">
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
            <li
              key={id}
              className="bg-white w-fit list-none flex flex-col gap-4 items-center p-6 rounded-lg shadow-lg max-w-[228.775px] h-[466.825px] transition-transform cursor-pointer ease-in-out hover:scale-105"
            >
              {/* 466.825px  498.825px*/}
              <BookItem bookInfo={bookInfo} />
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default BookList;
