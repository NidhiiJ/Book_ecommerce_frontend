import Book from "../Interfaces/BookInterface";
// import books from "./Books";

interface FilterSection {
  handleCategoryChange: any;
  books: Book[]|[]
}

const FilterSection: React.FC<FilterSection> = ({ handleCategoryChange, books }) => {
  // creating a unique filters array
  const filters = [...new Set(books.flatMap(book => book.volumeInfo.categories))];
  return (
    <div className="h-vh w-full">
      {/* section for filters on display > md */}
      <section id="large-filters" className="hidden md:block">
        <label
          htmlFor="category"
          className="hidden md:block text-lg font-medium mb-5"
        >
          Filter by Category:
        </label>
        <div className="ml-5 flex flex-col gap-2">
        <label className="flex">
            <input
              type="radio"
              name="category"
              value='All'
              onChange={handleCategoryChange}
              className="mr-2"
            />
            All
          </label>
          {filters.map((x,i)=>
          // checking if x is empty string
          (x && x.replace(/\s/,'').length !== 0 ?
            <label key={i} className="flex">
            <input
              type="radio"
              name="category"
              value={x}
              onChange={handleCategoryChange}
              className="mr-2"
            />
            {x}
          </label> :undefined
          ))}
        </div>
      </section>
      {/* dropdown filter selection */}
      <section id="small-filters" className="md:hidden">
        <label htmlFor="category" className="text-sm text-slate-500"> Filter by category:</label><br />
        <select
          id="category"
          onChange={handleCategoryChange}
          className="w-[40vw] md:w-full border-b-2"
        >
           <option value='All'>All</option>
          {filters.map((x,i)=>
          x && x.replace(/\s/,'').length !== 0 ?
          <option key={i} value={x}>{x}</option>
          : undefined
          )}
        </select>
      </section>
    </div>
  );
};

export default FilterSection;
