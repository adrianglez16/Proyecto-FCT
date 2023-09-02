// React
import { Head, router, usePage, useForm } from '@inertiajs/react'
import React, { useState } from 'react';
import { Container, Row, Button, Form } from "react-bootstrap"

// Components
import NavigationBar from "@/Layouts/NavigationBar";
import Footer from '@/Layouts/Footer';
import Comments from '@/Components/Comments';


export default function Show(props) {

    const { flash } = usePage().props;
    const { SR } = usePage().props;
    const { comments } = usePage().props;
    const { usuarios } = usePage().props;

    // console.log(flash.errormessage);

    const [values, setForm] = useState({
        password: "",
        sr_id: SR.id
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
        // console.log(values)
        router.post('/escape-room/check', values)
    }

    return (
        <>
            <Head title="EscapeRoom -> 1" />
          
            <NavigationBar />
    
            <Container className="pt-3 pb-3">
                <header className="masthead">
                    <div className="container position-relative">
                        <div className="row justify-content-center">
                            <div className="col-xl-10">
                                <div className="text-center text-white">
                                    <h1 className="mb-5">{SR.name}</h1>
                                    <h4 className="mb-5">{SR.rules}</h4>

                                    {
                                    SR.psw == null
                                        ? <a href={"/juego"} class="btn btn-lg btn-primary">Comenzar</a>
                                        : <Form method="POST" onSubmit={handleSubmit}>
                                        {/* Password */}
                                        <Form.Group className="mb-3">
                                        <Form.Label htmlFor="password">Accede al EscapeRoom</Form.Label>
                                        <Form.Control 
                                            id="password"
                                            type="password"
                                            name="password"
                                            value={values.password}
                                            onChange={handleChange}
                                            autoComplete="password"
                                            placeholder="Introduce la contraseña"
                                        />
                                        {flash.errormessage && <div><strong>{flash.errormessage}</strong></div>}
                                    </Form.Group>
                                        <Button type="submit" className="btn btn-primary">Confirmar</Button>
                                    </Form>
                                    // <a href={"/escape-room/show/" + post.id} class="btn btn-lg btn-primary">Comenzar</a>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <Row>
                    <Comments comments={comments} usuarios={usuarios}/>        
                </Row>
            </Container>

            <Footer />
        </>
    )
}