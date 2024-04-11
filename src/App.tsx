import "./App.css";
import HomePage from "./pages/HomePage";
import BookDetails from "./pages/BookDetailsPage.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Book from "./Interfaces/BookInterface.ts";
import { useEffect, useState } from "react";

function App() {
  const [books, setBooks] = useState<Book[] | []>([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://d1krvzwx5oquy1.cloudfront.net/books.json"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      const books = data;
      setBooks(books);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  // console.log(books);

  return (
    <Router>
      <Routes>
        <Route index path="/" element={<HomePage books={books} />} />
        <Route path="/books/:id" element={<BookDetails books={books} />} />
      </Routes>
    </Router>
  );
}

export default App;
