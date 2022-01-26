import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Aldi from '../images/aldi.png'
import Kroger from '../images/kroger.png'
import Sprouts from '../images/sprouts.png'

function Listings() {

    const buttonStyle = {
        display: "flex",
        backgroundColor: "white",
        borderColor: "white",
        color: "black",
        alignItems: "center",
        height: "96px",
        width: "400px",
        borderRadius: "25px"
    }


    return (
        <div>
            <h2 style={{ fontWeight: "300", margin: "40px" }}>Browse stores in Milwaukee</h2>
            <Container>
                <Row>
                    <Col sm>
                        <Button variant="primary" style={buttonStyle} className="listButton">
                            <div style={{ height: "60px", width: "60px", border: "lightgrey 1px solid", borderRadius: "50%", alignItems: "center" }}>
                                <Image src={Aldi} style={{ height: "35px", width: "fit-content", marginTop: "12.5px" }} />
                            </div>
                            <div style={{ textAlign: "left", paddingLeft: "20px" }}>
                                <h5 style={{ margin: "10px 0 0 0" }}>ALDI</h5>
                                <p>Delivery by 4:05pm - Pickup 5.6mi</p>
                            </div>
                        </Button>
                    </Col>
                    <Col sm>
                        <Button variant="primary" style={buttonStyle} className="listButton">
                            <div style={{ height: "60px", width: "60px", border: "lightgrey 1px solid", borderRadius: "50%", alignItems: "center" }}>
                                <Image src={Sprouts} style={{ height: "30px", width: "fit-content", marginTop: "15px" }} />
                            </div>
                            <div style={{ textAlign: "left", paddingLeft: "20px" }}>
                                <h5 style={{ margin: "10px 0 0 0" }}>ALDI</h5>
                                <p>Delivery by 6:30pm</p>
                            </div>
                        </Button>
                    </Col>
                    <Col sm>
                        <Button variant="primary" style={buttonStyle} className="listButton">
                            <div style={{ height: "60px", width: "60px", border: "lightgrey 1px solid", borderRadius: "50%", alignItems: "center" }}>
                                <Image src={Kroger} style={{ height: "20px", width: "fit-content", marginTop: "20px" }} />
                            </div>
                            <div style={{ textAlign: "left", paddingLeft: "20px" }}>
                                <h5 style={{ margin: "10px 0 0 0" }}>Kroger</h5>
                                <p>Delivery by 6:30pm</p>
                            </div>
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Listings