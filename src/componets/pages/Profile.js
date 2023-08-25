import React from "react";
import Card from "./Card";

const Profile = ({ logo, name, value, change, changepercentage }) => {
  return (
    <>
      <div className="max-w-full flex justify-between lg:justify-start items-center px-5 md:px-10 lg:px-20 py-5 md:py-5">
        <div className="w-full flex justify-start items-center">
          <img src={logo} width={40} height={40} alt={name} />
          <p className="mx-2">{name}</p>
        </div>
        <div className="w-full flex justify-center items-center py-2">
          <p className="text-xl md:text-3xl mx-4"> ${value?.toFixed(2)}</p>
          <p
            className={`text-md md:text-xl flex ${
              change > 0 ? "text-emerald-600" : "text-red-500"
            }`}
          >
           {change?.toFixed(2)>0?`+${change?.toFixed(2)}`:change?.toFixed(2)}
          </p>
          <p
            className={`text-md md:text-xl ${
              change > 0 ? "text-emerald-600" : "text-red-500"
            }`}
          >
            ({changepercentage?.toFixed(2)}%)
          </p>
        </div>
      </div>
    </>
  );
};

export default Profile;
