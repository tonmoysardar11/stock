import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { stockSearch } from "../../api/stock-api";

const SearchedItems = ({ find }) => {
  const [data, setdata] = useState([]);
  const { theme } = useContext(ThemeContext);

  const load = async () => {
  //   const result= await stockSearch(find)
  //     setdata(data.concat(result.result))
  // //   }
   try {
    if(find){
      const result= await stockSearch(find)
      console.log(result)
    }
    
   } catch (error) {
    setdata([])
    console.log(error)
   }
  };

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [find]);

  return (
    <>
      <div
        className={`absolute top-14 left-5 md:left-[28vw] max-h-[85vh] overflow-y-auto z-30 mt-2 w-[80vw] md:w-[26vw] origin-top-right rounded-md ${
          !theme ? "bg-white text-black" : "bg-black text-white"
        } shadow-2xl ring-1 ring-black ring-opacity-5`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex="-1"
      >
        <div className="p-2" role="none">
          {data.filter((element) =>
            element.description
              .toString()
              .toLowerCase()
              .includes(find.toString().toLowerCase())
          ).length > 0 ? (
            data
              .filter((element) =>
                element.description
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
                    <p>{element.description}</p>
                    <p>{element.displaySymbol}</p>
                   
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
