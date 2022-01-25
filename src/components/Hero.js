import Card from 'react-bootstrap/Card'
import image from '../images/hero_image.png'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Flag from '../images/flag.png'
import Form from 'react-bootstrap/Form'
import { FormGroup } from 'react-bootstrap/FormGroup'

function Hero() {
    return (
        <div>
            <Card className="heroCard">
                <Card.Img src={image} alt="Card image" className='heroImage'
                    style={{ "height": "400px", "width": "fit-content" }}
                />
                <Card.ImgOverlay className='heroText'>
                    <Dropdown as={ButtonGroup} className='countryDrop'>
                        <Button variant="info" className='dropButton'><img src={Flag} style={{ "height": "15px", "width": "15px", "marginBottom": "5px" }} /></Button>
                        <Dropdown.Toggle split variant="info" id="dropdown-split-basic" className='dropArrow' />
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">US</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">CA</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Card.Title className='heroTitle'>Order groceries for delivery or pickup today</Card.Title>
                    <Card.Text className='heroFinePrint'>
                        Whatever you want from local stores, brought right to your door.
                    </Card.Text>
                    <Form>
                        <Form.Group className="mb-3" controlId="formGridAddress1" style={{ width: "20%", marginLeft: "7%" }}>
                            <Form.Label></Form.Label>
                            <Form.Control placeholder="Enter your address" />
                        </Form.Group>
                    </Form>
                </Card.ImgOverlay>
            </Card>
        </div>
    )
}

export default Hero