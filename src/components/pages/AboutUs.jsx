import aboutSvg from "../../assets/image/about-us-2.svg";
const AboutUs = () => {
  return (
    <>
      <section className="mt-[107.2px] flex flex-col items-center w-full ">
        <figure className="flex items-center gap-2 ">
          <svg
            className="size-10 dark:fill-neutral-100"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
          >
            <path d="M320 312C386.3 312 440 258.3 440 192C440 125.7 386.3 72 320 72C253.7 72 200 125.7 200 192C200 258.3 253.7 312 320 312zM290.3 368C191.8 368 112 447.8 112 546.3C112 562.7 125.3 576 141.7 576L498.3 576C514.7 576 528 562.7 528 546.3C528 447.8 448.2 368 349.7 368L290.3 368z" />
          </svg>
          <h1 className="font-bold text-2xl dark:text-neutral-100">
            Sobre nosotros
          </h1>
        </figure>
        <div className="flex flex-col items-center md:flex-row md:gap-10">
          {/* <img
            className="mt-10 rounded-lg min-w-60 w-full max-w-100 h-full md:w-full md:h-105"
            src="/src/assets/image/about-us.webp"
            alt="about-us"
          /> */}

          <img
            className="mt-10 rounded-lg min-w-60 w-full max-w-100 h-full md:w-full md:h-105"
            src={aboutSvg}
            alt="about-us"
          />
          <article className="mt-5 text-justify md:flex-row max-w-100 dark:text-neutral-400">
            <p>
              BookFinder es una aplicación web desarrollada con el objetivo de
              facilitar la búsqueda de libros de manera rápida, sencilla y
              visualmente atractiva.
            </p>
            <br />
            <p>
              Está pensada para lectores, estudiantes y curiosos que quieren
              descubrir nuevas obras o acceder fácilmente a información sobre
              sus libros favoritos.
            </p>
            <br />
            <p>
              El proyecto fue construido utilizando tecnologías modernas como
              React JS, JavaScript y Tailwind CSS, integrando la API de Google
              Books para obtener resultados en tiempo real.
            </p>
            <br />
            <p>
              BookFinder permite realizar búsquedas por título, autor o palabras
              clave, mostrando resultados con detalles como portada, autor,
              descripción y enlace para obtener más información.
            </p>
          </article>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
