const Filter = () => {
  return (
    <div className="flex flex-col gap-y-[10px]">
      <h1 className="text-xl font-medium">
        Search Results for <b>London</b>
      </h1>
      {/* Top */}
      <div className="">
        <div className="flex flex-col gap-y-[2px]">
          <label className="text-xs" htmlFor="city">
            Location
          </label>
          <input
            className="w-full p-[10px] text-sm border-[1px] border-[#e0e0e0] rounded"
            type="text"
            id="city"
            name="city"
            placeholder="City Location"
          />
        </div>
      </div>
      {/* Bottom */}
      <div className="flex justify-between gap-x-5">
        <div className="flex flex-col gap-y-[2px]">
          <label className="text-xs" htmlFor="type">
            Type
          </label>
          <select
            className="w-[110px] p-[10px] text-sm border-[1px] border-[#e0e0e0] rounded"
            name="type"
            id="type"
          >
            <option value="">Any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>
        <div className="flex flex-col gap-y-[2px]">
          <label className="text-xs" htmlFor="property">
            Property
          </label>
          <select
            className="w-[110px] p-[10px] text-sm border-[1px] border-[#e0e0e0] rounded"
            name="property"
            id="property"
          >
            <option value="">Any</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="condo">Condo</option>
            <option value="land">Land</option>
          </select>
        </div>
        <div className="flex flex-col gap-y-[2px]">
          <label className="text-xs" htmlFor="minPrice">
            Min Price
          </label>
          <input
            className="w-[110px] p-[10px] text-sm border-[1px] border-[#e0e0e0] rounded"
            type="number"
            id="minPrice"
            name="minPrice"
            placeholder="Any"
          />
        </div>
        <div className="flex flex-col gap-y-[2px]">
          <label className="text-xs" htmlFor="maxPrice">
            Max Price
          </label>
          <input
            className="w-[110px] p-[10px] text-sm border-[1px] border-[#e0e0e0] rounded"
            type="number"
            id="maxPrice"
            name="maxPrice"
            placeholder="Any"
          />
        </div>
        <div className="flex flex-col gap-y-[2px]">
          <label className="text-xs" htmlFor="bedroom">
            Bedroom
          </label>
          <input
            className="w-[110px] p-[10px] text-sm border-[1px] border-[#e0e0e0] rounded"
            type="number"
            id="bedroom"
            name="bedroom"
            placeholder="Any"
          />
        </div>
        <button className="bg-black">
          <img className="w-6 h-6" src="/search.png" alt="Search Icon" />
        </button>
      </div>
    </div>
  );
};

export default Filter;
