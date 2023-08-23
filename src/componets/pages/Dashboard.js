import React, { useContext, useState, useEffect } from "react";
import Details from "./Details";
import Profile from "./Profile";
import Itemheader from "./Itemheader";
import Charts from "./Charts";
import { ThemeContext } from "../../context/ThemeContext";
import { StockContext } from "../../context/StockContext";
import { stockPrice, stockProfile } from "../../api/stock-api";

const Dashboard = () => {
  const { theme } = useContext(ThemeContext);
  const { stock } = useContext(StockContext);
  const [profile, setprofile] = useState({});
  const [price, setprice] = useState({});
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

  useEffect(() => {
    getProfile();
    getPrice();
  }, [stock]);
  return (
    <div
      className={`h-screen grid grid-cols-1 md:grid-cols-6 grid-rows-6 pt-16 gap-3 md:px-10 lg:px-20 auto-rows-fr ${
        !theme ? "bg-white text-black" : "bg-gray-950 text-gray-100"
      }`}
    >
      <div className="grid col-span-6 row-span-1">
        <Itemheader item={profile} />
      </div>
      <div className="grid col-span-6 row-span-3 md:row-span-5 md:col-span-4">
        <Charts />
      </div>
      <div className="grid col-span-6 row-span-1 md:col-span-2">
        <Profile
          logo={profile.logo}
          name={profile.name}
          value={price.c}
          change={price.d}
          changepercentage={price.dp}
        />
      </div>
      <div className="grid col-span-6 row-span-1 md:col-span-2 md:row-span-4">
        <Details item={profile} />
      </div>
    </div>
  );
};

export default Dashboard;
