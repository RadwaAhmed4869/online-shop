import heading from "../assets/heading.png";
import fireHeading from "../assets/fire-heading.png";


export default function Header(){
    return (
    <header class=" pt-2 bg-light">
        <div class="container">
          <div class="d-flex flex-wrap justify-content-around">
            <ul class="nav list-unstyled d-flex gap-1">
                <li class="ms-3"><a class="text-line" href="#"><i class="bi bi-twitter"></i></a></li>
                <li class="ms-3"><a class="text-line" href="#"><i class="bi bi-facebook"></i></a></li>
                <li class="ms-3"><a class="text-line" href="#"><i class="bi bi-instagram"></i></a></li>
                <li class="ms-3"><a class="text-line" href="#"><i class="bi bi-youtube"></i></a></li>
            </ul>
            
            <div className="d-flex gap-1 align-items-baseline">
                <img src={fireHeading} height="18px" width="18px"></img>
                <p className="fw-bold">Free shipping on all U.S. orders $50+</p>
            </div>
    
            <div class="text-end">
              <button type="button" class="btn btn-sm px-3 fw-bold">Login</button>
              <button type="button" class="btn btn-sm bg-dark text-white px-3">Sign-up</button>
            </div>
          </div>
        </div>
    </header>
    );
}