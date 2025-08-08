import Hero from "../common/Hero.jsx";
import Form from "../common/Form.jsx";
import BookList from "../books/BookList.jsx";
import { Link } from "react-router";
const Home = () => {
  return (
    <>
      <section className="flex items-center flex-col mt-30">
        <Hero />
        <Form />
        <div className="flex flex-col items-center justify-center">
          <BookList />
        </div>
      </section>
    </>
  );
};
export default Home;
