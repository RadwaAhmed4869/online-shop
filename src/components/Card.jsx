import featureIcon from "../assets/feature-icon.png";

export default function Card({ children, plan, btnStyles }) {
  const btnClasses = "btn bg-primary btn-lg w-100 mt-3 fs-6 fw-bold " + btnStyles;

  return (
    <div className="col-12 col-sm-6 col-lg-4 px-5">
      <div className="card border-0">
        <div className="card-body text-center p-3">
          <div className="pb-4 d-flex flex-row-reverse">{children}</div>
          <h4 className="card-title fs-6">{plan.name}</h4>
          <div className=" my-4">
            <p className="d-inline fs-1 fw-bold">{plan.price} </p>
            <p className="d-inline text-muted">/{plan.user}</p>
          </div>
          <hr className="text-line my-4"></hr>
          <ul className="p-0">
            {plan.features.map((feature) => {
              return (
                <span key={Math.random()} className="d-block text-start py-1">
                  <img
                    className="d-inline me-2"
                    height={24}
                    width={24}
                    src={featureIcon}
                  ></img>
                  <small className="d-inline">
                    {feature}
                  </small>
                </span>
              );
            })}
          </ul>
          <a href="#" className={btnClasses}>
            <small>Get Started</small>
          </a>
        </div>
      </div>
    </div>
  );
}
