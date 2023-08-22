import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faX } from "@fortawesome/free-solid-svg-icons";
import SearchedItems from "../pages/SearchedItems";

const Search = () => {
  const [input, setinput] = useState("");
  const [match, setmatch] = useState("");
  const change = (e) => {
    setinput(e.target.value);
    setmatch("");
  };
  const clear = () => {
    setinput("");
    setmatch("");
  };
  return (
    <>
      <div className="w-2/3 md:w-1/3 flex justify-center items-center">
        <div className="w-full md:w-4/5 flex justify-center items-center border-t-0 border-r-0 border-l-0 border-b-2 border-gray-600">
          <input
            type="text"
            name="hero-field"
            className="w-full bg-transparent text-base outline-none text-gray-100 py-1 px-3 leading-6 transition-colors duration-200 ease-in-out placeholder:text-text-gray-100"
            placeholder="Search"
            value={input}
            onChange={change}
          />
          {input && (
            <div className="px-2 cursor-pointer text-gray-500 hover:text-gray-100">
              <FontAwesomeIcon icon={faX} onClick={clear} />
            </div>
          )}
        </div>
      </div>
      {input && <SearchedItems find={input} />}
    </>
  );
};

export default Search;
