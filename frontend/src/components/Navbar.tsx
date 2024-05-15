import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <nav className="w-full h-[100px] flex justify-between items-center">
      {/* LEFT */}
      <div className="flex-[3] flex items-center gap-x-[50px]">
        <a
          href="/"
          className="flex items-center gap-x-[10px] transition-all hover:scale-105"
        >
          <img src="/logo.png" alt="Real Estate" className="w-[28px]" />
          <span className="block sm:block md:hidden lg:block text-lg font-bold">
            Real Estate
          </span>
        </a>
        <a
          href="/"
          className="hidden sm:hidden md:block transition-all hover:scale-105"
        >
          Home
        </a>
        <a
          href="/about"
          className="hidden sm:hidden md:block transition-all hover:scale-105"
        >
          About
        </a>
        <a
          href="/contact"
          className="hidden sm:hidden md:block transition-all hover:scale-105"
        >
          Contact
        </a>
        <a
          href="/agents"
          className="hidden sm:hidden md:block transition-all hover:scale-105"
        >
          Agents
        </a>
      </div>
      {/* RIGHT */}
      <div className="h-full flex-[2] flex justify-end items-center lg:bg-[#fcf5f3]">
        <a
          href="/sign-in"
          className="hidden sm:hidden md:block m-5 py-3 px-6 transition-all hover:scale-105"
        >
          Sign In
        </a>
        <a
          href="/sign-up"
          className="hidden sm:hidden md:block m-5 py-3 px-6 bg-[#fece51] transition-all hover:scale-105"
        >
          Sign Up
        </a>
        {/* MOBILE ONLY */}
        <div className="block md:hidden z-50">
          <img
            src="/menu.png"
            alt="Menu"
            className="w-9 h-9 cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div
          className={`w-1/2 h-screen absolute top-0 ${
            open ? "right-0" : "-right-1/2"
          } flex flex-col justify-center items-center gap-y-10 text-xl text-white bg-black transition-all`}
        >
          <a href="/" className="transition-all hover:scale-105">
            Home
          </a>
          <a href="/about" className="transition-all hover:scale-105">
            About
          </a>
          <a href="/contact" className="transition-all hover:scale-105">
            Contact
          </a>
          <a href="/agents" className="transition-all hover:scale-105">
            Agents
          </a>
          <a href="/sign-in" className="transition-all hover:scale-105">
            Sign In
          </a>
          <a href="/sign-up" className="transition-all hover:scale-105">
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
