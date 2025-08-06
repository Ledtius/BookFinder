const apiKey = import.meta.env.VITE_API_KEY;

async function googleBooks(book, setBooks, stateRequest, setStateRequest) {
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
      return;
    }

    setBooks(books);
    setTimeout(() => {
      setStateRequest(() => false);
    }, 1000);
  } catch (e) {
    console.log(e);
  }
}

export default googleBooks;
