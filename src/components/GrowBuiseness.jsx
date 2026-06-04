import heroImg from "../assets/images/hero-1-img.png"

export function GrowBuisness () {
    
    return (
         <div className="growBuisness">
        <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-4 growBuisnessLeft">
                <p>
                    <span>
                        Connect With People
                    </span>
                </p>
                <h1>
                    <b>
                        Grow Buisness
                    </b>
                </h1>
                <p>
                    <b> & Boost Your Company</b>
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quasi quos non voluptate nihil,
                    architecto delectus itaque cupiditate iste vel harum ipsum libero doloribus distinctio quisquam
                    impedit inventore fuga quam!
                </p>
                <button>
                    Get Started
                    <i className="bi bi-arrow-right"></i>
                </button>
            </div>

            <div className="col-md-6 col-sm-12">
                <img src={heroImg} alt=""/>
            </div>
        </div>
    </div>
    )
}