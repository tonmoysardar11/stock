import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { stockSearch } from "../../api/stock-api";
import { StockContext } from "../../context/StockContext";

const SearchedItems = ({ find }) => {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(false);
  const { theme } = useContext(ThemeContext);
  const {setstock}= useContext(StockContext)

  const load = async () => {
    setloading(true)
   try {
    if(find){
      const result= await stockSearch(find)
      setdata(result.result)
    }
    
   } catch (error) {
    setdata([])
    console.log(error)
   }
   setloading(false)
  };

  useEffect(() => {
    
    load();
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [find]);

  return (
    <>
      <div
        className={`absolute top-14 left-5 md:left-[28vw] max-h-[50vh] overflow-y-auto z-30 mt-2 w-[80vw] md:w-[26vw] origin-top-right rounded-md ${
          !theme ? "bg-white text-black" : "bg-black text-white shadow-md shadow-gray-500"
        } shadow-2xl ring-1 ring-black ring-opacity-5`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex="-1"
      >
        <div className="p-2" role="none">
          {data.length>0?data.map((element,index) => {
                return (
                  <div
                    key={index}
                    className="block px-4 py-2 text-sm cursor-pointer flex justify-between items-center hover:font-semibold"
                    onClick={()=>setstock(element.displaySymbol)}
                  >
                    <p>{element.description}</p>
                    <p>{element.displaySymbol}</p>
                   
                  </div>
                );
              })
           : (
            <p className={`${!theme?'text-black':'text-gray-100'} text-center block px-4 py-2 text-sm `}>
              {loading?'Searching...':'Found Nothing'}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchedItems;
