const apiKey = import.meta.env.VITE_API_KEY;

async function googleBooks(book, setBooks) {
  try {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${book}&key=${apiKey}`
    );

    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const data = await response.json();
    if (!data) return;

    const books = data.items;

    setBooks(books);
    console.log(books);
  } catch (e) {
    console.log(e);
  }
}

export default googleBooks;
