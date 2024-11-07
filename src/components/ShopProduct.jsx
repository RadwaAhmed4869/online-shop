export default function ShopProduct({ image, btnCaption, topPercentage }) {
  return (
    <div className="position-relative">
      <button
        className="btn btn-sm position-absolute rounded shadow border-0 bg-white"
        style={{
          top: `${topPercentage}`,
          left: "50%",
          transform: "translate(-50%)",
          zIndex: "2",
        }}
      >
        <small className="fw-bold text-nowrap py-2 px-2" style={{ fontSize: "11.5px" }}>
          {btnCaption}
        </small>
      </button>
      <img className="w-100 pb-4" src={image}></img>
    </div>
  );
}
