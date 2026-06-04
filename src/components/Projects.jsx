import SubscribeImage from '../assets/images/subscribe-img.png'
import brandLogo1 from '../assets/images/brand-logo-1.png'
import brandLogo2 from '../assets/images/brand-logo-2.png'
import brandLogo3 from '../assets/images/brand-logo-3.png'
import brandLogo4 from '../assets/images/brand-logo-4.png'

export function Projects() {
    return (
        <div className="container projectOverTheWorld">
            <div className="project">
                <div className="projectLeft">
                    <span>
                        <b>Recent</b>
                    </span>

                    <h2>
                        5000+ Project <br /> all over the world
                    </h2>

                    <p>
                        Join the community now!
                    </p>

                    <form action="submit">
                        <label for="submit"></label>
                        <input type="email" placeholder="enter email" />
                    </form>
                    <br />

                    <button>
                        Submit
                        <i className="bi bi-send-arrow-up"></i>
                    </button>
                </div>

                <div v className="projectRight">
                    <img src={SubscribeImage} alt="" />
                </div>
            </div>

            <div className="companies">
                <img src={brandLogo1} alt="" />
                <img src={brandLogo2} alt="" />
                <img src={brandLogo3} alt="" />
                <img src={brandLogo4} alt="" />
            </div>
        </div>
    )
}