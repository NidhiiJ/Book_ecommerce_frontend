import './App.css'
import HomePage from './pages/HomePage'
import BookDetails from './pages/BookDetailsPage.tsx';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  return (
    <Router>
    <Routes>
      <Route index path="/" element={<HomePage />} />
      <Route path="/books/:id" element={<BookDetails />} />
    </Routes>
  </Router>
   
  )
}

export default App
