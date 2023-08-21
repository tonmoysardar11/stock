import React from "react";

const Itemheader = ({ item }) => {
  return (
    
      <div className="w-full px-3 flex justify-start items-center">
        <img src={item.logo} width={60} height={60} alt="" />
        <p className="text-3xl font-semibold"> {item.name}</p>
      </div>
    
  );
};

export default Itemheader;
