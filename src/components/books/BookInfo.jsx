import BookFavBtn from "./BookFavBtn.jsx";
import { ContextBooks } from "../../context/contextBooks.js";
import { useContext } from "react";

const BookInfo = () => {
  const { globalBookInfo } = useContext(ContextBooks);

  const {
    id,
    title = "Sin titulo",
    authors = ["Sin autor"],
    description = "Sin descripción",
    publisher = "Sin editorial",
    publishedDate = "Sin fecha",
    previewLink = "about:blank",
    thumbnail = "/src/assets/image/noBook.png",
    smallThumbnail = "/src/assets/image/noBook.png",
  } = globalBookInfo;

  return (
    <>
      <section className="mt-30 flex flex-col items-center gap-6 md:flex-row lg:w-[800px] lg:h-[470.388px]">
        <img
          className="rounded-lg object-fill max-w-md h-[279.625px] md:self-start md:h-[474.4px]"
          src={thumbnail}
          alt="book-img"
        />
        <div className="flex flex-col items-start gap-4 max-w-sm md:max-w-md lg:w-[800px] lg:h-[470.388px] justify-between ">
          <article className="flex flex-col gap-2">
            <h1 className="font-semibold text-2xl max-h-16 overflow-auto dark:text-neutral-100">
              {title}
            </h1>
            <span className="max-h-16 overflow-auto dark:text-gray-300 ">
              {authors}
            </span>
          </article>
          <article className="flex flex-col gap-2">
            <h2 className="font-semibold text-lg max-h-16 overflow-auto dark:text-neutral-100 ">
              Descripcion
            </h2>
            <p className="max-h-12 overflow-auto dark:text-gray-300 ">
              {description}
            </p>
          </article>
          <div className="flex flex-col items-start gap-4">
            <article>
              <h2 className="font-semibold text-lg max-h-12 overflow-auto dark:text-neutral-100  ">
                Editorial
              </h2>
              <span className="max-h-16 overflow-auto dark:text-gray-300 ">
                {publisher}
              </span>
            </article>
            <article>
              <h2 className="font-semibold text-lg max-h-12 overflow-auto dark:text-neutral-100">
                Fecha de publicacion
              </h2>
              <span className="max-h-16 overflow-auto dark:text-gray-300 ">
                {publishedDate}
              </span>
            </article>
          </div>
          <div className="flex flex-col w-full gap-4">
            <a
              href={previewLink}
              target="_blank"
              className="flex items-center justify-center gap-1 p-2 bg-white border-2 rounded-lg border-rose-600 text-rose-600 font-bold w-full cursor-pointer transition-all hover:text-white hover:bg-rose-600"
            >
              Ver libro
            </a>
            <BookFavBtn bookInfo={globalBookInfo} />
          </div>
        </div>
      </section>
    </>
  );
};

export default BookInfo;
