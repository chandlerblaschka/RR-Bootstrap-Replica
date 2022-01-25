import Card from 'react-bootstrap/Card'
import image from '../images/hero_image.png'
function Hero() {
    return (
        <div>
            <Card className="" style={{ "display": "flex", "background": "DEEDD6" }}>
                <Card.Img src={image} alt="Card image"
                    style={{ "height": "500px", "width": "fit-content", "display": "flex", "alignItems": "flex-end" }}
                />
                <Card.ImgOverlay>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
            </Card>
        </div>
    )
}

export default Hero