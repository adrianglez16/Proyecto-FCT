// React
import { Link, usePage, router, Head } from '@inertiajs/react';
import { Container, Row, Button, Col, Card } from "react-bootstrap";
// import { redirect } from "react-router-dom";


// Components
import NavigationBar from "@/Layouts/NavigationBar"
import Footer from '@/Layouts/Footer';


export default function ShowProfile() {
    const { profile } = usePage().props;
    const { auth } = usePage().props;
    console.log(profile.avatar);

    return (
        <>
            <Head title="?? Profile" />
        
            <NavigationBar />

            <Container>
                {profile == null &&
                    <>
                        <Row className="text-center pt-4 pb-3">
                            <h1>No existe tal usuario</h1>
                            <h3>Regrese donde y busque otro usuario</h3>
                        </Row>
                    </>
                }

                {profile != null &&
                    <>
                        <Row className="text-center pt-4 pb-3">
                            <h2>{profile.name}</h2>
                        </Row>
                        <Row className="justify-content-center pb-3">
                        {
                        info.user.avatar == 'admin.png'
                            ? <img src='/assets/img/admin.png' alt=" avatar" className="rounded-circle" style={{ width: '7.5rem' }}/>
                            : info.user.avatar == 'avatar.jpg'
                                ? <img src='/assets/img/avatar.jpg' alt=" avatar" className="rounded-circle" style={{ width: '7.5rem' }}/>
                                : <img src={"/storage/assets/img/" + info.user.avatar} alt="custom_avatar" className="rounded-circle" style={{ width: '7.5rem' }}/>
                        }
                        </Row>
                        <Row className="text-center pb-3">
                            <h4>{profile.email}</h4>
                        </Row>
                    </>
                }
            </Container>

            <Footer />
        </>
    )
}