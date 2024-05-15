import SearchBar from "../components/SearchBar";

const Home = () => {
  return (
    <div className="w-full h-[calc(100vh-100px)] flex">
      <div className="flex-[3]">
        <h1 className="text-xl">Find Real Estate & Own Your Dream Home</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non vero
          aliquam minus laboriosam temporibus debitis officiis commodi
          doloribus, optio cum atque corrupti iusto itaque, quibusdam sapiente
          nesciunt quo blanditiis iure.
        </p>
        <SearchBar />
        <div className="">
            
        </div>
      </div>
      <div className="flex-[2] relative flex items-center lg:bg-[#fcf5f3]">
        <img src="/bg.png" alt="" className="w-full absolute right-0" />
      </div>
    </div>
  );
};

export default Home;
