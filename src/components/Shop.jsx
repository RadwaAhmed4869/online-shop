import product1 from "../assets/shop-product-1.png";
import product2 from "../assets/shop-product-2.png";
import product3 from "../assets/shop-product-3.png";
import product4 from "../assets/shop-product-4.png";
import product5 from "../assets/shop-product-5.png";

import ShopProduct from "./ShopProduct";

export default function Shop() {
  return (
    <div className="container-lg px-xxl-5">
      <div className="text-center p-5">
        <div className="row justify-content-between">
          <div className="col">
            <ShopProduct image={product1} btnCaption="Shop Hoodies" />
            <ShopProduct image={product2} btnCaption="Shop Tanktop" />
          </div>
          <div className="col-6">
            <ShopProduct image={product3} btnCaption="Shop T-Shirt" />
          </div>
          <div className="col">
            <ShopProduct image={product4} btnCaption="Shop Sweater" />
            <ShopProduct image={product5} btnCaption="Shop Designer" />
          </div>
        </div>
      </div>
    </div>
  );
}
