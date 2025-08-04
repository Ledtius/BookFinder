const apiKey = import.meta.env.VITE_API_KEY;

async function googleBooks(bookName) {
  try {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${bookName}:keyes&key=${apiKey}`
    );
  } catch {
    console.log(e);
  }
}

export default googleBooks;
