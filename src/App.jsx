import { useState } from "react";

import NavBar from "./components/NavBar.jsx";
import Price from "./components/Price.jsx";
import Shop from "./components/Shop.jsx";
import Products from "./components/Products.jsx";
import Banner from "./components/Banner.jsx";

import leftBanner from "./assets/left-banner.png";
import rightBanner from "./assets/right-banner.png";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Quality from "./components/Quality.jsx";

function App() {
  return (
    <>
      <Header />
      <NavBar />

      <div className="row g-2">
        <Banner
          image={leftBanner}
          header="T-shirt printing
made easy."
          paragraph="Create your design for your
online business"
          btnCaption="Create T-shirt"
        />
        <Banner
          image={rightBanner}
          header="Marina
Test"
          paragraph="Print shirts for yourself or your
creative works"
          btnCaption="Shop Now"
        />
      </div>

      <Quality />

      <Shop />

      <Products />

      <Price />

      <Footer />
    </>
  );
}

export default App;
