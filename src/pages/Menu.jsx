import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Menu = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const toastId = toast.loading("Fetching food menu...");

    fetch(
      "https://world.openfoodfacts.org/cgi/search.pl?search_terms=snack&search_simple=1&action=process&json=1&page_size=10"
    )
      .then((res) => res.json())
      .then((data) => {
        setFoods(data.products || []);
        setLoading(false);
        toast.update(toastId, {
          render: "Menu loaded!",
          type: "success",
          isLoading: false,
          autoClose: 3000,
        });
      })
      .catch((err) => {
        setLoading(false);
        toast.update(toastId, {
          render: "Failed to load menu.",
          type: "error",
          isLoading: false,
          autoClose: 3000,
        });
        console.error("API error:", err);
      });
  }, []);

  return (
    <div className="bg-white">
      <ToastContainer />
      <div id="menu" className="container mx-auto px-4 lg:pt-24 lg:pb-64">
        <div className="flex flex-wrap text-center justify-center">
          <div className="w-full lg:w-6/12 px-4">
            <h2 className="text-4xl font-semibold text-black">Our Menu</h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
              Curated food items from Open Food Facts.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap mt-12 justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loading
              ? Array.from({ length: 10 }).map((_, i) => (
                  <div
                    key={i}
                    className="animate-pulse p-4 rounded-lg shadow-md border bg-gray-100"
                  >
                    <div className="bg-gray-300 h-24 w-24 rounded mx-auto mb-4"></div>
                    <div className="h-4 bg-gray-300 rounded w-2/3 mx-auto mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/2 mx-auto"></div>
                  </div>
                ))
              : foods.map((item, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg shadow-md border hover:shadow-lg transition"
                  >
                    <img
                      alt={item.product_name || "No name"}
                      src={
                        item.image_front_small_url ||
                        "https://via.placeholder.com/100"
                      }
                      className="h-24 w-24 rounded mx-auto object-cover"
                    />
                    <h3 className="font-semibold text-black mt-4 text-center text-sm">
                      {item.product_name || "Unnamed Product"}
                    </h3>
                    <p className="text-center text-gray-500 italic text-xs">
                      {item.brands || "Unknown brand"}
                    </p>
                    <p className="text-center font-bold mt-2 text-sm">
                      {(item.nutriments?.energy_kcal || 100) / 10}$
                    </p>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
