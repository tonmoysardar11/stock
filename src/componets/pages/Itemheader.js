import React from "react";

const Itemheader = ({ item }) => {
  return (
    <div className="w-full px-5 md:px-10 lg:px-20 py-5 md:py-5 flex justify-center items-center">
      <img src={item.logo} width={60} height={60} alt="" />
      <p className="text-3xl mx-2 font-semibold"> {item.name}</p>
    </div>
  );
};

export default Itemheader;
