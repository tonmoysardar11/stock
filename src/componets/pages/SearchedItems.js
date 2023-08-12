import React, { useState, useEffect } from "react";
import Details from "./Details";

const SearchedItems = ({ find, focus, sethover, setfocus }) => {
  const [data, setdata] = useState([]);
  const [modalData, setmodalData] = useState({});

  const load = async () => {
    let fetchedData = await fetch("https://dummyjson.com/products");
    let json = await fetchedData.json();
    setdata(data.concat(json.products));
  };

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const modal = (element) => {
    setmodalData(element);
  };

  return (
    <>
      <div
        className="absolute top-14 left-5 md:left-[31vw] max-h-[85vh] overflow-y-auto z-30 mt-2 w-[80vw] md:w-[30vw] origin-top-right rounded-md bg-black shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none"
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
                    className="text-gray-100 block px-4 py-2 text-sm cursor-pointer flex justify-between items-center hover:font-bold hover:text-lg"
                    onClick={() => modal(element)}
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
      {/* {modalData && (
        <Details item={modalData}/>
      )} */}
    </>
  );
};

export default SearchedItems;
