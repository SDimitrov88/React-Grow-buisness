export function Footer() {
    return (
        <footer>
            <div className="container-fluid contacts">

                <div className="informationBox">
                    <img src="img/logo-light.png" alt="" />
                    <h6>
                        Locate us
                    </h6>

                    <p>
                        3964 White River Way behind <br />Salt Lake City, UT <br />84106
                    </p>

                    <span>
                        801-468-2313
                    </span>
                    <br />
                    <span>
                        591-578-1234
                    </span>
                </div>

                <div className="informationBox otherLinks">

                    <h6>
                        Other Links
                    </h6>

                    <ul>
                        <li>
                            About Us
                        </li>

                        <li>
                            Contact Us
                        </li>

                        <li>
                            Pricing
                        </li>

                        <li>
                            Privacy Policy
                        </li>

                        <li>
                            Terms & Conditions
                        </li>
                    </ul>
                </div>

                <div className="informationBox">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6394.980677986439!2d23.255193186576424!3d42.70136217984208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbg!4v1765128285458!5m2!1sen!2sbg"
                        width="400" height="300" style={{border:0}} allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>

            </div>
            <div className="copyright">
                <p>
                    2025 &copy StaBig By Themesdesign
                </p>
            </div>

        </footer>
    )
}