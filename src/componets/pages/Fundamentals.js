import React from "react";

const Fundamentals = ({ item }) => {
  const itemDetailsList = {
    "52WeekLow": "52 Week Low",
    "52WeekHigh": "52 Week High",
    currentDividendYieldTTM: "Dividend Yield",
    epsAnnual: "Annual EPS",
    grossMarginAnnual: "Annual Gross Margin",
    netProfitMarginAnnual: "Annual Net Profit",
    pbAnnual: "P/B",
    peAnnual: "P/E",
    roiAnnual: "Annual ROI",
  };
  return (
    <>
      <div className="flex flex-col h-full mx-5 md:m-5">
        <ul className="w-full h-full flex flex-col justify-between">
          {Object.keys(itemDetailsList).map((element, index) => {
            return (
              <li
                key={index}
                className="w-full flex justify-between items-center py-2"
              >
                <span>{itemDetailsList[element]}</span>
                <span>
                 
                    {item[element]?.toFixed(2)}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Fundamentals;
