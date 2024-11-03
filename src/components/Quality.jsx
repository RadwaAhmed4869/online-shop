import quality1 from "../assets/quality1.png"
import quality2 from "../assets/quality2.png"
import quality3 from "../assets/quality3.png"

export default function Quality(){
    return (
        <div className="containe-lg px-xxl-5">
        <div className="row justify-content-around">
            <div className="col-12 col-lg-3 py-5">
                <div className="row">
                <div className="col-3"><img src={quality1}/></div>
                    <div className="col-8">
                        <h5 className="fw-bold">Top quality</h5>
                        <small className="text-muted">
                        Lorem ipsum det, consec tetur
                        adipiscing elit duis nec fringi
                        </small>
                    </div>
                </div>
            </div>
            <div className="col-12 col-lg-3 py-5">
                <div className="row">
                    <div className="col-3"><img src={quality2}/></div>
                    <div className="col-8">
                        <h5 className="fw-bold">Mix and match</h5>
                        <small className="text-muted">
                        Lorem ipsum det, adipiscing elit
                        duis nec fringi consec tetur
                        </small>
                    </div>
                </div>
            </div>
            <div className="col-12 col-lg-3 py-5">
                <div className="row">
                    <div className="col-3"><img src={quality3}/></div>
                    <div className="col-8">
                        <h5 className="fw-bold">Shipping worldwide</h5>
                        <small className="text-muted">
                        Lorem ipsum det, duis nec fringi
                        consec tetur adipiscing elit
                        </small>
                    </div>
                </div>
            </div>
           
        </div>
    </div>
    )
    
}