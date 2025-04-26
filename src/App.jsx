import React from "react";

import Header from "./components/Header";
import Banner from "./components/Banner";
import PopularCategories from "./components/PopularCategories";
import Testimonial from "./components/Testimonial";
import Services from "./components/Services";
import Footer from "./components/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Service from "./pages/Service"
import Offers from "./pages/Offers"
import Contact from "./pages/Contact"

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/service" element={<Service />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="contact" element={<Contact />} />

      </Routes>

      <Footer />
    </>
  );
};

export default App;
