export default function Product({ product }) {
  return (
    <div className="col col-md-6 col-lg-4 col-xxl-3">
      <img
        className="mb-3 rounded-4"
        src={product.image}
        height="67%"
        // style={{ width: "fit-content", height: "fit-content" }}
        // width="297px"
      ></img>
      <p className="fw-bold">
        {product.title}
      </p>
      <p className="fw-bold">
        {product.price}
      </p>
    </div>
  );
}
