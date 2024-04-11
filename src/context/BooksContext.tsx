import * as React from 'react';
import Book from '../Interfaces/BookInterface';
import { useEffect } from 'react';
import BooksContextType from '../Interfaces/BooksContextType';


export const BooksContext = React.createContext<BooksContextType | null>(null);

const BooksProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [books, setBooks] = React.useState<Book[]>([])

    const fetchData = async () => {
        try {
          const response = await fetch(
            "https://d1krvzwx5oquy1.cloudfront.net/books.json"
          );
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
          const data = await response.json();
          setBooks(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      useEffect(() => {
        fetchData();
      }, []);

    return(
        <BooksContext.Provider value={{books, setBooks}}>
        {children}
        </BooksContext.Provider>
    )
}

export default BooksProvider