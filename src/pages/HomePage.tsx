import { ChangeEvent, useState } from "react";
import BookGallery from "../components/BookGallery";
import FilterSection from "../components/FilterSection";
import books from "../components/Books";

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  // console.log(selectedCategory)

  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };
  const filteredBooks = selectedCategory === 'All' ? books : books.filter(book => book.volumeInfo.categories?.includes(selectedCategory))

  return (
    <div className="flex flex-col md:flex-row gap-5">
      <section className="flex flex-row justify-between items-center md:block md:min-w-[20vw] md:max-w-[20vw] md:mt-32">
        <h1 className="md:hidden">Books</h1>
        <div className="md:ml-5 xl:ml-8">
        <FilterSection
          handleCategoryChange={handleCategoryChange}
        />
        </div>
      </section>
      <section>
        <h1 className="hidden md:block pb-5">Listed Books</h1>
        <BookGallery books={filteredBooks} />
      </section>
    </div>
  );
};

export default HomePage;
