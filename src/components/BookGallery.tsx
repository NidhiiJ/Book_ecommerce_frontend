import BookCard from './BookCard'
import Book from '../Interfaces/BookInterface'

interface BookGallery{
  books: Book[]
}

const BookGallery:React.FC<BookGallery> = ({books}) => {
  
  return (
    
    <div className='grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4'>
        {books.map((book,index)=> 
            <BookCard key={index} book={book}/>
       )}
    </div>
    
  )
}

export default BookGallery