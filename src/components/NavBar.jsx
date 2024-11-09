import brandLogo from "../assets/mina-space.png";
import star from "../assets/star.png";
import cart from "../assets/bag.png";

export default function NavBar() {
  return (
    <nav className="navbar sticky-top bg-white navbar-expand-lg">
      <div className="container-lg">
        <a className="navbar-brand d-lg-none" href="#">
          <img className="mb-2" src={brandLogo} height="42px"></img>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active text-uppercase fw-bold"
                aria-current="page"
                href="#"
                style={{ fontSize: "11.5px" }}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-uppercase fw-bold"
                href="#minaspace"
                style={{ fontSize: "11.5px" }}
              >
                Minaspace
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-uppercase fw-bold"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ fontSize: "11.5px" }}
              >
                Shop
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a
                    className="dropdown-item"
                    href="#shop"
                    style={{ fontSize: "11.5px" }}
                  >
                    Shop
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#products"
                    style={{ fontSize: "11.5px" }}
                  >
                    Featured products
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#pricing"
                    style={{ fontSize: "11.5px" }}
                  >
                    Pricing
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-uppercase fw-bold"
                href="#"
                style={{ fontSize: "11.5px" }}
              >
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-uppercase fw-bold"
                href="#"
                style={{ fontSize: "11.5px" }}
              >
                Contact
              </a>
            </li>
          </ul>

          <a
            className="navbar-brand d-none d-lg-block align-items-center"
            href="#"
          >
            <img className="mb-2" src={brandLogo} height="42px"></img>
          </a>

          <SearchInput />

          <ul className="navbar-nav flex-row mt-4 mt-lg-0 mb-3 mb-lg-0 gap-4 gap-lg-3">
            <li className="nav-item">
              <a className="nav-link position-relative d-inline-block" href="#">
                <img src={star} style={{ width: "20px", height: "20px" }} />
                <p
                  className="position-absolute rounded-circle text-white bg-primary text-center"
                  style={{
                    width: "23px",
                    height: "23px",
                    top: "-10%",
                    left: "55%",
                    zIndex: "2",
                  }}
                >
                  0
                </p>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link position-relative d-inline-block" href="#">
                <img src={cart} style={{ width: "20px", height: "20px" }} />
                <p
                  className="position-absolute rounded-circle text-white bg-primary text-center"
                  style={{
                    width: "23px",
                    height: "23px",
                    top: "-10%",
                    left: "55%",
                    zIndex: "2",
                  }}
                >
                  0
                </p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function SearchInput() {
  return (
    <form className="d-flex ms-auto pe-2 position-relative" role="search">
      <input
        type="search"
        placeholder="Search..."
        aria-label="Search"
        className="form-control rounded border-2 text-body-secondary  px-5 py-2"
        style={{ fontSize: "12.5px" }}
      />
      <i
        className="position-absolute bi bi-search text-black py-2 px-3"
        style={{ left: "0" }}
      ></i>
    </form>
  );
}
