import React,{useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
    const [input, setinput] = useState('');
    const [match, setmatch] = useState('');
    const change=(e)=>{
        setinput(e.target.value)
        setmatch('')
    }
  return (
    <div className="w-2/3 md:w-1/3 flex justify-center items-center">
      <div className="w-full md:w-4/5 flex justify-center items-center">
        <input
          type="text"
          name="hero-field"
          className="w-full bg-transparent text-base outline-none text-gray-100 border-t-0 border-r-0 border-l-0 border-b-2 border-gray-600 focus:border-gray-300 py-1 px-3 leading-6 transition-colors duration-200 ease-in-out placeholder:text-text-gray-100"
          placeholder="Search"
          value={input}
          onChange={change}
        />
        <div className="px-2 text-xl cursor-pointer hover:text-gray-100">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
      </div>
    </div>
  );
};

export default Search;
