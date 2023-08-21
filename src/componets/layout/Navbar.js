import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import logo from "../../media/logo-groww.svg";
import Search from "./Search";

const Navbar = () => {
  const [menu, setmenu] = useState(false);
  const toggle = () => {
    setmenu(!menu);
  };
  const [location, setlocation] = useState("");
  const path = (name) => {
    setlocation(name);
  };

  return (
    <header className="z-50 text-gray-400 bg-black shadow-2xl w-screen body-font fixed px-5 md:px-0">
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

        {menu ? (
          <FontAwesomeIcon
            icon={faBars}
            onClick={toggle}
            className=" mx-2 lg:hidden block rotate-90 text-xl duration-200"
          />
        ) : (
          <FontAwesomeIcon
            icon={faBars}
            onClick={toggle}
            className=" mx-2 lg:hidden block text-xl duration-200"
          />
        )}

        <div
          className={` ${
            menu ? `flex` : `hidden`
          } flex-col lg:flex-row justify-end items-center lg:flex py-4 lg:py-0 w-full lg:w-1/3`}
        >
          <nav className=" flex flex-wrap items-center text-base justify-center">
            <div>
              <Link
                className={
                  location === "league"
                    ? "text-white"
                    : "hover:text-red-500"
                }
                to="/league"
                onClick={() => {
                  path("league");
                  setmenu(false);
                }}
              >
                Leagues
              </Link>
              <div
                className={
                  location === "league"
                    ? "h-1 w-100 mx-5 mt-1 bg-red-500 rounded"
                    : ""
                }
              ></div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
