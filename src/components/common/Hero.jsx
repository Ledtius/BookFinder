const Hero = () => {
  return (
    <>
      <figure className="flex items-center mt-[107.2px] min-w-60 max-w-[1440]">
        <div className="flex flex-col items-center">
          <article className="flex flex-col gap-6">
            <h2 className="font-bold text-3xl/normal text-center">
              Busca tus libros y articulos favoritos en BookFinder
            </h2>
            <span className="text-center">
              ¡Puedes encontrar libros, historietas, articulos, de todo!
            </span>
          </article>

          <img
            className="size-50"
            src="/src/assets/image/hero.png"
            alt="book-and-glasses"
          />
        </div>
      </figure>
    </>
  );
};
export default Hero;
