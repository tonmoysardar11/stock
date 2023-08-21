import React from "react";
import Card from "./Card";

const Details = ({ item }) => {
  const itemDetailsList = {
    country: "Country",
    currency: "Currrency",
    exchange: "Exchange)",
    ipo: "IPO Date",
    marketCapitalization: "Market Size",
    name: "Name",
    logo: "",
    finnhubIndustry: "Industry",
  };
  return (
    <Card>
      <div className="flex flex-col h-full">
        <div className="w-full flex justify-center items-center py-2">
          <img src={item.logo} width={40} height={40} alt="" />
          <p className="mx-2">{item.name}</p>
        </div>
        <ul className="w-full h-full flex flex-col justify-between divider-y-1">
          {Object.keys(itemDetailsList)
            .filter((element) => element !== "logo")
            .map((element, index) => {
              return (
                <li
                  key={index}
                  className="w-full flex justify-between items-center"
                >
                  <span>{itemDetailsList[element]}</span>
                  <span>
                    {typeof item[element] === "number"
                      ? item[element] > 1000
                        ? ` ${(item[element] / 1000).toFixed(2)} B`
                        : ` ${item[element].toFixed(2)} M`
                      : item[element]}
                  </span>
                </li>
              );
            })}
        </ul>
      </div>
    </Card>
  );
};

export default Details;
