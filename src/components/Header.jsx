import React from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";


import Home from '../pages/Home'
import Menu from "../pages/Menu";
import Services from "../pages/Service";
import Offers from "../pages/Offers";
import Contact from "../pages/Contact"

const Header = () => {
  return (
    <>
      <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <NavLink
            to="/#"
            > 
                        <img src={logo} alt="" />

              </NavLink>
          </div>

          {/*Nav Links */}
          <nav className="hidden md:flex gap-8 items-center text-sm font-medium">
            <NavLink
              to="/#"
              label="Home"
              className="text-blue-500 hover:text-green-500 text-xl"
            >
              Home
            </NavLink>

            <NavLink
              to="/menu"
              label="Menu"
              className="text-blue-500 hover:text-green-500 text-xl"
            >
            Menu 
            </NavLink>


            <NavLink
              to="/service"
              label="Service"
              className="text-blue-500 hover:text-green-500 text-xl"
            >
              Service
            </NavLink>

            <NavLink
              to="/offers"
              label="Offers"
              className="hover:text-green-600 text-xl"
            >
              Offers
            </NavLink>
          </nav>

          {/* icons and buttons */}
          <div className="flex items-center gap-6">
            <FaSearch className="text-gray-700 cursor-pointer text-lg" />
            {/** Cart Icon */}
            <div className="relative cursor-pointer">
              <FaCartArrowDown className="text-gray-700 text-xl" />
              <span className="absolute -top-2  -right-2 bg-green-500 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                5
              </span>
            </div>
            {/* Button */}
            {/* <button className="hidden md:flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition">
              <FaPhoneAlt className="text-sm"/>
              <span>Contact</span>
            </button> */}
            <NavLink
              to="/contact"
              label="Contact"
              className="hidden md:flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition"
            >
              <FaPhoneAlt className="text-sm" />
              Contact
            </NavLink>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
