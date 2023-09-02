// React
import { usePage, Head } from '@inertiajs/react'
import { Image, Container, Row, Card } from "react-bootstrap"

// Components
import NavigationBar from "@/Layouts/NavigationBar"
import Footer from '@/Layouts/Footer';

export default function IndexProfile(info) {
    const { auth } = usePage().props;
    console.log(info.user.avatar);

    return (
    <>
        <Head title="Profile" />
        
        <NavigationBar />

        <Container className="pt-3">
            <Card>
                <Card.Header>
                    <Row className="text-center pt-2">
                        <h2>{auth.user.name}</h2>
                    </Row>
                </Card.Header>
                <Row className="justify-content-center pt-4 pb-3">
                {
                info.user.avatar == 'admin.png'
                    ? <img src='/assets/img/admin.png' alt=" avatar" className="rounded-circle" style={{ width: '7.5rem' }}/>
                    : info.user.avatar == 'avatar.jpg'
                        ? <img src='/assets/img/avatar.jpg' alt=" avatar" className="rounded-circle" style={{ width: '7.5rem' }}/>
                        : <img src={"/storage/assets/img/" + info.user.avatar} alt="custom_avatar" className="rounded-circle" style={{ width: '7.5rem' }}/>
                }
                </Row>
                <Row className="text-center pb-3">
                    <h4>{info.user.avatar}</h4>
                </Row>
            </Card>
                <Row className="text-center pt-3 pb-3">
                    <div className="d-grid">
                        <a href="/perfil/edit" className="btn btn-primary btn-block btn-lg">Cambiar datos del perfil</a>
                    </div>
                </Row>
        </Container>

        <Footer />
    </>
    )
}