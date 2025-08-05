import { ContextBooks } from "../../context/contextBooks.js";

import { useContext, useState } from "react";

const BookFavBtn = ({ bookInfo }) => {
  const { favBooks, setFavBooks } = useContext(ContextBooks);

  const [favState, setFavState] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          if (favState) {
            const localStorageBooks = JSON.parse(
              localStorage.getItem("favBooks")
            );

            const outBookFavorite = localStorageBooks.filter(
              ({ id }) => id !== bookInfo.id
            );

            localStorage.setItem("favBooks", JSON.stringify(outBookFavorite));

            setFavBooks(outBookFavorite);
          } else {
            localStorage.setItem("favBooks", JSON.stringify([bookInfo]));

            setFavBooks((prev) => [...prev, bookInfo]);

            console.log(bookInfo.id);
          }

          setFavState(!favState);
        }}
        className={`flex items-center justify-center gap-1 p-2  border-2 rounded-lg w-full cursor-pointer transition-all ${
          favState
            ? "bg-yellow-400 border-yellow-400   hover:opacity-50 text-white"
            : "bg-white border-gray-400   hover:border-yellow-400"
        }`}
      >
        <svg
          className={`size-6 transition-colors ${
            favState ? "fill-white" : "fill-yellow-400"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
        >
          <path d="M341.5 45.1C337.4 37.1 329.1 32 320.1 32C311.1 32 302.8 37.1 298.7 45.1L225.1 189.3L65.2 214.7C56.3 216.1 48.9 222.4 46.1 231C43.3 239.6 45.6 249 51.9 255.4L166.3 369.9L141.1 529.8C139.7 538.7 143.4 547.7 150.7 553C158 558.3 167.6 559.1 175.7 555L320.1 481.6L464.4 555C472.4 559.1 482.1 558.3 489.4 553C496.7 547.7 500.4 538.8 499 529.8L473.7 369.9L588.1 255.4C594.5 249 596.7 239.6 593.9 231C591.1 222.4 583.8 216.1 574.8 214.7L415 189.3L341.5 45.1z" />
        </svg>
        {favState ? "Quitar de favoritos" : "Añadir a favoritos"}
      </button>
      {/* <button className="flex items-center gap-1 p-2 bg-yellow-400 border-2 text-white rounded-lg border-yellow-400 w-full cursor-pointer transition-all hover:border-gray-500">
        <svg
          className="size-6 fill-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
        >
          <path d="M341.5 45.1C337.4 37.1 329.1 32 320.1 32C311.1 32 302.8 37.1 298.7 45.1L225.1 189.3L65.2 214.7C56.3 216.1 48.9 222.4 46.1 231C43.3 239.6 45.6 249 51.9 255.4L166.3 369.9L141.1 529.8C139.7 538.7 143.4 547.7 150.7 553C158 558.3 167.6 559.1 175.7 555L320.1 481.6L464.4 555C472.4 559.1 482.1 558.3 489.4 553C496.7 547.7 500.4 538.8 499 529.8L473.7 369.9L588.1 255.4C594.5 249 596.7 239.6 593.9 231C591.1 222.4 583.8 216.1 574.8 214.7L415 189.3L341.5 45.1z" />
        </svg>
        Quitar de favoritos
      </button> */}
    </>
  );
};

export default BookFavBtn;
