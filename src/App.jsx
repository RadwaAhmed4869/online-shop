import { useState } from "react";

import NavBar from "./components/NavBar.jsx";
import Price from "./components/Price.jsx";
import Shop from "./components/Shop.jsx";
import Products from "./components/Products.jsx";
import Banner from "./components/Banner.jsx";

import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Quality from "./components/Quality.jsx";
import Carousel from "./components/Carousel.jsx";

function App() {
  return (
    <>
      <Header />
      <NavBar />

      <Banner />

      <Quality />

      <Shop />

      <Products />

      <Price />

      <Carousel />

      <Footer />
    </>
  );
}

export default App;
