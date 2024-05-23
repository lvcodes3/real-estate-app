import { Link } from "react-router-dom";

interface Item {
  id: number;
  title: string;
  img: string;
  bedroom: number;
  bathroom: number;
  price: number;
  address: string;
  latitude: number;
  longitude: number;
}

interface CardProps {
  item: Item;
}

const Card = ({ item }: CardProps) => {
  return (
    <div className="flex gap-x-5">
      {/* Image Container */}
      <Link className="flex-[2] h-[200px]" to={`/${item.id}`}>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={item.img}
          alt={item.title}
        />
      </Link>
      {/* Text Container */}
      <div className="flex-[3] flex flex-col justify-between gap-y-[10px]">
        <h2 className="text-xl text-[#444] font-semibold transition-all hover:text-black hover:scale-105">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="text-sm flex items-center gap-x-[5px] text-[#888]">
          <img className="w-4 h-4" src="/pin.png" alt="Pin Icon" />
          <span className="">{item.address}</span>
        </p>
        <p className="w-max p-[5px] text-xl font-light rounded-md bg-[rgba(254,205,81,0.438)]">
          $ {item.price}
        </p>
        <div className="flex justify-between gap-x-[10px]">
          <div className="flex gap-x-[200px] text-sm">
            <div className="p-[5px] flex items-center gap-x-[5px] bg-[#f5f5f5] rounded-md">
              <img className="w-4 h-4" src="/bed.png" alt="Bed Icon" />
              <span>{item.bedroom} {item.bedroom > 1 ? "Bedrooms" : "Bedroom"}</span>
            </div>
            <div className="p-[5px] flex items-center gap-x-[5px] bg-[#f5f5f5] rounded-md">
              <img className="w-4 h-4" src="/bath.png" alt="Bath Icon" />
              <span>{item.bathroom} {item.bathroom > 1 ? "Bathrooms" : "Bathroom"}</span>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="border-[1px] border-[#999] px-[5px] py-[2px] rounded-md cursor-pointer flex justify-center items-center hover:bg">
              <img className="w-4 h-4" src="/save.png" alt="Save Icon" />
            </div>
            <div className="border-[1px] border-[#999] px-[5px] py-[2px] rounded-md cursor-pointer flex justify-center items-center">
              <img className="w-4 h-4" src="/chat.png" alt="Chat Icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
