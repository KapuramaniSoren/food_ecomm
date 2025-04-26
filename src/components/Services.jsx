import React from 'react';
import {
  Clock,
  Gift,
  ShoppingCart,
  Utensils
} from 'lucide-react';

const services = [
  {
    icon: <Utensils className="w-10 h-10 text-green-400 mb-3" />,
    title: 'CATERING',
    desc: 'Delight your guests with our flavors and presentation',
  },
  {
    icon: <Clock className="w-10 h-10 text-green-400 mb-3" />,
    title: 'FAST DELIVERY',
    desc: 'We deliver your order promptly to your door',
  },
  {
    icon: <ShoppingCart className="w-10 h-10 text-green-400 mb-3" />,
    title: 'ONLINE ORDERING',
    desc: 'Explore menu & order with ease using our Online Ordering',
  },
  {
    icon: <Gift className="w-10 h-10 text-green-400 mb-3" />,
    title: 'GIFT CARDS',
    desc: 'Give the gift of exceptional dining with Foodi Gift Cards',
  },
];

const Services = () => {
  return (
    <section className="py-16 px-4 sm:px-8 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-center md:text-left">
          <h4 className="text-xs sm:text-sm text-red-400 font-semibold tracking-widest uppercase mb-2">
            Our Story & Services
          </h4>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 sm:mb-6 leading-snug">
            Our Culinary Journey <br className="hidden sm:block" /> And Services
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8 max-w-md mx-auto md:mx-0">
            Rooted in passion, we curate unforgettable dining experiences and offer exceptional services,
            blending culinary artistry with warm hospitality.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2.5 px-6 rounded-full text-sm sm:text-base">
            Explore
          </button>
        </div>

        {/* Right Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-5 sm:p-6 rounded-2xl shadow-md text-center hover:shadow-lg transition"
            >
              <span className="flex justify-center">{service.icon}</span>
              <h3 className="text-green-500 font-bold text-sm sm:text-md mb-1">
                {service.title}
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
