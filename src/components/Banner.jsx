import leftBanner from "../assets/left-banner.png";
import rightBanner from "../assets/right-banner.png";

export default function Banner () {
  return (
    <section id="minaspace" className="row g-2">
      <div className="col-12 col-md-6 d-none d-xl-block position-relative">
        <img className="w-100 pb-4" src={leftBanner}></img>
        <div className="position-absolute top-50 ms-5">
          <h1 className="fw-bold h1">
          T-shirt printing
          <br />made easy.
          </h1>
          <p className="text-muted my-3" >
          Create your design for your
          <br />online business
          </p>
          <button className="btn btn-sm rounded border-0 bg-primary text-white mt-3 py-2">
            <small className="fw-bold px-4" style={{ fontSize: "11.5px" }}>
            Create T-shirt
            </small>
          </button>
        </div>
      </div>

      <div className="col-12 col-md-6 d-none d-xl-block position-relative">
        <img className="w-100 pb-4" src={rightBanner}></img>
        <div className="position-absolute top-50 ms-5">
          <h1 className="fw-bold h1" >
          Marina
          <br />Test
          </h1>
          <p className="text-muted my-3" >
          Print shirts for yourself or your
          <br />creative works
          </p>
          <button className="btn btn-sm rounded border-0 bg-primary text-white mt-3 py-2">
            <small className="fw-bold px-4" style={{ fontSize: "11.5px" }}>
            Shop Now
            </small>
          </button>
        </div>
      </div>


      <div className="col-12 col-md-6 d-block d-xl-none">
        <img className="w-100 pb-4" src={leftBanner}></img>
        <div className="ms-5 mb-5">
          <h2 className="fw-bold h2" style={{ whiteSpace: "pre-wrap" }}>
          T-shirt printing
          made easy.
          </h2>
          <p className="text-muted my-3" style={{ whiteSpace: "pre-wrap" }}>
          Create your design for your
          online business
          </p>
          <button className="btn btn-sm rounded border-0 bg-primary text-white py-2">
            <small className="fw-bold px-4" style={{ fontSize: "11.5px" }}>
            Create T-shirt
            </small>
          </button>
        </div>

      </div>
      <div className="col-12 col-md-6 d-block d-xl-none">
        <img className="w-100 pb-4" src={rightBanner}></img>
        <div className="ms-5">
          <h2 className="fw-bold h2" style={{ whiteSpace: "pre-wrap" }}>
          Marina
          Test
          </h2>
          <p className="text-muted my-3" style={{ whiteSpace: "pre-wrap" }}>
          Print shirts for yourself or your
          creative works
          </p>
          <button className="btn btn-sm rounded border-0 bg-primary text-white py-2">
            <small className="fw-bold px-4" style={{ fontSize: "11.5px" }}>
            Shop Now
            </small>
          </button>
        </div>
      </div>

      
    </section>
  );
}
