import { useState } from "react";

import NavBar from "./components/NavBar.jsx";
import Price from "./components/Price.jsx";
import Shop from "./components/Shop.jsx";
// import { DUMMY_PRODUCTS } from "./dummy-products.js";

function App() {
  return (
    <>
      {/* header */}

      {/* navbar */}
      <NavBar></NavBar>

      {/* shop */}
      <Shop />

      {/* price */}
      <Price></Price>
    </>
  );
}

export default App;
