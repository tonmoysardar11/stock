import React, { useContext } from "react";
import Details from "./Details";
import { companyProfile } from "../../const";
import Profile from "./Profile";
import Itemheader from "./Itemheader";
import Charts from "./Charts";
import { ThemeContext } from "../../context/ThemeContext";


const Dashboard = () => {
  const {theme}=useContext(ThemeContext)
  return (
    <div className={`h-screen grid grid-cols-1 md:grid-cols-6 grid-rows-6 pt-16 gap-3 md:px-10 lg:px-20 auto-rows-fr ${!theme?'bg-white text-black':'bg-gray-950 text-gray-100'}`}>
      <div className="grid col-span-6 row-span-1">
        <Itemheader item={companyProfile}/>
      </div>
      <div className="grid col-span-6 row-span-3 md:row-span-5 md:col-span-4">
      <Charts/>
      </div>
      <div className="grid col-span-6 row-span-1 md:col-span-2">
        <Profile logo={companyProfile.logo} name={companyProfile.name} price={330} change={-30} changepercentage={-10}/>
      </div>
      <div className="grid col-span-6 row-span-1 md:col-span-2 md:row-span-4">
        <Details item={companyProfile}/>
      </div>
    </div>
  );
};

export default Dashboard;
