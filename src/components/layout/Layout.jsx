import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <>
      <Header />

      <main className="flex justify-center">
        <div className="max-w-[1440px] w-full pr-10 pl-10">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
