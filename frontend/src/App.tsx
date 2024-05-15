import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="h-screen max-w-[640px] bg-red-200 sm:bg-red-200 sm:max-w-[640px] md:bg-blue-200 md:max-w-[768px] lg:bg-purple-200 lg:max-w-[1024px] xl:bg-white xl:max-w-[1280px] ml-auto mr-auto px-5">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;