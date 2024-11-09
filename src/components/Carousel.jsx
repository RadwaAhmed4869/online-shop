import ReviewCard from "./ReviewCard";
import { Reviews } from "../data/Reviews.js";

import backgroundImage from "../assets/cbg.png";

export default function Carousel() {
  return (
    <div
      className="py-5"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div id="reviewCarousel" className="container-lg px-xxl-5 py-5">
        <h1 className="fw-bold text-center pt-4">What People Are Saying</h1>
        <p className="text-muted lh-lg text-center pb-4">
          We provide support for more than 15K+ Businesses.
        </p>
        <div id="reviewCarousel" className="carousel slide">
          {/* <ol className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#reviewCarousel"
              data-bs-slide-to="0"
              className="rounded-circle border border-dark active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#reviewCarousel"
              data-bs-slide-to="1"
              className="rounded-circle bg-dark"
              aria-label="Slide 2"
            ></button>
          </ol> */}

          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="card-group gap-4">
                {Reviews.slice(0, 3).map((review) => {
                  return (
                    <ReviewCard
                      key={review.id}
                      image={review.image}
                      title={review.name}
                      subtitle={review.position}
                      text={review.text}
                    />
                  );
                })}
              </div>
            </div>
            <div className="carousel-item">
              <div className="card-group gap-3">
                {Reviews.slice(3, 6).map((review) => {
                  return (
                    <ReviewCard
                      key={review.id}
                      image={review.image}
                      title={review.name}
                      subtitle={review.position}
                      text={review.text}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
