// React
import { Head } from '@inertiajs/react'
import { Container, Row, Button } from "react-bootstrap"

// Components
import NavigationBar from "@/Layouts/NavigationBar";
import Footer from '@/Layouts/Footer';
import SopaLetras from './Juegos/SopaLetras';


export default function Play() {

    return (
        <>
            <Head title="EscapeRoom -> 1 -> Play" />
          
            <NavigationBar />
    
            <Container className="pt-3 pb-3">
                <SopaLetras />
            </Container>

            <Footer />
        </>
    )
}