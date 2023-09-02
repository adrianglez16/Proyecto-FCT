// React
import { Link } from "@inertiajs/react"
import { Container, Row, Col } from "react-bootstrap"

export default function CallToAction() {
  return (
    <Container className="position-relative pb-4 py-5" style={{ backgroundColor:'grey' }}>
        <Row className="text-center justify-content-center pt-3 pb-3">
            <Col xl={6}>
                <h2 className="mb-4">¿Preparado para empezar?</h2>
                <Link href="/register" className="btn btn-primary btn-lg" role="button">¡Regístrate ahora!</Link>
            </Col>
        </Row>
    </Container>
  )
}