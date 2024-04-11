import { ChangeEvent, useContext, useEffect, useState } from "react";
import BookGallery from "../components/BookGallery";
import FilterSection from "../components/FilterSection";
import { BooksContext } from "../context/BooksContext";
import BooksContextType from "../Interfaces/BooksContextType";

const HomePage = () => {
  const{books} = useContext(BooksContext) as BooksContextType
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [resultsLength, setResultsLength] = useState<number>(0);
  
  const filteredBooks = selectedCategory === 'All' ? books : books.filter(book => book.volumeInfo.categories?.includes(selectedCategory))

  useEffect(() => {
    setResultsLength(books.length);
  }, [books]);

  
  useEffect(() => {
    setResultsLength(filteredBooks.length)
  }, [selectedCategory])
  
  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div className="flex flex-col md:flex-row gap-5">
      <section className="flex flex-row justify-between items-center md:block md:min-w-[20vw] md:max-w-[20vw] md:mt-12">
        <h1 className="md:hidden text-[1.4em]">Books({resultsLength})</h1>
        <div className="md:ml-2 xl:ml-8 xl:pr-8 md:pr-4 border-r-2">
        <FilterSection
          handleCategoryChange={handleCategoryChange}
          selectedCategory={selectedCategory}
        />
        </div>
      </section>
      <section>
        <h1 className="hidden md:block pb-5 ">Listed Books({resultsLength})</h1>
        <BookGallery books={filteredBooks} />
      </section>
    </div>
  );
};

export default HomePage;
