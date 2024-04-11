// import { useEffect } from "react"
import Book from "../Interfaces/BookInterface";
   
const fetchData= async ()=> {
    try {
        const response = await fetch('https://d1krvzwx5oquy1.cloudfront.net/books.json');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        const books = data;
        return books
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };



const books:Book[] = await fetchData()

export default books