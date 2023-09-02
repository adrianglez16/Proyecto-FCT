// React
import { Head } from '@inertiajs/react'
import { Container, Row, Button } from "react-bootstrap"

// Components
import NavigationBar from "@/Layouts/NavigationBar";
import Footer from '@/Layouts/Footer';


export default function Juego() {

    return (
        <>
            <Head title="EscapeRoom -> 1 -> Play" />
          
            <NavigationBar />
    
            <Container className="pt-3 pb-3">
                <h1>Juego en Desarrollo. Esperalo con ansias</h1>
            </Container>

            <Footer />
        </>
    )
}