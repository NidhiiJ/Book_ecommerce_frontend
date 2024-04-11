import React from "react";
import Book from "./../Interfaces/BookInterface";
import { Link } from "react-router-dom";
import Rating from "./Rating";

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <div
      id={JSON.stringify(book.id)}
      className="w-full h-full grid grid-cols-4 sm:flex flex-col justify-between gap-2 p-3 bg-slate-100 rounded-md text-black"
    >
      <div id="card-image">
        <Link to={`/books/${book.id}`}>
          <img
            className="h-[100px] w-[80px] object-fill sm:h-[160px] sm:w-[130px] md:h-[200px] md:w-[160px] bg-slate-200"
            src={
              book.volumeInfo.imageLinks &&
              book.volumeInfo.imageLinks.smallThumbnail
            }
            alt="Bookcover"
          />
        </Link>
      </div>
      <div id="card-content" className="col-span-2">
        <Link to={`/books/${book.id}`}>
          <h2 className="hover:underline text-sm md:text-lg font-medium">{book.volumeInfo.title}</h2>
        </Link>
        <p className="text-sm text-slate-500">
          By&nbsp;
          {book.volumeInfo.authors.length > 1
            ? `${book.volumeInfo.authors[0]} + ${
                book.volumeInfo.authors.length - 1
              } `
            : book.volumeInfo.authors}
        </p>
        <p className="text-md hidden sm:block">Category: {book.volumeInfo.categories}</p>
        {book.volumeInfo.averageRating ? (
          <Rating value={+book.volumeInfo.averageRating} />
        ) : undefined}
        <div id='price' className="">
          {book.saleInfo.listPrice ? `${book.saleInfo.listPrice?.currencyCode} ${book.saleInfo.listPrice?.amount}` : 'Price not available'}
        </div>
      </div>
      
      <div id="card-buttons" className="sm:mt-auto flex flex-col sm:flex-row gap-2 items-center">
        {book.saleInfo.buyLink ? (
          <button className="hover:bg-primary shadow-sm bg-slate-300 rounded-md px-2 py-1 font-semibold text-[#232626]">
            <a href={book.saleInfo.buyLink} target="_blank">
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
        <Link to={`/books/${book.id}`}>
          <button className="hover:underline text-[0.85em] sm:text-small">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
