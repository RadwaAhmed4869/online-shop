export default function Product({ product }) {
  return (
    <div className="col col-xxl-3">
      <img
        className="p-4 rounded-"
        src={product.image}
        height="396"
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
