import React from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../Constants";

const Navbar = () => {
  const [toggle, setToggle] =React.useState(false);
  return (
    <nav className="w-full flex justify-between items-center navbar sm:px-16 px-6 sm:py-12 py-4">
      <img src={logo} alt="hookbook" className="w-[124px] h-[32px] " />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={index}
            className={`font-poppins font-normal cursor-pointer text-[16px]  text-white mr-10
            ${index === navLinks.length - 1 ? "mr-0" : "mr-10"} nav-hover`}
          >
            {" "}
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 items-center justify-end  ">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-28px object-contain cursor-pointer"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex p-6 justify-end items-center flex-col flex-1 ">
            {navLinks.map((nav, index) => (
              <li
                key={index}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white
            ${index === navLinks.length - 1 ? "mr-0" : "mb-4"} nav-hover`}
              >
                {" "}
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
