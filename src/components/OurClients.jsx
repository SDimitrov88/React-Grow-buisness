import ClientsImage from '../assets/images/quotation.png'

export function OurClients() {
    return (
        <div className="container ourClient">

            <h3>
                Our Client Says
            </h3>
            <p>
                <span>
                    Here From Our Members
                </span>
            </p>

            <img src={ClientsImage} alt="" />
            <h4>
                Emily B. Parham
            </h4>
            <p>
                Senior Web Designer
            </p>

            <hr />

            <div className="info">
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam soluta error quo velit deleniti eius
                    commodi modi. Rerum sint unde nisi beatae ipsum. Ratione vitae natus qui laborum facilis facere!
                </p>
            </div>

            <div className="greenDecoration">
                <div className="box1">
                </div>

                <div className="box2">
                </div>

                <div className="box3">
                </div>
            </div>

        </div>
    )
}