import React from "react";
import { Star } from "lucide-react";
import chef from "../assets/chef.png";
import girl from "../assets/girl.jpg";
import boy1 from "../assets/boy_1.jpg";
import boy2 from "../assets/boy_2.jpg";

const Testimonial = () => {
  return (
    <section className="bg-white px-4 sm:px-8 md:px-20 pb-16 pt-28 sm:pt-36">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
        {/* Left - Chef with green background */}
        <div className="relative flex justify-center w-full md:w-1/2">
          {/* Oval green background */}
          <div className="w-64 h-52 sm:w-72 sm:h-60 bg-green-400 rounded-b-4xl rounded-t-full relative z-10 flex items-end justify-center">
            {/* Emojis on left and right */}
            <span className="absolute -left-4 top-1/3 text-xl sm:text-2xl">😊</span>
            <span className="absolute -right-4 top-1/2 text-xl sm:text-2xl">🍕</span>

            {/* Chef Image */}
            <img
              src={chef}
              alt="Best Chef"
              className="w-64 sm:w-72 h-auto object-contain z-20"
            />
          </div>

          {/* Bottom Tag */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white shadow-md px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium flex items-center gap-1 z-30">
            Our Best Chef <span className="text-base">😁</span>
          </div>
        </div>

        {/* Right - Testimonial content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className="text-xs sm:text-sm font-semibold text-red-500 uppercase tracking-widest mb-2">
            Testimonials
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-5">
            What Our Customers <br className="hidden sm:block" /> Say About Us
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mb-8">
            “I had the pleasure of dining at Foodi last night, and I'm still
            raving about the experience! The attention to detail in presentation
            and service was impeccable”
          </p>

          {/* Customer feedback */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
            {/* Avatars */}
            <div className="flex -space-x-3">
              <img
                src={boy1}
                alt="customer1"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src={girl}
                alt="customer2"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src={boy2}
                alt="customer3"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
            </div>

            {/* Text beside avatars */}
            <div>
              <p className="text-sm font-semibold text-gray-800">
                Customer Feedback
              </p>
              <div className="flex items-center text-sm text-gray-600 gap-1">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                4.9 <span className="text-gray-400">(18.6k Reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
