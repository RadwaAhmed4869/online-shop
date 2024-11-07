export default function ({ image, header, paragraph, btnCaption }) {
  return (
    <section id="minaspace" className="col-12 col-md-6 position-relative">
      <div className="position-absolute top-50 ms-5">
        <h2
          className="fw-bold"
          style={{ fontSize: "27px", whiteSpace: "pre-wrap" }}
        >
          {header}
        </h2>
        <p
          className="text-muted my-3"
          style={{ fontSize: "14.5px", whiteSpace: "pre-wrap" }}
        >
          {paragraph}
        </p>
        <button className="rounded border-0 bg-primary text-white mt-3 py-2 px-4">
          <small className="fw-bold" style={{ fontSize: "11.5px" }}>
            {btnCaption}
          </small>
        </button>
      </div>
      <img className="w-100 pb-4" src={image}></img>
    </section>
  );
}
