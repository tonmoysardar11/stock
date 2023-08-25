import React, { useContext, useState, useEffect } from "react";
import Details from "./Details";
import Profile from "./Profile";
import Itemheader from "./Itemheader";
import Charts from "./Charts";
import { ThemeContext } from "../../context/ThemeContext";
import { StockContext } from "../../context/StockContext";
import {
  stockFundamentals,
  stockNews,
  stockPrice,
  stockProfile,
} from "../../api/stock-api";
import Fundamentals from "./Fundamentals";
import StockNews from "./StockNews";

const Dashboard = () => {
  const { theme } = useContext(ThemeContext);
  const { stock } = useContext(StockContext);
  const [profile, setprofile] = useState({});
  const [price, setprice] = useState({});
  const [finance, setfinance] = useState({});
  const [stocknews, setstocknews] = useState([]);

  const getFinance = async () => {
    try {
      if (stock) {
        const result = await stockFundamentals(stock);
        setfinance(result.metric);
      }
    } catch (error) {
      setfinance({});
      console.log(error);
    }
  };

  const getProfile = async () => {
    try {
      if (stock) {
        const result = await stockProfile(stock);
        setprofile(result);
      }
    } catch (error) {
      setprofile({});
      console.log(error);
    }
  };
  const getPrice = async () => {
    try {
      if (stock) {
        const result = await stockPrice(stock);
        setprice(result);
      }
    } catch (error) {
      setprice({});
      console.log(error);
    }
  };

  const getStockNews = async () => {
    try {
      if (stock) {
        const result = await stockNews(stock);

        setstocknews(result);
      }
    } catch (error) {
      setfinance([]);
      console.log(error);
    }
  };

  useEffect(() => {
    getProfile();
    getPrice();
    getFinance();
    getStockNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stock]);
  return (
    <div
      className={`overflow-x-hidden ${!theme ? "bg-white text-black" : "bg-black text-gray-100"}`}
    >
      <div
        className={`h-auto md:h-screen md:pt-16 lg:pt-24 ${
          !theme ? "bg-white text-black" : "bg-black text-gray-100"
        }`}
      >
        <Profile
              logo={profile.logo}
              name={profile.name}
              value={price.c}
              change={price.d}
              changepercentage={price.dp}
            />
        <div className="w-screen flex flex-col md:flex-row md:h-[75vh] md:px-10 lg:px-20 py-5">
          <div
            className={`w-full h-[40vh] md:h-auto md:w-4/6 ${
              !theme ? "bg-white" : "bg-black"
            }`}
          >
            <Charts change={price.d} />
          </div>
          <div
            className={`w-full md:w-2/6 flex flex-col justify-between ${
              !theme ? "bg-white" : "bg-black"
            }`}
          >
            <Itemheader item={profile} />

            <Fundamentals item={finance} />
          </div>
        </div>
      </div>
      <Details item={profile} />
      <StockNews data={stocknews} />
    </div>
  );
};

export default Dashboard;
