// const apiKey = import.meta.env.VITE_API_KEY;
const apiKey = "AIzaSyCZwslPLzyXjL4YNV8-vuAYU65NB_HM7XY";

async function googleBooks(book, setBooks, setStateRequest, setStateError) {
  try {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${book}&key=${apiKey}`
    );

    setStateRequest(() => true);

    console.log(response);

    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const data = await response.json();
    console.log(data);
    if (!data) return;

    const books = data?.items;
    console.log(books);

    if (!books) {
      setBooks([]);
      setStateRequest(false);
      throw new Error("undefined value in books");
    }
    setStateError(false);

    setBooks(books);
    setTimeout(() => {
      setStateRequest(() => false);
    }, 1000);
  } catch (e) {
    setStateError(true);
    console.error(e);
  }
}

export default googleBooks;
