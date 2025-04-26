import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import breakfast from '../assets/breakfast.png'


const Offers = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const toastId = toast.loading("Loading meal offers...");

    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast")
      .then((res) => res.json())
      .then((data) => {
        setMeals(data.meals.slice(0, 6)); // Limit to 6 meals
        toast.update(toastId, {
          render: "Meal offers loaded!",
          type: "success",
          isLoading: false,
          autoClose: 3000,
        });
      })
      .catch((err) => {
        toast.update(toastId, {
          render: "Failed to load meal offers.",
          type: "error",
          isLoading: false,
          autoClose: 3000,
        });
        console.error("Failed to fetch meals:", err);
      });
  }, []);

  return (
    <>
      <div >
      <img src={breakfast}   alt="breakfast_image" />
    </div>

      <ToastContainer />
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {meals.map((meal) => (
          <div
            key={meal.idMeal}
            className="rounded-xl shadow-lg overflow-hidden border hover:shadow-xl transition"
          >
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">{meal.strMeal}</h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Offers;
