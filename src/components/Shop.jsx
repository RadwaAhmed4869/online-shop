import product1 from "../assets/shop-product-1.png";
import product2 from "../assets/shop-product-2.png";
import product3 from "../assets/shop-product-3.png";
import product4 from "../assets/shop-product-4.png";
import product5 from "../assets/shop-product-5.png";

import ShopProduct from "./ShopProduct";

export default function Shop() {
  return (
    <section id="shop" className="container-lg">
      <div className="text-center p-5">
        <div className="row justify-content-center">
          <div className="col-8 col-md-3">
            <ShopProduct image={product1} btnCaption="Shop Hoodies" topPercentage="67%" />
            <ShopProduct image={product2} btnCaption="Shop Tanktop" topPercentage="67%" />
          </div>
          <div className="col-8 col-md-6">
            <ShopProduct image={product3} btnCaption="Shop T-Shirt" topPercentage="83%" />
          </div>
          <div className="col-8 col-md-3">
            <ShopProduct image={product4} btnCaption="Shop Sweater" topPercentage="67%" />
            <ShopProduct image={product5} btnCaption="Shop Designer" topPercentage="67%" />
          </div>
        </div>
      </div>
    </section>
  );
}
