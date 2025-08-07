import Layout from "./components/layout/Layout";
import Home from "./components/pages/Home.jsx";
import Favorites from "./components/pages/Favorites.jsx";
import AboutUs from "./components/pages/AboutUs.jsx";
import BookInfo from "./components/books/BookInfo.jsx";

import { BrowserRouter, Route, Routes } from "react-router";

import useBooks from "./hooks/useBooks.js";

import { ContextBooks } from "./context/contextBooks.js";

import useStorage from "./hooks/useStorage.js";

import ScrollToTop from "./components/common/ScrollToTop.jsx";

function App() {
  const {
    bookName,
    setBookName,
    books,
    setBooks,
    globalBookInfo,
    setGlobalBookInfo,
    stateRequest,
    setStateRequest,
  } = useBooks();

  const { favBooks, setFavBooks, mode, setMode } = useStorage();

  return (
    <>
      <ContextBooks.Provider
        value={{
          bookName,
          setBookName,
          books,
          setBooks,
          favBooks,
          setFavBooks,
          globalBookInfo,
          setGlobalBookInfo,
          stateRequest,
          setStateRequest,
          mode,
          setMode,
        }}
      >
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />

              <Route path="favorites" element={<Favorites />} />

              <Route path="favorites/book-info" element={<BookInfo />} />
              <Route path="about-us" element={<AboutUs />} />
              <Route path="book-info" element={<BookInfo />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ContextBooks.Provider>
    </>
  );
}

export default App;
