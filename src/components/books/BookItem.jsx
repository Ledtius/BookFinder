import { Link } from "react-router";
import BookFavBtn from "./BookFavBtn.jsx";

const BookItem = ({ bookInfo = {} }) => {
  const {
    id,
    title,
    authors,
    description,
    publisher,
    publishedDate,
    previewLink,
    thumbnail,
    smallThumbnail,
  } = bookInfo;

  return (
    <>
      <Link to="book-info" className="flex flex-col gap-4">
        <img
          className="rounded-lg object-fill w-[180.78px] h-[279.625px] "
          src={thumbnail}
          alt="book-image"
        />
        <article className="flex flex-col gap-2 min-h-[95.98px]">
          <h3 className="font-semibold text-2xl  max-h-16 overflow-auto min-h-8 w-[180px]">
            {title}
          </h3>
          <h4 className="max-h-9 overflow-auto ">{authors}</h4>
        </article>
      </Link>

      <BookFavBtn bookInfo={bookInfo} />
      {/* <li className="bg-white w-fit list-none flex flex-col gap-2 items-center p-6 rounded-lg shadow-lg max-w-[228.775px] transition-transform cursor-pointer ease-in-out hover:scale-105">
        <img
          className="rounded-lg object-fill w-full h-[279.625px]"
          src={thumbnail}
          alt="book-img"
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
      </li> */}
    </>
  );
};
export default BookItem;
