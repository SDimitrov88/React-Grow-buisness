import FaqImage from '../assets/images/faq.png'

export function AskedQuestions() {
    return (
        <div className="askedQuestions">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 questionsLeftSide">
                        <p>
                            <b>Ask Us Anything</b>
                        </p>

                        <h3>
                            Frequently Asked Questions
                        </h3>
                        <div id="emptyAskedQuestions">

                        </div>

                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <h6>
                                            <b>Can we Put a lot of effort in design?</b>
                                        </h6>
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>
                                            Hight life accusamus terry richardson ad squid. 3 wolf moon officia aue, non
                                            cupidatat skateboard dolar brunch.
                                            Food truck quinoa nesciunt labourm eiusmod. It is a long established fact that a
                                            reader will be distracted by the readable.
                                        </p>

                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        <h6>
                                            <b>The most important of successful website?</b>
                                        </h6>
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>
                                            <strong>This is the second item's accordion body.</strong> It is hidden by
                                            default,
                                            until the collapse plugin adds the appropriate classNamees that we use to style each
                                            element. These classNamees control the overall appearance, as well as the showing
                                            and
                                            hiding via CSS transitions. You can modify any of this with custom CSS or
                                            overriding
                                            our default variables. It's also worth noting that just about any HTML can go
                                            within
                                            the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        <h6>
                                            <b>Submit Your Organisation?</b>
                                        </h6>
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>
                                            <strong>This is the third item's accordion body.</strong> It is hidden by
                                            default,
                                            until the collapse plugin adds the appropriate classNamees that we use to style each
                                            element. These classNamees control the overall appearance, as well as the showing
                                            and
                                            hiding via CSS transitions. You can modify any of this with custom CSS or
                                            overriding
                                            our default variables. It's also worth noting that just about any HTML can go
                                            within
                                            the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFour">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        <h6>
                                            <b>New exhibition at our Museum?</b>
                                        </h6>
                                    </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>
                                            <strong>This is the third item's accordion body.</strong> It is hidden by
                                            default,
                                            until the collapse plugin adds the appropriate classNamees that we use to style each
                                            element. These classNamees control the overall appearance, as well as the showing
                                            and
                                            hiding via CSS transitions. You can modify any of this with custom CSS or
                                            overriding
                                            our default variables. It's also worth noting that just about any HTML can go
                                            within
                                            the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                    <div className="col-md-6 questionsRightSide">
                        <img src={FaqImage} alt="жена" />
                    </div>
                </div>
            </div>
        </div>
    );
}