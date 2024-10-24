import brandLogo from "../assets/mina-space.png";

export default function NavBar() {
  return (
    <nav className="navbar sticky-top bg-white navbar-expand-lg ">
      <div className="container-lg px-lg-5">
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

          <a className="navbar-brand align-items-center" href="#">
            <img className="mb-2" src={brandLogo} height="48px"></img>
          </a>

          <form className="d-flex ms-auto" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
      </div>
    </nav>
  );
}
