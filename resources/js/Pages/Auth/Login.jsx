// React
import { router, usePage, Head, Link } from '@inertiajs/react'
import React, { useState } from 'react';
import { Button, Card, Container, Form, Row } from "react-bootstrap"

// Components
import NavigationBar from "@/Layouts/NavigationBar"
import Footer from '@/Layouts/Footer';

export default function LogIn() {
  const { errors } = usePage().props;

    
  const [values, setForm] = useState({
      email: "",
      password: "",
      remember: ""
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
      console.log(e)
      router.post('/login', values)
  }
    
  return (
  <>
      <Head title="Login" />
      
      <NavigationBar />
      
      <Container>
          <Row className="justify-content-center">
              <div className="col-md-8 pt-4 pb-4">
                  <Card>
                      <Card.Header className="text-center"><h3>Iniciar sesión</h3></Card.Header>
                      <Card.Body>
                        <Form method="POST" onSubmit={handleSubmit}>
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

                          {/* Recuerdame */}
                          <Form.Group className="mb-3">
                            <Form.Check
                              name="remember"
                              label="Recuérdame"
                              value={values.remember}
                              onChange={handleChange}
                            />
                            {errors.remember && <div><strong>{errors.remember}</strong></div>}
                          </Form.Group>

                          {/* Submit */}
                          <Button type="submit" className="btn btn-primary">Iniciar sesión</Button>

                          {/* Forgot password */}
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