export default function ShopProduct({ image, btnCaption }) {
  return (
    <div className="position-relative">
      <button
        className="position-absolute rounded shadow border-0 bg-white py-2 px-4"
        style={{
          top: "70%",
          left: "50%",
          transform: "translate(-50%)",
          zIndex: "2",
        }}
      >
        <small className="fw-bold" style={{ fontSize: "11.5px" }}>
          {btnCaption}
        </small>
      </button>
      <img className="w-100 pb-4" src={image}></img>
    </div>
  );
}
