import BookFavBtn from "./BookFavBtn.jsx";

const BookInfo = () => {
  return (
    <>
      <section className="mt-30 flex flex-col items-center gap-6 md:flex-row">
        <img
          className="rounded-lg object-fill max-w-md h-[279.625px] md:self-start md:h-[474.4px]"
          src="http://books.google.com/books/content?id=FlDehedEjV4C&printsec=frontcover&img=1&zoom=1&source=gbs_api"
          alt="book-img"
        />
        <div className="flex flex-col items-start gap-4 max-w-sm md:max-w-md">
          <article className="flex flex-col gap-2">
            <h1 className="font-semibold text-2xl max-h-16 overflow-auto ">
              El viejo y el mar Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Nisi alias odio reprehenderit atque, neque dicta
              culpa veniam quidem provident quia, fugiat ducimus soluta suscipit
              quasi ut ipsam consequuntur repellat quibusdam!
            </h1>
            <span className="max-h-16 overflow-auto ">Ernest Hemingway</span>
          </article>
          <article className="flex flex-col gap-2">
            <h2 className="font-semibold text-lg max-h-16 overflow-auto ">
              Descripcion
            </h2>
            <p className="max-h-25 overflow-auto ">
              Aquí Hemingway retotrma, en un estilo remarcable, el clásico tema
              del valor ante la derrota, del triunfo personal sacado de la
              pérdida.
            </p>
          </article>
          <div className="flex flex-col items-start gap-4">
            <article>
              <h2 className="font-semibold text-lg max-h-16 overflow-auto ">
                Editorial
              </h2>
              <span className="max-h-16 overflow-auto ">Lorem ipsum dolor</span>
            </article>
            <article>
              <h2 className="font-semibold text-lg max-h-16 overflow-auto ">
                Fecha de publicacion
              </h2>
              <span className="max-h-16 overflow-auto ">2001</span>
            </article>
          </div>
          <div className="flex flex-col w-full gap-4">
            <button className="flex items-center justify-center gap-1 p-2 bg-white border-2 rounded-lg border-rose-600 text-rose-600 font-bold w-full cursor-pointer transition-all hover:text-white hover:bg-rose-600">
              Ver libro
            </button>
            <BookFavBtn />
          </div>
        </div>
      </section>
    </>
  );
};

export default BookInfo;
