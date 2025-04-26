import React from "react";

//components
import Banner from '../components/Banner'
import PopularCategories from "../components/PopularCategories"
import Testimonial from "../components/Testimonial"
import Services from "../components/Services"

const Home = () => {
  return (
    <div>
      <Banner />
      <PopularCategories />
      <Testimonial />
      <Services />
    </div>
  );
};

export default Home;
