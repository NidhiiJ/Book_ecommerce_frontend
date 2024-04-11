import "./App.css";
import HomePage from "./pages/HomePage";
import BookDetails from "./pages/BookDetailsPage.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BooksProvider from "./context/BooksContext.tsx";

function App() {

  return (
    <BooksProvider>
    <Router>
      <Routes>
        <Route index path="/" element={<HomePage  />} />
        <Route path="/books/:id" element={<BookDetails  />} />
      </Routes>
    </Router>
    </BooksProvider>
  );
}

export default App;
