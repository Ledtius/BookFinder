import Hero from "../common/Hero.jsx";
import Form from "../common/Form.jsx";
import BookList from "../books/BookList.jsx";
import { Link } from "react-router";
const Home = () => {
  return (
    <>
      <section className="flex items-center flex-col">
        <Hero />
        <Form />
        <BookList />
        <Link to="book-info">
          <button>ssss</button>
        </Link>
      </section>
    </>
  );
};
export default Home;
