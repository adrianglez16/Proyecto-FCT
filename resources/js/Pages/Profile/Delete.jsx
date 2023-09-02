// React
import { router, usePage, Head } from '@inertiajs/react'
import React, { useState } from 'react';
import { Button, Form, Card, Container, Nav, Row, Modal } from "react-bootstrap"

// Components
import NavigationBar from "@/Layouts/NavigationBar";
import Footer from '@/Layouts/Footer';

export default function EditProfile() {
    const { errors } = usePage().props;

    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [values, setForm] = useState({
        password: ""
    })
  
    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value
        setForm(values => ({
            ...values,
            [key]: value,
        }))
    }
  
    function handleSubmit(e) {
        e.preventDefault()
        console.log(values)
        router.post('/perfil/edit/delete', values)
    }


    return (
    <>
        <Head title="Delete Profile" />
        
        <NavigationBar />

        <Container className="pt-3">
            <Row className="justify-content-center pb-4">
                <div className="col-md-10">
                    <Card>
                        <Card.Header>
                            <Nav variant="tabs" defaultActiveKey="#first">
                                <Nav.Item>
                                    <Nav.Link href="/perfil/edit">Cambiar parametros</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="/perfil/edit/update-password">Cambiar contraseña</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="#first" disabled>Borrar cuenta</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                Una vez tu cuenta haya sido borrada, todos los recursos y datos seran permanentemente borrados. Antes de borrar tu cuenta, por favor descarga cualquier dato o informacion que tu consideres importante antes de eliminarlo.
                            </Card.Text>
                            
                            <Button variant="danger" onClick={handleShow}>
                                BORRAR CUENTA
                            </Button>
        
                        </Card.Body>
                    </Card>
                </div>
            </Row>
        </Container>

        <Footer />
        
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>¿Esta seguro que desea borrar la cuenta?</Modal.Title>
            </Modal.Header>

            <Form method="POST" onSubmit={handleSubmit}>
                <Modal.Body>
                    {/* Mensaje de Aviso */}
                    <p>
                    Una vez tu cuenta haya sido borrada, todos los recursos y datos seran permanentemente borrados. Por favor, <strong>introduce tu contraseña para confirmar</strong> por si desea borrar su cuenta de manera permanente
                    </p>
                    
                    {/* Password */}
                    <Form.Group className="mb-3">
                        <Form.Control 
                            id="password"
                            type="password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            autoComplete="password"
                            placeholder="Introduce su contraseña"
                        />
                        {errors.password && <div><strong>{errors.password}</strong></div>}
                    </Form.Group>
                </Modal.Body>

                <Modal.Footer>
                    {/* Submit */}
                    <Form.Group className="mb-3">
                        <Button variant="info btn-sm" onClick={handleClose}>
                            Cerrar
                        </Button>
                        <Button type="submit" className="btn btn-danger btn-sm">BORRAR</Button>
                    </Form.Group>
                </Modal.Footer>
            </Form>

        </Modal>
    </>
    )
}