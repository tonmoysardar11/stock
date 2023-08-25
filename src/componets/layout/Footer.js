import React from "react";
import logo from '../../media/logo-groww.svg'
import { Link } from "react-router-dom";


const Footer = () => {
   
  return (
    <footer className="text-gray-100 body-font bg-black px-5 md:px-0">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col px-1 md:px-10 lg:px-20">
      <Link
          className="flex title-font font-medium items-center text-white md:mb-0"
          to="/"
        >
          <img src={logo} alt="" id="logo" width={180} />
          <span className="ml-2 text-3xl text-emerald-400 font-semibold">
            More
          </span>
        </Link>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2023 GrowwMore —
         
            @Tonmoy Sardar
          
        </p>
      </div>
    </footer>
  );
};

export default Footer;
