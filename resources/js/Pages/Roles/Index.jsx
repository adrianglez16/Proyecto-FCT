import { Head, Link, router } from "@inertiajs/react";
import { useRef, useState } from "react";
import DangerButton from "@/Components/DangerButton";
import SecondaryButton from "@/Components/SecondaryButton";
import Sidebar from '@/Layouts/Sidebar';
import Footer from '@/Layouts/Footer';
import { Button, Modal } from "react-bootstrap"


export default function Index({ auth, roles }) {
    const [showModal, setShowModal] = useState(false);
    const [roleIdToDelete, setUserIdToDelete] = useState(null);
    const role = roles.find((role) => role.id === roleIdToDelete);

    const handleDeleteRole = (roleId) => {
        setShowModal(true);
        setUserIdToDelete(roleId);
    };

    const confirmDeleteRole = () => {
        setShowModal(false);
        router.delete(route("roles.destroy", role.id));
    };

    return (
        <>
            <Head title="Roles" />
            <div className='container-fluid'>
                <div className='row'>
                    <Sidebar auth={auth}></Sidebar>
                    <main className="col-md-10 col-xs-5  col-lg-10 px-md-4">
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h2 className="h2">Roles</h2>

                            <div className="btn-toolbar mb-2 mb-md-0">
                                <div className="btn-group me-2">
                                <Link href={route('roles.create')} className="btn btn-sm btn-primary">Añadir Rol</Link>

                                </div>
                            </div>
                        </div>

                        <div className="table-responsive">
                            <table className="table table-striped table-sm">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Nombre</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {roles.map((role, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{role.name}</td>
                                            <td>
                                                <Link href={route('roles.edit', role.id)} className="btn btn-sm btn-success mx-1">
                                                    <i class="fa-regular fa-pen-to-square mx-1"></i>
                                                    Editar</Link>

                                                    <button
                                                    className="btn btn-sm btn-danger mx-1 px-1"
                                                    onClick={() => handleDeleteRole(role.id)}
                                                >
                                                    <i className="fa-solid fa-trash mx-1"></i>
                                                    Borrar
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                                <Modal show={showModal} onHide={() => setShowModal(false)}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Confirmar eliminación</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <p>¿Estás seguro de que quieres eliminar este rol?</p>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={() => setShowModal(false)}>
                                            Cancelar
                                        </Button>
                                        <Button variant="danger" onClick={confirmDeleteRole}>
                                            Borrar
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            </table>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
};

