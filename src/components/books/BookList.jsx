import { ContextBooks } from "../../context/contextBooks.js";

import BookItem from "./BookItem.jsx";

import { useContext, useState } from "react";

const BookList = () => {
  const { books } = useContext(ContextBooks);

  return (
    <>
      <img
        className="size-9/12 max-w-sm mt-20"
        src="/src/assets/image/emptySearch.png"
        alt="no-search"
      />

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
        } = imageLinks;

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
          <ul>
            <li
              key={id}
              className="bg-white w-fit list-none flex flex-col gap-2 items-center p-6 rounded-lg shadow-lg max-w-[228.775px] transition-transform cursor-pointer ease-in-out hover:scale-105"
            >
              <BookItem bookInfo={bookInfo} />;
            </li>
          </ul>
        );
      })}
    </>
  );
};
export default BookList;
