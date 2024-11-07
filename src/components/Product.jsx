export default function Product({ product }) {
  return (
    <div className="col col-md-6 col-lg-4 col-xxl-3">
      <img
        className="p-4 rounded-5"
        src={product.image}
        height="70%"
        // width="297px"
      ></img>
      <p className="fw-bold" style={{ fontSize: "15px" }}>
        {product.title}
      </p>
      <p className="fw-bold" style={{ fontSize: "15px" }}>
        {product.price}
      </p>
    </div>
  );
}
