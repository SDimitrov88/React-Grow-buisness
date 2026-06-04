import customerSupportImage from '../assets/images/chat.png'

export function CustomerSupport() {

    return (
        <div className="container-fluid customerSupport">
            <div className="row">
                <div className="col-md-5 leftSide">
                    <img src={customerSupportImage} alt=""/>
                </div>

                <div className="col-md-7 custumerSupportRightSide">
                    <h3>
                        Customer support is our main priority for your growth at every stage
                    </h3>
                    <p>
                        We're always here to help you.
                    </p>

                    <div className="innerBoxes">
                        <div className="customerSupportBox">

                            <i className="bi bi-star"></i>
                            <h5><b>4.9</b></h5>

                            <h6>
                                John Smith
                            </h6>
                            <p>
                                Quaerat eligendi volupatale sapiente reciendis.
                            </p>
                        </div>

                        <div className="customerSupportBox">
                            <i className="bi bi-award"></i>
                            <h5><b>Awards</b></h5>

                            <h6>
                                2895*
                            </h6>
                            <p>
                                Volupatale sapiente reiciendis provident atque.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}