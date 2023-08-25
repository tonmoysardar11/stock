import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const Details = ({ item }) => {
  const {theme}=useContext(ThemeContext)
  const itemDetailsList = {
    country: "Country",
    currency: "Currrency",
    exchange: "Exchange",
    ipo: "IPO Date",
    marketCapitalization: "Market Size",
    name: "Name",
    logo: ""
  };
  return (
    <div className="pb-8 pt-16 md:px-10 lg:px-20">
      <section className={`${!theme?"text-gray-600":"text-white"} body-font`}>
        <div className="container mx-auto">
        <h1 className={`sm:text-3xl text-2xl font-medium title-font ${!theme?"text-gray-600":"text-white"} lg:w-1/3 lg:mb-10 md:mb-8 mb-6`}>Company Profile</h1>
      
        
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {Object.keys(itemDetailsList)
              .filter((element) => element !== "logo")
              .map((element, index) => {
                return (
                  <div key={index} className="md:w-1/2 w-full p-2">
                  <div className={`${!theme?"bg-gray-100 text-black":"bg-black text-white"} rounded flex p-4 h-full items-center justify-between`}>
                    <span>{itemDetailsList[element]}</span>
                    <span>
                      {typeof item[element] === "number"
                        ? item[element] > 1000
                          ? ` ${(item[element] / 1000).toFixed(2)} B`
                          : ` ${item[element].toFixed(2)} M`
                        : item[element]}
                    </span>
                    </div>
                    </div>
                );
              })}
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Details;
