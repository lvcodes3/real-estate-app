import { useState } from "react";

const types = ["buy", "rent"];

type QueryType = {
  type: string;
  location: string;
  minPrice: number;
  maxPrice: number;
};

const SearchBar = () => {
  const [query, setQuery] = useState<QueryType>({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (val: string) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };

  return (
    <div>
      <div className="text-sm">
        {types.map((type, index) => (
          <button
            key={index}
            className={`px-9 py-4 cursor-pointer border-[1px] border-[#999] border-b-0 capitalize ${
              query.type === type
                ? "text-white bg-black"
                : "text-black bg-white"
            } first:rounded-tl-lg first:border-r-0 last:rounded-tr-lg last:border-l-0`}
            onClick={() => switchType(type)}
          >
            {type}
          </button>
        ))}
      </div>
      <form className="h-16 flex flex-col md:flex-row md:justify-between gap-x-1 border-[1px] md:border-[#999]">
        <input
          className="px-0 py-2 w-auto md:w-[240px] lg:w-[200px]"
          type="text"
          name="location"
          placeholder="City Location"
        />
        <input
          className="px-0 py-2 w-auto md:w-[180px] lg:w-[140px] xl:w-[200px]"
          type="number"
          name="minPrice"
          min={0}
          max={10000000}
          placeholder="Min Price"
        />
        <input
          className="px-0 py-2 w-auto md:w-[180px] lg:w-[140px] xl:w-[200px]"
          type="number"
          name="maxPrice"
          min={0}
          max={10000000}
          placeholder="Max Price"
        />
        <button className="flex-1 py-2 md:py-0 flex justify-center items-center bg-[#fece51]">
          <img className="w-6 h-6" src="/search.png" alt="Search Icon" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
