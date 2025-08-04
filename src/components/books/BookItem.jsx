import BookFavBtn from "./BookFavBtn.jsx";

const BookItem = () => {
  return (
    <>
      <li className="bg-white w-fit list-none flex flex-col gap-2 items-center p-6 rounded-lg shadow-lg max-w-[228.775px] transition-transform cursor-pointer ease-in-out hover:scale-105">
        <img
          className="rounded-lg object-fill w-full h-[279.625px]"
          src="/src/assets/image/noBook.png"
          alt="book-no-found"
        />
        <article className="flex flex-col gap-2">
          <h3 className="font-semibold text-2xl max-h-16 overflow-auto">
            El viejo y el mar Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Nisi alias odio reprehenderit atque, neque dicta culpa veniam
            quidem provident quia, fugiat ducimus soluta suscipit quasi ut ipsam
            consequuntur repellat quibusdam!
          </h3>
          <h4 className="max-h-16 overflow-auto">Ernest Hemingway</h4>
        </article>
          <BookFavBtn />
      </li>
      <li className="bg-white w-fit list-none flex flex-col gap-2 items-center p-6 rounded-lg shadow-lg max-w-[228.775px] transition-transform cursor-pointer ease-in-out hover:scale-105">
        <img
          className="rounded-lg object-fill w-full h-[279.625px]"
          src="http://books.google.com/books/content?id=FlDehedEjV4C&printsec=frontcover&img=1&zoom=1&source=gbs_api"
          alt="book-no-found"
        />
        <article className="flex flex-col gap-2">
          <h3 className="font-semibold text-2xl max-h-16 overflow-auto">
            El viejo y el mar Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Nisi alias odio reprehenderit atque, neque dicta culpa veniam
            quidem provident quia, fugiat ducimus soluta suscipit quasi ut ipsam
            consequuntur repellat quibusdam!
          </h3>
          <h4 className="max-h-16 overflow-auto">Ernest Hemingway</h4>
        </article>
          <BookFavBtn />
      </li>
    </>
  );
};
export default BookItem;
