import React from 'react';
import main from '../assets/main.png';
import breakFast from '../assets/breakfast.png';
import dessert from '../assets/dessert.png';
import all from '../assets/all_items.png';

const categories = [
  {
    name: 'Main Dish',
    count: '86 dishes',
    image: main,
  },
  {
    name: 'Break Fast',
    count: '12 break fast',
    image: breakFast,
  },
  {
    name: 'Dessert',
    count: '48 dessert',
    image: dessert,
  },
  {
    name: 'Browse All',
    count: '255 Items',
    image: all,
  },
];

const PopularCategories = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-12 text-center bg-white">
      <p className="text-xs sm:text-sm font-semibold text-red-400 tracking-widest uppercase mb-2">
        Customer Favorites
      </p>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-black">
        Popular Categories
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-lg transition text-center"
          >
            <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-4">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-10 h-10 sm:w-14 sm:h-14 object-contain"
              />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-800">
              {cat.name}
            </h3>
            <p className="text-sm text-gray-500 mt-1">({cat.count})</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCategories;
