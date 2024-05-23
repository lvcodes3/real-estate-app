import Card from "../components/Card";
import Filter from "../components/Filter";
import { listData } from "../lib/dummydata";

const List = () => {
  const data = listData;

  return (
    <div className="h-full flex">
      {/* List Container */}
      <div className="flex-[3] pr-0 lg:pr-[25px] flex flex-col gap-y-[50px] overflow-y-scroll">
        <Filter />
        {data.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
      {/* Map Container */}
      <div className="flex-[2] bg-[#fcf5f3]">Map</div>
    </div>
  );
};

export default List;
