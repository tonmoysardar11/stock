import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import logo from "../../media/logo-groww.svg";
import Search from "./Search";
import { ThemeContext } from "../../context/ThemeContext";

const Navbar = () => {
  const [menu, setmenu] = useState(false);
  const { theme, settheme } = useContext(ThemeContext);
  const toggle = () => {
    setmenu(!menu);
  };
  const [location, setlocation] = useState("");
  const path = (name) => {
    setlocation(name);
  };

  return (
    <header className="z-50 text-gray-400 bg-black shadow-2xl w-screen body-font md:fixed px-5 md:px-0">
      <div className="w-full mx-auto flex flex-wrap px-1 md:px-10 lg:px-20 justify-between items-center">
        <Link
          className="flex title-font font-medium items-center text-white md:mb-0"
          to="/"
          onClick={() => setmenu(false)}
        >
          <img src={logo} alt="" id="logo" width={180} />
          <span className="ml-2 text-3xl text-emerald-400 font-semibold">
            More
          </span>
        </Link>

        <Search />
        <FontAwesomeIcon
          icon={!theme ? faMoon : faSun}
          onClick={() => {
            settheme(!theme);
          }}
          className=" mx-2 cursor-pointer text-xl text-gray-100 duration-200"
        />
      </div>
    </header>
  );
};

export default Navbar;
