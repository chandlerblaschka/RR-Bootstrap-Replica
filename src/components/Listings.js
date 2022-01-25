import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Flag from '../images/flag.png'

function Listings() {

    const buttonStyle = {
        display: "flex",
        backgroundColor: "white",
        borderColor: "lightgray",
        color: "black",
        alignItems: "center",
        height: "96px",
        width: "400px"
    }


    return (
        <div>
            <h2 style={{ fontWeight: "normal", margin: "25px" }}>Browse stores in Milwaukee</h2>
            <Container>
                <Row>
                    <Col sm>
                        <Button variant="primary" style={buttonStyle}>
                            <div>
                                <img src={Flag} style={{ height: "60px", width: "60px" }} />
                            </div>
                            <div style={{ textAlign: "left", paddingLeft: "20px" }}>
                                <h5>ALDI</h5>
                                <p>Delivery by 4:05pm - Pickup 5.6mi</p>
                            </div>
                        </Button>
                    </Col>
                    <Col sm>
                        <Button variant="primary" style={buttonStyle}>
                            <div>
                                <img src={Flag} style={{ height: "30px", width: "30px" }} />
                            </div>
                            <div>
                                Other content
                            </div>
                        </Button>
                    </Col>
                    <Col sm>
                        <Button variant="primary" style={buttonStyle}>
                            <div>
                                <img src={Flag} style={{ height: "30px", width: "30px" }} />
                            </div>
                            <div>
                                Other content
                            </div>
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Listings