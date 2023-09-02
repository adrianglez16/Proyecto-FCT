// React
import { router, usePage, Head } from '@inertiajs/react'
import React, { useState } from 'react';
import { Button, Form, Card, Container, Nav, Row, Alert } from "react-bootstrap"

// Components
import NavigationBar from "@/Layouts/NavigationBar"
import Footer from '@/Layouts/Footer';


export default function EditProfile() {
    const { flash } = usePage().props;
    const { errors } = usePage().props;

    
    const [values, setForm] = useState({
        old_password: "",
        new_password: "",
        new_password_confirmation: ""
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
        router.post('/perfil/edit/update-password', values)
    }

    return (
    <>
        <Head title="Update Profile" />
        
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
                                <Nav.Link href="#first">Cambiar contraseña</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/perfil/edit/delete">Borrar cuenta</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        </Card.Header>
                        <Card.Body>
                            
                            {flash.message && (
                                <Alert key={'success'} variant={'success'}>
                                    <div>{flash.message}</div>
                                </Alert>
                            )}
                            
                            <Card>
                                <Card.Body>
                                    <Form method="POST" onSubmit={handleSubmit}>
                                    {/* Current Password */}
                                    <Form.Group className="mb-3">
                                        <Form.Label htmlFor="old_password">Actual contraseña</Form.Label>
                                        <Form.Control 
                                            id="old_password"
                                            type="password"
                                            name="old_password"
                                            value={values.old_password}
                                            onChange={handleChange}
                                            autoComplete="password"
                                            placeholder="Introduce tu actual contraseña"
                                        />
                                        {errors.old_password && <div><strong>{errors.old_password}</strong></div>}
                                    </Form.Group>

                                    {/* New Password */}
                                    <Form.Group className="mb-3">
                                        <Form.Label htmlFor="new_password">Nueva contraseña</Form.Label>
                                        <Form.Control 
                                            id="new_password"
                                            type="password"
                                            name="new_password"
                                            value={values.new_password}
                                            onChange={handleChange}
                                            autoComplete="new_password"
                                            placeholder="Introduce tu nueva contraseña"
                                        />
                                        {errors.new_password && <div><strong>{errors.new_password}</strong></div>}
                                    </Form.Group>

                                    {/* Confirm Password */}
                                    <Form.Group className="mb-3">
                                        <Form.Label htmlFor="new_password_confirmation">Repite la contraseña</Form.Label>
                                        <Form.Control 
                                            id="new_password_confirmation"
                                            type="password"
                                            name="new_password_confirmation"
                                            value={values.new_password_confirmation}
                                            onChange={handleChange}
                                            autoComplete="password"
                                            placeholder="Introduce tu contraseña nuevamente"
                                        />
                                        {errors.new_password_confirmation && <div><strong>{errors.new_password_confirmation}</strong></div>}
                                    </Form.Group>

                                    {/* Submit */}
                                    <Button type="submit" className="btn btn-primary">Cambiar</Button>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Card.Body>
                    </Card>
                </div>
            </Row>
        </Container>

        <Footer />
    </>
    )
}