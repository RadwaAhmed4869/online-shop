import quality1 from "../assets/quality1.png";
import quality2 from "../assets/quality2.png";
import quality3 from "../assets/quality3.png";

export default function Quality() {
  return (
    <div className="container-lg">
      <div className="row justify-content-center justify-content-md-around py-5">
        <Info
          image={quality1}
          title="Top quality"
          info="Lorem ipsum det, consec tetur adipiscing elit duis nec fringi"
        />
        <Info
          image={quality2}
          title="Mix and match"
          info="Lorem ipsum det, adipiscing elit duis nec fringi consec tetur"
        />
        <Info
          image={quality3}
          title="Shipping worldwide"
          info="Lorem ipsum det, duis nec fringi consec tetur adipiscing elit"
        />
      </div>
    </div>
  );
}

function Info({ image, title, info }) {
  return (
    <div className="col-10 col-md-3 py-3">
      <div className="row">
        <div
          className="col-3 col-xl-4"
          style={{ width: "fit-content", height: "fit-content" }}
        >
          <img src={image} />
        </div>

        <div className="col-10 col-xl-8">
          <h5 className="fw-bold">{title}</h5>
          <small className="d-none d-md-block text-muted">{info}</small>
          <p className="d-md-none text-muted">{info}</p>
        </div>
      </div>
    </div>
  );
}
