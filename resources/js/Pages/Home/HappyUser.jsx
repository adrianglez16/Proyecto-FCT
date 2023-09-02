import { Container, Row, Col } from 'react-bootstrap';

export default function Header() {

    return (

        <section className="testimonials text-center bg-light py-5">
            <Container>
                <h2 className="mb-5">Qué dicen nuestros usuarios...</h2>
                <Row>
                    <Col lg={4}>
                        <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                            <img className="img-fluid rounded-circle mb-3" src="assets/img/testimonials-1.jpg" alt="..." style={{ maxWidth: '12rem' }} />
                            <h5>Nombre Aleatorio</h5>
                            <p className="font-weight-light mb-0">"¡Es fantástico!"</p>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                            <img className="img-fluid rounded-circle mb-3" src="assets/img/testimonials-2.jpg" alt="..." style={{ maxWidth: '12rem' }} />
                            <h5>Nombre Aleatorio</h5>
                            <p className="font-weight-light mb-0">
                                dasasddasdsdaasd
                            </p>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                            <img className="img-fluid rounded-circle mb-3" src="assets/img/testimonials-3.jpg" alt="..." style={{ maxWidth: '12rem' }} />
                            <h5>Nombre Aleatorio</h5>
                            <p className="font-weight-light mb-0">
                                "¡Muchas gracias por poner medio ambiente!"
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}