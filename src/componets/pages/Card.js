import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const Card = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`relative h-full w-full p-4 border-1 ${
        !theme ? "bg-gray-200 text-black" : "bg-black text-gray-100"
      } rounded-md`}
    >
      {children}
    </div>
  );
};

export default Card;
