const Hero = () => {
  return (
    <>
      <figure className="flex items-center justify-center flex-col md:flex-row lg:gap-10">
        <article className="flex flex-col items-center gap-6 w-fit">
          <h2 className="font-bold text-3xl/normal text-center w-fit lg:text-4xl lg:max-w-120 dark:text-neutral-100">
            Busca tus libros y articulos favoritos en BookFinder
          </h2>
          <span className="text-center w-fit dark:text-neutral-400">
            ¡Puedes encontrar libros, historietas, artículos y mucho más!
          </span>
        </article>

        <img
          className="size-50 lg:size-80"
          src="/src/assets/image/hero.png"
          alt="book-and-glasses"
        />
      </figure>
    </>
  );
};
export default Hero;
