// React
import { router, usePage, Head, Link } from '@inertiajs/react'
import React, { useState } from 'react';
import { Button, Card, Container, Form, Row } from "react-bootstrap"

// Components
import NavigationBar from "@/Layouts/NavigationBar"
import Footer from '@/Layouts/Footer';

export default function Register() {
  const { errors } = usePage().props;

    
  const [values, setForm] = useState({
      name: "",
      // username:"",
      email: "",
      password: "",
      password_confirmation: ""
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
      router.post('/register', values)
  }
    
  return (
  <>
      <Head title="Register" />
      
      <NavigationBar />
      
      <Container>
          <Row className="justify-content-center">
              <div className="col-md-8 pt-4 pb-4">
                  <Card>
                      <Card.Header className="text-center"><h3>Registrarse</h3></Card.Header>
                      <Card.Body>
                        <Form method="POST" onSubmit={handleSubmit}>
                          {/* Name */}
                          <Form.Group className="mb-3">
                            <Form.Label htmlFor="name">Nombre</Form.Label>
                            <Form.Control 
                              id="name"
                              type="name"
                              name="name"
                              value={values.name}
                              onChange={handleChange}
                              autoComplete="name"
                              placeholder="Introduce tu nombre"
                            />
                            {errors.name && <div><strong>{errors.name}</strong></div>}
                          </Form.Group>

                          {/* Username */}
                          <Form.Group className="mb-3">
                            <Form.Label htmlFor="username">Username</Form.Label>
                            <Form.Control 
                              id="username"
                              type="username"
                              name="username"
                              value={values.username}
                              onChange={handleChange}
                              autoComplete="username"
                              placeholder="Introduce tu username"
                            />
                            {errors.username && <div><strong>{errors.username}</strong></div>}
                          </Form.Group>
                          
                          {/* Email */}
                          <Form.Group className="mb-3">
                            <Form.Label htmlFor="email">Email</Form.Label>
                            <Form.Control 
                              id="email"
                              type="email"
                              name="email"
                              value={values.email}
                              onChange={handleChange}
                              autoComplete="email"
                              placeholder="Introduce tu email"
                            />
                            {errors.email && <div><strong>{errors.email}</strong></div>}
                          </Form.Group>

                          {/* Password */}
                          <Form.Group className="mb-3">
                            <Form.Label htmlFor="password">Contraseña</Form.Label>
                            <Form.Control 
                              id="password"
                              type="password"
                              name="password"
                              value={values.password}
                              onChange={handleChange}
                              autoComplete="password"
                              placeholder="Introduce tu contraseña"
                            />
                            {errors.password && <div><strong>{errors.password}</strong></div>}
                          </Form.Group>

                          {/* REPEAT - Password */}
                          <Form.Group className="mb-3">
                            <Form.Label htmlFor="password-confirm">Contraseña</Form.Label>
                            <Form.Control 
                              id="password_confirmation"
                              type="password"
                              name="password_confirmationation"
                              value={values.password_confirmation}
                              onChange={handleChange}
                              autoComplete="password_confirmation"
                              placeholder="Repita la contraseña"
                            />
                            {errors.password_confirmation && <div><strong>{errors.password_confirmation}</strong></div>}
                          </Form.Group>

                          {/* Submit */}
                          <Button type="submit" className="btn btn-primary">Confimar</Button>

                          {/* Alredy Login */}
                          <Form.Text className="ms-3">
                            <Link href="/forgot-password">Olvidaste la contraseña?</Link>
                          </Form.Text>
                        </Form>
                      </Card.Body>
                  </Card>
              </div>
          </Row>
      </Container>
      
      <Footer />
  </>
  )
}