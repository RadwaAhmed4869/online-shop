import quality1 from "../assets/quality1.png"
import quality2 from "../assets/quality2.png"
import quality3 from "../assets/quality3.png"

export default function Quality(){
    return (
        <div className="containe-lg px-xxl-5">
        <div className="row ps-1 justify-content-center justify-content-md-around py-5">
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
    )
    
}

function Info({ image, title, info }) {
    return (
      <div className="col-10 col-md-4 ps-4 py-3">
        <div className="row">
          <div
            className="col-3 col-lg-4"
            style={{ width: "fit-content", height: "fit-content" }}
          >
            <img src={image} />
          </div>
          <div className="col-10 col-lg-7">
            <h5 className="fw-bold">{title}</h5>
            <small className="text-muted">
              {info}
            </small>
          </div>
        </div>
      </div>
    );
  }