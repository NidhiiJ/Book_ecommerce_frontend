import books from "./Books";

interface FilterSection {
  handleCategoryChange: any;
}

const FilterSection: React.FC<FilterSection> = ({ handleCategoryChange }) => {
  // const filters = ['All','Computers', 'Computer programs','Business & Economics' ]
  const filters = [...new Set(books.flatMap(book => book.volumeInfo.categories))];
  return (
    <div className="h-vh w-full">
      <section id="large-filters" className="hidden md:block">
        <label
          htmlFor="category"
          className="hidden md:block text-lg font-medium mb-5"
        >
          Filter by Category:
        </label>
        <div className="ml-5 flex flex-col gap-2">
          {filters.map((x,i)=>
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
      <section id="small-filters" className="md:hidden">
        <label htmlFor="category" className="text-sm text-slate-500"> Filter by category:</label><br />
        <select
          id="category"
          onChange={handleCategoryChange}
          className="w-[40vw] md:w-full border-b-2"
        >
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
