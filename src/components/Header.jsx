import logo from "../assets/images/logo-dark.png"

export function Header() {
    return (
        <header>
            <nav>
                <div className="container">
                    <div className="row">
                        <div className="col-md-2">
                            <a href="#">
                                <img src={logo} className="logo" alt="logo" />
                            </a>
                        </div>

                        <div className="col-md-7" className="navigation">
                            <ul>
                                <li>
                                    <a href="#">Home</a>
                                </li>

                                <li>
                                    <a href="#">Features</a>
                                </li>

                                <li>
                                    <a href="#">Services</a>

                                </li>

                                <li>
                                    <a href="#">Faq</a>
                                </li>

                                <li>
                                    <a href="#">Pricing</a>
                                </li>

                                <li>
                                    <a href="#">Client</a>
                                </li>
                                <li>
                                    <a href="#">Join us</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-md-3" className="navigationButton">
                            <button>
                                Contact us
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}