import { listData } from "../lib/dummydata";

const List = () => {
  const data = listData;

  return (
    <div className="h-full flex">
      {/* List Container */}
      <div className="flex-[3] pr-0 lg:pr-[25px]">List</div>
      {/* Map Container */}
      <div className="flex-[2] bg-[#fcf5f3]">Map</div>
    </div>
  );
};

export default List;
