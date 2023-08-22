import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const SearchedItems = ({ find }) => {
  const [data, setdata] = useState([]);
  const { theme } = useContext(ThemeContext);

  const load = async () => {
    let fetchedData = await fetch("https://dummyjson.com/products");
    let json = await fetchedData.json();
    setdata(data.concat(json.products));
  };

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div
        className={`absolute top-14 left-5 md:left-[25vw] max-h-[85vh] overflow-y-auto z-30 mt-2 w-[80vw] md:w-[30vw] origin-top-right rounded-md ${
          !theme ? "bg-white text-black" : "bg-black text-white"
        } shadow-2xl ring-1 ring-black ring-opacity-5`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex="-1"
      >
        <div className="p-2" role="none">
          {data.filter((element) =>
            element.title
              .toString()
              .toLowerCase()
              .includes(find.toString().toLowerCase())
          ).length > 0 ? (
            data
              .filter((element) =>
                element.title
                  .toString()
                  .toLowerCase()
                  .includes(find.toString().toLowerCase())
              )
              .map((element) => {
                return (
                  <div
                    key={element.id}
                    className="block px-4 py-2 text-sm cursor-pointer flex justify-between items-center hover:font-bold hover:text-lg"
                    onClick={() => setdata("")}
                  >
                    <p>{element.title}</p>
                    <img src={element.thumbnail} className="w-10 h-10" alt="" />
                  </div>
                );
              })
          ) : (
            <p className="text-gray-100 block px-4 py-2 text-sm ">
              No Items Found
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchedItems;
