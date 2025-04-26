import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebookF, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white py-12 px-30 border-t">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-gray-700">
        
        {/* Logo & Tagline */}
        <div>
          <div className="text-2xl font-bold flex items-center gap-1 mb-2">
            <span className="bg-green-500 text-white px-2 py-1 rounded">F</span>
            <span className="text-black">OODI</span>
          </div>
          <p className="text-gray-600">
            Savor the artistry where <br />
            every dish is a culinary <br />
            masterpiece
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="font-semibold text-black mb-3">Useful links</h4>
          <ul className="space-y-2">
            <li><NavLink to="/about" className="hover:underline">About us</NavLink></li>
            <li><NavLink to="/events" className="hover:underline">Events</NavLink></li>
            <li><NavLink to="/blogs" className="hover:underline">Blogs</NavLink></li>
            <li><NavLink to="/faq" className="hover:underline">FAQ</NavLink></li>
          </ul>
        </div>

        {/* Main Menu */}
        <div>
          <h4 className="font-semibold text-black mb-3">Main Menu</h4>
          <ul className="space-y-2">
            <li><NavLink to="/" className="hover:underline">Home</NavLink></li>
            <li><NavLink to="/offers" className="hover:underline">Offers</NavLink></li>
            <li><NavLink to="/menus" className="hover:underline">Menus</NavLink></li>
            <li><NavLink to="/reservation" className="hover:underline">Reservation</NavLink></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h4 className="font-semibold text-black mb-3">Contact Us</h4>
          <ul className="space-y-2">
            <li><NavLink to="/contact" className="hover:underline">example@email.com</NavLink></li>
            <li><NavLink to="/contact" className="hover:underline">+64 958 248 966</NavLink></li>
            <li><NavLink to="/contact" className="hover:underline">Social media</NavLink></li>
          </ul>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-gray-600 text-sm">
        
        {/* Social Icons */}
        <div className="flex gap-4">
          <a href="#" className="bg-green-100 text-green-600 p-2 rounded-full">
            <FaFacebookF className="w-5 h-5" />
          </a>
          <a href="#" className="bg-green-100 text-green-600 p-2 rounded-full">
            <FaInstagram className="w-5 h-5" />
          </a>
          <a href="#" className="bg-green-100 text-green-600 p-2 rounded-full">
            <FaTwitter className="w-5 h-5" />
          </a>
          <a href="#" className="bg-green-100 text-green-600 p-2 rounded-full">
            <FaYoutube className="w-5 h-5" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-center md:text-left mx-60">
          Copyright © 2023 Dscode | All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
