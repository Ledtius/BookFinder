import { Link } from "react-router";

const Footer = () => {
  return (
    <>
      <footer className="min-w-80 flex justify-center mt-30">
        <div className="flex flex-col items-center max-w-[1440px]">
          <figure className="flex items-center transition transform ease-in scale-120 ">
            <Link to="/" className="flex items-center">
              <svg
                className="size-10 fill-rose-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
              >
                <path d="M480 576L192 576C139 576 96 533 96 480L96 160C96 107 139 64 192 64L496 64C522.5 64 544 85.5 544 112L544 400C544 420.9 530.6 438.7 512 445.3L512 512C529.7 512 544 526.3 544 544C544 561.7 529.7 576 512 576L480 576zM192 448C174.3 448 160 462.3 160 480C160 497.7 174.3 512 192 512L448 512L448 448L192 448zM224 216C224 229.3 234.7 240 248 240L424 240C437.3 240 448 229.3 448 216C448 202.7 437.3 192 424 192L248 192C234.7 192 224 202.7 224 216zM248 288C234.7 288 224 298.7 224 312C224 325.3 234.7 336 248 336L424 336C437.3 336 448 325.3 448 312C448 298.7 437.3 288 424 288L248 288z" />
              </svg>
              <h2 className="font-bold">BookFinder</h2>
            </Link>
          </figure>
          <nav className="flex flex-col justify-center items-center gap-8   p-5  w-full bg-white">
            <ul className="flex items-center flex-col gap-4 text-lg">
              <li className="hover-nav-link">
                <Link to={"/"}>Inicio</Link>
              </li>
              <li className="hover-nav-link">
                <Link to={"favorites"}>Favoritos</Link>
              </li>
              <li className="hover-nav-link">
                <Link to={"about-us"}>Acerca de nosotros</Link>
              </li>
            </ul>
            <section className="flex items-center gap-7">
              <a
                target="_blank"
                href="https://github.com/Ledtius/BookFinder"
                className="group footer-btn"
              >
                <svg
                  className="footer-btn-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M202.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM496 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3l48.2 0c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z" />
                </svg>
              </a>
              <a
                target="_blank"
                href="https://cjdevia.netlify.app/"
                className="footer-btn"
              >
                <svg
                  className="footer-btn-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path d="M360.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm64.6 136.1c-12.5 12.5-12.5 32.8 0 45.3l73.4 73.4-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0zm-274.7 0c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 150.6 182.6c12.5-12.5 12.5-32.8 0-45.3z" />
                </svg>
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/caletdevia/"
                className="footer-btn"
              >
                <svg
                  className="footer-btn-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                >
                  <path d="M196.3 512L103.4 512L103.4 212.9L196.3 212.9L196.3 512zM149.8 172.1C120.1 172.1 96 147.5 96 117.8C96 103.5 101.7 89.9 111.8 79.8C121.9 69.7 135.6 64 149.8 64C164 64 177.7 69.7 187.8 79.8C197.9 89.9 203.6 103.6 203.6 117.8C203.6 147.5 179.5 172.1 149.8 172.1zM543.9 512L451.2 512L451.2 366.4C451.2 331.7 450.5 287.2 402.9 287.2C354.6 287.2 347.2 324.9 347.2 363.9L347.2 512L254.4 512L254.4 212.9L343.5 212.9L343.5 253.7L344.8 253.7C357.2 230.2 387.5 205.4 432.7 205.4C526.7 205.4 544 267.3 544 347.7L544 512L543.9 512z" />
                </svg>
              </a>
            </section>
          </nav>
        </div>
      </footer>
    </>
  );
};
export default Footer;
