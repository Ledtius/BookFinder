import { useContext, useState, useEffect } from "react";
import { ContextBooks } from "../../context/contextBooks.js";

const BtnDarkMode = () => {
  const { mode, setMode } = useContext(ContextBooks);

  const [showMenu, setShowMenu] = useState(false);

  function changeMode(e) {
    const value = e.target.id;

    console.log(value);
    setMode(value);
    setShowMenu(!showMenu);

    localStorage.setItem("mode", JSON.stringify(value));
  }

  useEffect(() => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else if (mode === "light") {
      document.documentElement.classList.remove("dark");
    } else if (mode === "system") {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, [mode]);

  const iconsBtn = () => {
    if (mode === "dark")
      return (
        <svg
          className="svg-darkmode size-6 transition-all"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
        >
          <path d="M320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576C388.8 576 451.3 548.8 497.3 504.6C504.6 497.6 506.7 486.7 502.6 477.5C498.5 468.3 488.9 462.6 478.8 463.4C473.9 463.8 469 464 464 464C362.4 464 280 381.6 280 280C280 207.9 321.5 145.4 382.1 115.2C391.2 110.7 396.4 100.9 395.2 90.8C394 80.7 386.6 72.5 376.7 70.3C358.4 66.2 339.4 64 320 64z" />
        </svg>
      );
    else if (mode === "light")
      return (
        <svg
          className="svg-darkmode size-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
        >
          <path d="M210.2 53.9C217.6 50.8 226 51.7 232.7 56.1L320.5 114.3L408.3 56.1C415 51.7 423.4 50.9 430.8 53.9C438.2 56.9 443.4 63.5 445 71.3L465.9 174.5L569.1 195.4C576.9 197 583.5 202.4 586.5 209.7C589.5 217 588.7 225.5 584.3 232.2L526.1 320L584.3 407.8C588.7 414.5 589.5 422.9 586.5 430.3C583.5 437.7 576.9 443.1 569.1 444.6L465.8 465.4L445 568.7C443.4 576.5 438 583.1 430.7 586.1C423.4 589.1 414.9 588.3 408.2 583.9L320.4 525.7L232.6 583.9C225.9 588.3 217.5 589.1 210.1 586.1C202.7 583.1 197.3 576.5 195.8 568.7L175 465.4L71.7 444.5C63.9 442.9 57.3 437.5 54.3 430.2C51.3 422.9 52.1 414.4 56.5 407.7L114.7 320L56.5 232.2C52.1 225.5 51.3 217.1 54.3 209.7C57.3 202.3 63.9 196.9 71.7 195.4L175 174.6L195.9 71.3C197.5 63.5 202.9 56.9 210.2 53.9zM239.6 320C239.6 275.6 275.6 239.6 320 239.6C364.4 239.6 400.4 275.6 400.4 320C400.4 364.4 364.4 400.4 320 400.4C275.6 400.4 239.6 364.4 239.6 320zM448.4 320C448.4 249.1 390.9 191.6 320 191.6C249.1 191.6 191.6 249.1 191.6 320C191.6 390.9 249.1 448.4 320 448.4C390.9 448.4 448.4 390.9 448.4 320z" />
        </svg>
      );
    else
      return (
        <svg
          className="svg-darkmode size-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
        >
          <path d="M128 96C92.7 96 64 124.7 64 160L64 416C64 451.3 92.7 480 128 480L272 480L256 528L184 528C170.7 528 160 538.7 160 552C160 565.3 170.7 576 184 576L456 576C469.3 576 480 565.3 480 552C480 538.7 469.3 528 456 528L384 528L368 480L512 480C547.3 480 576 451.3 576 416L576 160C576 124.7 547.3 96 512 96L128 96zM160 160L480 160C497.7 160 512 174.3 512 192L512 352C512 369.7 497.7 384 480 384L160 384C142.3 384 128 369.7 128 352L128 192C128 174.3 142.3 160 160 160z" />
        </svg>
      );
  };

  return (
    <>
      <div className="relative w-fit ml-4">
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="p-2 border-2 border-gray-400 rounded-lg bg-white cursor-pointer dark:bg-neutral-800 transition-all duration-300 ease-in-out relative flex items-center gap-2"
        >
          {iconsBtn()}
        </button>
        <nav
          className={`flex justify-center border-1 border-gray-400 shadow-lg bg-white dark:bg-neutral-900 absolute right-0 transition-all ease-in-out z-10 ${
            showMenu
              ? "opacity-100 translate-y-1.5 pointer-events-auto"
              : "opacity-0 translate-y-0 pointer-events-none"
          }`}
        >
          <ul className="flex items-center flex-col w-full">
            <li
              onClick={changeMode}
              id="dark"
              className={`li-darkmode transition-all ease-in-out  ${
                mode === "dark"
                  ? "bg-neutral-300 dark:bg-neutral-700"
                  : "opacity-100"
              }`}
            >
              <svg
                className="svg-darkmode size-7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
              >
                <path d="M320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576C388.8 576 451.3 548.8 497.3 504.6C504.6 497.6 506.7 486.7 502.6 477.5C498.5 468.3 488.9 462.6 478.8 463.4C473.9 463.8 469 464 464 464C362.4 464 280 381.6 280 280C280 207.9 321.5 145.4 382.1 115.2C391.2 110.7 396.4 100.9 395.2 90.8C394 80.7 386.6 72.5 376.7 70.3C358.4 66.2 339.4 64 320 64z" />
              </svg>
              Modo oscuro
            </li>
            <li
              onClick={changeMode}
              id="light"
              className={`li-darkmode transition-all ease-in-out  ${
                mode === "light"
                  ? "bg-neutral-300 dark:bg-neutral-700"
                  : "opacity-100"
              }`}
            >
              <svg
                className="svg-darkmode size-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
              >
                <path d="M210.2 53.9C217.6 50.8 226 51.7 232.7 56.1L320.5 114.3L408.3 56.1C415 51.7 423.4 50.9 430.8 53.9C438.2 56.9 443.4 63.5 445 71.3L465.9 174.5L569.1 195.4C576.9 197 583.5 202.4 586.5 209.7C589.5 217 588.7 225.5 584.3 232.2L526.1 320L584.3 407.8C588.7 414.5 589.5 422.9 586.5 430.3C583.5 437.7 576.9 443.1 569.1 444.6L465.8 465.4L445 568.7C443.4 576.5 438 583.1 430.7 586.1C423.4 589.1 414.9 588.3 408.2 583.9L320.4 525.7L232.6 583.9C225.9 588.3 217.5 589.1 210.1 586.1C202.7 583.1 197.3 576.5 195.8 568.7L175 465.4L71.7 444.5C63.9 442.9 57.3 437.5 54.3 430.2C51.3 422.9 52.1 414.4 56.5 407.7L114.7 320L56.5 232.2C52.1 225.5 51.3 217.1 54.3 209.7C57.3 202.3 63.9 196.9 71.7 195.4L175 174.6L195.9 71.3C197.5 63.5 202.9 56.9 210.2 53.9zM239.6 320C239.6 275.6 275.6 239.6 320 239.6C364.4 239.6 400.4 275.6 400.4 320C400.4 364.4 364.4 400.4 320 400.4C275.6 400.4 239.6 364.4 239.6 320zM448.4 320C448.4 249.1 390.9 191.6 320 191.6C249.1 191.6 191.6 249.1 191.6 320C191.6 390.9 249.1 448.4 320 448.4C390.9 448.4 448.4 390.9 448.4 320z" />
              </svg>
              Modo claro
            </li>
            <li
              onClick={changeMode}
              id="system"
              className={`li-darkmode transition-all ease-in-out  ${
                mode === "system"
                  ? "bg-neutral-300 dark:bg-neutral-700"
                  : "opacity-100"
              }`}
            >
              <svg
                className="svg-darkmode size-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
              >
                <path d="M128 96C92.7 96 64 124.7 64 160L64 416C64 451.3 92.7 480 128 480L272 480L256 528L184 528C170.7 528 160 538.7 160 552C160 565.3 170.7 576 184 576L456 576C469.3 576 480 565.3 480 552C480 538.7 469.3 528 456 528L384 528L368 480L512 480C547.3 480 576 451.3 576 416L576 160C576 124.7 547.3 96 512 96L128 96zM160 160L480 160C497.7 160 512 174.3 512 192L512 352C512 369.7 497.7 384 480 384L160 384C142.3 384 128 369.7 128 352L128 192C128 174.3 142.3 160 160 160z" />
              </svg>
              Valor del sistema
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default BtnDarkMode;
