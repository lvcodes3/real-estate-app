import Card from "../components/Card";
import Filter from "../components/Filter";
import { listData } from "../lib/dummydata";

const List = () => {
  const data = listData;

  return (
    <div className="h-full flex">
      {/* List Container */}
      <div className="h-full flex-[3]">
        <div className="h-full pr-0 lg:pr-[25px] pb-[50px] flex flex-col gap-y-[50px] overflow-y-scroll">
          <Filter />
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      {/* Map Container */}
      <div className="h-full flex-[2] bg-[#fcf5f3]">Map</div>
    </div>
  );
};

export default List;
