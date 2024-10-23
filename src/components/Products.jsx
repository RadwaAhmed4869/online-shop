import Product from "./Product";
import { DUMMY_PRODUCTS } from "../dummy-products";

export default function Products() {
  return (
    <div
      className="container-lg py-5 mb-5"
      style={{ paddingRight: "5.5rem", paddingLeft: "5.5rem" }}
    >
      <div className="text-center py-4">
        <h2 className="fw-bold">Featured products</h2>
        <p className="text-muted" style={{ fontSize: "17px" }}>
          What’s more, we do it right!
        </p>
      </div>

      <div className="text-center">
        <div className="row justify-content-between">
          {DUMMY_PRODUCTS.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
        </div>
      </div>
    </div>
  );
}
