import featureIcon from "../assets/feature-icon.png";

export default function Card({ children, plan }) {
  return (
    <div className="col-12 col-sm-6 col-lg-4 col-xxl-3">
      <div className="card border-0">
        <div className="card-body text-center py-4">
          <h4 className="card-title">{plan.name}</h4>
          <div className=" my-4">
            <p className="d-inline display-5 fw-bold">{plan.price} </p>
            <p className="d-inline text-muted">/{plan.user}</p>
          </div>
            <hr className="text-muted my-4"></hr>
          <ul>
            {plan.features.map((feature) => {
              return (
                <span className="d-block text-start">
                  <img className="d-inline me-2" src={featureIcon}></img>
                  <p className="d-inline text-start" key={Math.random()}>
                    {feature}
                  </p>
                </span>
              );
            })}
          </ul>
          <a href="#" className="btn text-light bg-success btn-lg w-100 mt-3">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
}
