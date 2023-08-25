import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { Link } from "react-router-dom";
import { Unixtodate } from "../helpers/data-helpers";

const StockNews = ({ data }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="py-8 md:pb-8 md:pt-16 md:px-10 lg:px-20">
      <section className={`${
              !theme ? "text-gray-600" : "text-white"
            } body-font overflow-hidden`}>
        <div className="container px-5 py-12 mx-auto">
          <h1
            className={`sm:text-3xl text-2xl font-medium title-font ${
              !theme ? "text-gray-600" : "text-white"
            } lg:w-1/3 lg:mb-10 md:mb-8 mb-6`}
          >
            Company News
          </h1>

          <div className="-my-8 divide-y-2 divide-gray-100">
            {data?.map((element, index) => {
                
                
             return <div key={index} className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
         
          <span className="mt-1  text-sm">{Unixtodate(element.datetime)}</span>
        </div>
                <div className="md:flex-grow">
                  <h2 className="text-2xl font-medium  title-font mb-2">
                    {element.headline}
                  </h2>
                  <p className="leading-relaxed">
                    {element.summary}
                  </p>
                  <h4 className="text-2xl font-medium  title-font mb-2">
                    Source: {element.source}
                  </h4>
                  <Link className="text-emerald-500 inline-flex items-center mt-4" to={element.url}>
                    Learn More &rarr;
                  </Link>
                </div>
              </div>;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default StockNews;
