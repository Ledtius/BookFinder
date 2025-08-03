import Hero from "../common/Hero.jsx";
import Form from "../common/Form.jsx";
import BookList from "../books/BookList.jsx";
const Home = () => {
  return (
    <>
      <section className="flex items-center flex-col">
        <Hero />
        <Form />
        <BookList />
      </section>
    </>
  );
};
export default Home;
