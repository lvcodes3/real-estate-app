import SearchBar from "../components/SearchBar";

const Home = () => {
  return (
    <div className="w-full h-[calc(100vh-100px)] flex">
      <div className="flex-[3] pr-0 lg:pr-[25px] flex flex-col justify-start md:justify-center gap-y-12">
        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold">
          Find Real Estate & Own Your Dream Home
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non vero
          aliquam minus laboriosam temporibus debitis officiis commodi
          doloribus, optio cum atque corrupti iusto itaque, quibusdam sapiente
          nesciunt quo blanditiis iure.
        </p>
        <SearchBar />
        <div className="hidden md:flex md:justify-between">
          <div>
            <h1 className="text-xl font-bold lg:text-2xl xl:text-3xl">16+</h1>
            <h2 className="text-md font-medium xl:text-lg">
              Years of Experience
            </h2>
          </div>
          <div>
            <h1 className="text-xl font-bold lg:text-2xl xl:text-3xl">200</h1>
            <h2 className="text-md font-medium xl:text-lg">Awards Gained</h2>
          </div>
          <div>
            <h1 className="text-xl font-bold lg:text-2xl xl:text-3xl">
              2,000+
            </h1>
            <h2 className="text-md font-medium xl:text-lg">Properties Ready</h2>
          </div>
        </div>
      </div>
      <div className="flex-[2] relative hidden lg:flex lg:items-center lg:bg-[#fcf5f3]">
        <img src="/bg.png" alt="" className="w-full absolute right-0" />
      </div>
    </div>
  );
};

export default Home;
