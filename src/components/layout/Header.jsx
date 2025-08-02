import { Link } from "react-router";
import { useState } from "react";

const Header = () => {
  const [show, setShow] = useState(false);
  function changeShow() {
    setShow(!show);
  }
  return (
    <>
      <header className="flex items-center justify-between pr-5 pl-5 pt-3 pb-3 relative shadow-lg min-w-80">
        <figure
          className="flex items-center transition transform ease-in active:scale-105 z-20"
          onClick={() => {
            setShow(false);
          }}
        >
          <svg
            className="size-10 fill-rose-600"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
          >
            <path d="M480 576L192 576C139 576 96 533 96 480L96 160C96 107 139 64 192 64L496 64C522.5 64 544 85.5 544 112L544 400C544 420.9 530.6 438.7 512 445.3L512 512C529.7 512 544 526.3 544 544C544 561.7 529.7 576 512 576L480 576zM192 448C174.3 448 160 462.3 160 480C160 497.7 174.3 512 192 512L448 512L448 448L192 448zM224 216C224 229.3 234.7 240 248 240L424 240C437.3 240 448 229.3 448 216C448 202.7 437.3 192 424 192L248 192C234.7 192 224 202.7 224 216zM248 288C234.7 288 224 298.7 224 312C224 325.3 234.7 336 248 336L424 336C437.3 336 448 325.3 448 312C448 298.7 437.3 288 424 288L248 288z" />
          </svg>
          <h2 className="font-bold">BookFinder</h2>
        </figure>
        <button
          className={`menu-btn transition-all duration-300 ease-in-out ${
            show
              ? "scale-0 opacity-0 translate-y-2 pointer-events-none"
              : "scale-100 opacity-100 translate-y-0"
          }`}
          onClick={changeShow}
        >
          <svg
            className="menu-btn-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
          >
            <path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z" />
          </svg>
        </button>
        <button
          className={`menu-btn z-20  transition-all ease-out absolute right-5 ${
            show
              ? "scale-100 opacity-100"
              : "scale-0 opacity-0 pointer-events-none"
          }`}
          onClick={changeShow}
        >
          <svg
            className="menu-btn-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
          >
            <path d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z" />
          </svg>
        </button>
        <div
          className={`absolute w-full inset-4 z-10 p-10 transition-all duration-300 ease-in ${
            show
              ? "opacity-100 translate-y-2"
              : "opacity-0 translate-y-0 pointer-events-none"
          }`}
        >
          <nav className="flex justify-center border-1 border-gray-400 p-5 shadow-lg w-full bg-white">
            <ul className="flex items-center flex-col gap-4 text-lg">
              <li className="hover-nav-link">
                <Link to={"/"} onClick={changeShow}>
                  Inicio
                </Link>
              </li>
              <li className="hover-nav-link">
                <Link to={"favorites"} onClick={changeShow}>
                  Favoritos
                </Link>
              </li>
              <li className="hover-nav-link">
                <Link to={"about-us"} onClick={changeShow}>
                  Acerca de nosotros
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
export default Header;
