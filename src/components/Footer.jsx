import brandLogo from "../assets/mina-space.png";
import footer from "../assets/footer.png";

export default function () {
  return (
    <section style={{ backgroundColor: "#F5F5F5", lineHeight: "1.7rem" }}>
      <div class="container-lg bg-muted">
        <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 px-5 pt-5 my-4 justify-content-between">
          <div class="col mb-3">
            <img src={brandLogo} className="my-3" height="28px"></img>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a
                  href="#"
                  class="nav-link p-0 text-body-secondary"
                  style={{ fontSize: "13px" }}
                >
                  hello@minaspace.io
                </a>
              </li>
              <li class="nav-item mb-2">
                <a
                  href="#"
                  class="nav-link p-0 text-black fw-bold"
                  style={{ fontSize: "15px" }}
                >
                  +02 036 038 3996
                </a>
              </li>
              <li class="nav-item mb-2">
                <a
                  href="#"
                  class="nav-link p-0 text-body-secondary"
                  style={{ fontSize: "13px" }}
                >
                  3665 Paseo Place, Suite 0960 San Diego
                </a>
              </li>
            </ul>
          </div>

          <div class="col mb-3">
            <h5 className="fw-bold my-3" style={{ fontSize: "17px" }}>
              Information
            </h5>
            <ul class="nav flex-column" style={{ fontSize: "13px" }}>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                  About us
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                  Our Blog
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                  Start a Return
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          <div class="col mb-3">
            <h5 className="fw-bold my-3" style={{ fontSize: "17px" }}>
              Useful links
            </h5>
            <ul class="nav flex-column" style={{ fontSize: "13px" }}>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                  My Account
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                  Print Provider
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                  Become a Partner
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                  Custom Products
                </a>
              </li>
            </ul>
          </div>

          <div class="col mb-3">
            <h5 className="fw-bold my-3" style={{ fontSize: "17px" }}>
              Newsletter
            </h5>
            <ul class="nav flex-column" style={{ fontSize: "13px" }}>
              <li class="nav-item">
                <a href="#" class="nav-link p-0 text-body-secondary">
                  Get the latest news, events & more delivered to your inbox.
                </a>
              </li>
              <li class="nav-item my-2">
                <div class="shadow-sm rounded input-group mb-3">
                  <input
                    type="text"
                    placeholder="Your email address"
                    class="form-control border-0 text-body-secondary"
                    id="newsletter-input"
                    style={{ fontSize: "12.5px" }}
                  />
                  <button class="btn" type="button"></button>
                </div>
              </li>
            </ul>
          </div>
        </footer>
        <div className="d-flex justify-content-center">
          <img src={footer} height="28px" width="313"></img>
        </div>
        <div className="d-flex justify-content-center">
          <p className="text-body-secondary my-4" style={{ fontSize: "13px" }}>
            © 2022 MinaSpace. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
