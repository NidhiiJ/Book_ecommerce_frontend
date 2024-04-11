import { useContext, useEffect, useState } from "react";
import Book from "../Interfaces/BookInterface";
import { Link, useParams } from "react-router-dom";
import Rating from "../components/Rating";
import BookCard from "../components/BookCard";
import BooksContextType from "../Interfaces/BooksContextType";
import { BooksContext } from "../context/BooksContext";

const BookDetails = () => {
  const{books} = useContext(BooksContext) as BooksContextType
  const [showFullDescription, setShowFullDescription] = useState(false);
  // for description
  const [showLess, setShowLess] = useState(false);
  const [book, setBook] = useState<Book>();
  // extract id param from router
  let { id } = useParams();

  // set book on mount
  useEffect(() => {
    const findBook = id ? books.find((x) => x.id === +id) : undefined;
    if (findBook) {
      setBook(findBook);
    }
  }, [id]);

  // set description based on length
  useEffect(() => {
    book?.volumeInfo.description &&
    book?.volumeInfo.description.split(" ").length > 30
      ? setShowFullDescription(true)
      : undefined;
  }, []);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
    setShowLess(!showLess);
  };

  const linkClasses = " text-[#48bffa]";

  // Books list for suggested items
  const categories = book?.volumeInfo.categories;
  const filteredArray = books
    .filter((x) =>
      x.volumeInfo.categories?.includes(categories ? categories[0] : "none")
    )
    .filter((x) => x.id !== book?.id);
    // only show 7 suggested items
  const suggestedArray =
    filteredArray.length > 7 ? filteredArray.slice(0, 7) : filteredArray;

  return (
    <div className=" mt-5 mx-2 md:mx-10">
      <div className="text-lg font-semibold mb-8 md:mb-14">
        <Link to="/">Home</Link>
        <span> / </span>
        <span className=" text-slate-500">{book?.volumeInfo.title}</span>
      </div>
      <div className="grid md:grid-cols-2 gap-4 lg:grid-cols-3">
        <section
          id="book-image"
          className="place-self-center md:place-self-start mb-3 md:mb-0"
        >
          <img
            src={book?.volumeInfo.imageLinks?.thumbnail}
            alt="bookImage"
            className="h-[46vh] sm:h-[54vh] md:h-[60vh] object-cover"
          />
        </section>
        <section
          id="book-details"
          className="lg:col-span-2 flex flex-col gap-5"
        >
          <div id="book-title">
            <h1>{book?.volumeInfo.title}</h1>
            <h2>{book?.volumeInfo.subtitle}</h2>
            <p>By {book?.volumeInfo.authors.join(", ")}</p>
          </div>
          <div id="book-ratings">
            <Rating value={book?.volumeInfo.averageRating} />

            <p>
              Published on{" "}
              {book?.volumeInfo.publishedDate || "'date not given'"}
            </p>
          </div>
          <div id="book-price" className="text-xl font-medium">
            {book?.saleInfo.listPrice
              ? `${book.saleInfo.listPrice?.currencyCode} ${book.saleInfo.listPrice?.amount}`
              : "Price not available"}
          </div>
          <div id="book-description">
            Book Description: <br />
            {showFullDescription
              ? book?.volumeInfo.description
              : `${book?.volumeInfo.description
                  .split(" ")
                  .slice(0, 30)
                  .join(" ")}... `}
            {!showFullDescription && book?.volumeInfo.description && (
              <button className={linkClasses} onClick={toggleDescription}>
                View More
              </button>
            )}
            <br />
            {/* show less button */}
            {showLess && book?.volumeInfo.description && (
              <button className={linkClasses} onClick={toggleDescription}>
                View less
              </button>
            )}
          </div>
          <div id="book-buy">
            {book?.saleInfo.buyLink ? (
              <button className="hover:bg-primary shadow-sm bg-slate-300 rounded-md px-2 py-1 font-semibold text-[#232626] w-full md:w-[20%]">
                <a href={book?.saleInfo.buyLink} target="_blank">
                  Buy Now
                </a>
              </button>
            ) : (
              <button
                className="hover:bg-primary shadow-sm bg-slate-300 rounded-md px-2 py-1 font-semibold text-[#232626]"
                onClick={() => alert("Buy link not available")}
              >
                Buy Now
              </button>
            )}
          </div>
          <hr />
          <div id="book-add-info">
            <h3>Additional information -</h3>
            <p>language : {book?.volumeInfo.language}</p>
            <p>No. of pages : {book?.volumeInfo.pageCount}</p>
          </div>
        </section>
      </div>
      <section id="similar-books" className="mt-16">
        <h1>Similar Reads</h1>

        <div className="flex flex-nowrap overflow-x-auto gap-4">
          {suggestedArray.length > 0 ? (
            suggestedArray.map((book, index) => (
              <div
                key={index}
                className="min-w-[80vw] md:min-w-[43vw] lg:min-w-[20vw]"
              >
                <BookCard book={book} />
              </div>
            ))
          ) : (
            <div>No similar items available</div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BookDetails;
