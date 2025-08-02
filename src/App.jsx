import Layout from "./components/layout/Layout";
import Home from "./components/pages/Home.jsx";
import Favorites from "./components/pages/Favorites.jsx";
import AboutUs from "./components/pages/AboutUs.jsx";

import { BrowserRouter, Route, Routes } from "react-router";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="about-us" element={<AboutUs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
