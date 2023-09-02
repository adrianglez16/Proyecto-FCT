// React
import { Link } from '@inertiajs/react';
import { Container, Row, Col } from "react-bootstrap"

export default function Footer() {
  return (
    <footer className="footer bg-dark text-light pt-5 pb-5">
      <Container>
        <Row>
          <Col lg="6" className="h-100 text-center text-lg-start my-auto">
            <ul className="list-inline mb-2">
              <li className="list-inline-item"><Link href="#!" className="footer_a">Quiénes somos</Link></li>
              <li className="list-inline-item">⋅</li>
              <li className="list-inline-item"><Link href="#!" className="footer_a">Contacto</Link></li>
              <li className="list-inline-item">⋅</li>
              <li className="list-inline-item"><Link href="#!" className="footer_a">Términos de uso</Link></li>
              <li className="list-inline-item">⋅</li>
              <li className="list-inline-item"><Link href="#!" className="footer_a">Política de privacidad</Link></li>
            </ul>
            <p className="text-muted small mb-4 mb-lg-0">© Platita 2023. Todos los derechos reservados.</p>
          </Col>
          <Col lg="6" className="h-100 text-center text-lg-end my-auto">
            <ul className="list-inline mb-0">
              <li className="list-inline-item me-4">
                <a href="https://www.facebook.com/platitainformatica"><i className="bi-facebook fs-3 footer_a" /></a>
              </li>
              <li className="list-inline-item me-4">
                <a href="https://twitter.com/platita_"><i className="bi-twitter fs-3 footer_a" /></a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.instagram.com/platita_si/"><i className="bi-instagram fs-3 footer_a" /></a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
