import heading from "../assets/heading.png";
import fireHeading from "../assets/fire-heading.png";


export default function Header(){
    return (
    <header className="pt-2 bg-light">
        <div className="container-lg">
          <div className="d-flex flex-wrap justify-content-between">
            <ul className="nav list-unstyled d-flex gap-1">
                <li className="ms-3"><a className="text-line" href="#"><i className="bi bi-twitter"></i></a></li>
                <li className="ms-3"><a className="text-line" href="#"><i className="bi bi-facebook"></i></a></li>
                <li className="ms-3"><a className="text-line" href="#"><i className="bi bi-instagram"></i></a></li>
                <li className="ms-3"><a className="text-line" href="#"><i className="bi bi-youtube"></i></a></li>
            </ul>
            
            <div className="d-flex gap-1 align-items-baseline">
                <img src={fireHeading} height="18px" width="18px"></img>
                <p className="fw-bold">Free shipping on all U.S. orders $50+</p>
            </div>
    
            <div className="text-end">
              <button type="button" className="btn btn-sm px-3 fw-bold">Login</button>
              <button type="button" className="btn btn-sm bg-dark text-white px-3">Sign-up</button>
            </div>
          </div>
        </div>
    </header>
    );
}