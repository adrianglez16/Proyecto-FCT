import PrimaryButton from '@/Components/PrimaryButton';
import { Head, Link, useForm } from '@inertiajs/react';
import { Button, Card, Container, Form, Row } from "react-bootstrap"


export default function VerifyEmail2({ status }) {
    const { post, processing } = useForm({});

    const submit = (e) => {
        e.preventDefault();

        post(route('verification.send'));
    };

    return (
        <>
            <Head title="Email Verification" />

            <Container>
                <Row className="justify-content-center mt-5">
                    <div className="col-md-8 pt-4 pb-4">
                        <div class="mt-4 p-5 bg-info text-white rounded">
                            <p>Thanks for signing up! Before getting started, could you verify your email address by clicking on the
                            link we just emailed to you? If you didn't receive the email, we will gladly send you another.</p>
                        

                            {status === 'verification-link-sent' && (
                            <div className="mb-4 mt-4 text-success text-lowercase">
                                A new verification link has been sent to the email address you provided during registration.
                            </div>
                            )}

                            <form onSubmit={submit}>
                                <div className="mt-4 d-flex align-items-center justify-content-between">
                                <button type="submit" className="btn btn-primary" disabled={processing}>
                                    Resend Verification Email
                                </button>

                                    <a
                                    href={route('logout')}
                                    onClick={() => logout()}
                                    className="underline text-lowercase text-secondary"
                                    >
                                    Log Out
                                    </a>
                                </div>
                            </form>
                        
                        </div>
                    </div>
                </Row>
            </Container>

        </>
    );
}
