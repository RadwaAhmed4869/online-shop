import { useState } from "react";

import NavBar from "./components/NavBar.jsx";
import Price from "./components/Price.jsx";
import Shop from "./components/Shop.jsx";
import Products from "./components/Products.jsx";
// import { DUMMY_PRODUCTS } from "./dummy-products.js";

function App() {
  return (
    <>
      <NavBar></NavBar>

      <Shop />

      <Products />

      <Price></Price>
    </>
  );
}

export default App;
