import Product from "./Product";
import { DUMMY_PRODUCTS } from "../dummy-products";

export default function Products() {
  return (
    <section
      id="products"
      className="container-lg px-xxl-5 py-5 mb-5"
    >
      <div className="text-center pt-4 pb-5">
        <h2 className="fw-bold">Featured products</h2>
        <p className="text-muted" style={{ fontSize: "17px" }}>
          What’s more, we do it right!
        </p>
      </div>

      <div className="text-center">
        <div className="row g-1 justify-content-center">
          {DUMMY_PRODUCTS.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
        </div>
      </div>
    </section>
  );
}
