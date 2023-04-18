import React, { useState } from "react";
import brandLogo from "../images/logo.svg";
import Hamburger from "../images/icon-hamburger.svg";

const Navbar = () => {
  const [dropdown, setDropdown] = useState("hidden");

  return (
    <nav className="flex justify-between items-center px-7 py-9 relative">
      <img src={brandLogo} alt="" />
      <button
        className="md:hidden"
        onClick={() => setDropdown(dropdown === "hidden" ? "block" : "hidden")}
      >
        <img src={Hamburger} alt="hamburger" />
      </button>

      {/* navbar desktop */}
      <div className="hidden md:block">
        <a href="#" className="nav-item mx-6 font-barlow text-white">
          About
        </a>
        <a href="#" className="nav-item mx-6 font-barlow text-white">
          Service
        </a>
        <a href="#" className="nav-item mx-6 font-barlow text-white">
          Projects
        </a>
        <button className="btn mx-7 font-fraunces uppercase bg-white text-black rounded-full px-6 py-3">
          Contact
        </button>
      </div>

      {/* navbar mobile */}
      <div
        className={`${dropdown} absolute bg-white top-full left-0 right-0 text-center py-4 min-[768px]:hidden`}
      >
        <a href="#" className="block font-barlow my-6">
          About
        </a>
        <a href="#" className="block font-barlow my-6">
          Service
        </a>
        <a href="#" className="block font-barlow my-6">
          Projects
        </a>
        <a
          href="#"
          className="btn-mobile relative inline-block font-fraunces mb-6 font-bold bg-yellow-300 px-6 py-3 rounded-full hover:bg-yellow-400 transition duration-200"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
