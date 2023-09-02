import { Head, Link, router } from "@inertiajs/react";
import { useRef, useState } from "react";
import Sidebar from '@/Layouts/Sidebar';
import { usePermission } from '@/composables/permissions';
import { Button, Modal } from "react-bootstrap"

export default function Index({ auth, users, flash }) {
    const { hasPermission } = usePermission();
    const [showModal, setShowModal] = useState(false);
    const [userIdToDelete, setUserIdToDelete] = useState(null);
    const user = users.find((user) => user.id === userIdToDelete);

    const handleDeleteUser = (userId) => {
        setShowModal(true);
        setUserIdToDelete(userId);
    };

    const confirmDeleteUser = () => {
        setShowModal(false);
        router.delete(route("users.destroy", user.id));
    };

    return (
        <>
            <Head title="Usuarios" />
            <div className='container-fluid'>
                <div className='row'>
                    <Sidebar auth={auth}></Sidebar>
                    <main className="col-md-10 col-xs-5  col-lg-10 px-md-4">
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h2 className="h2">Usuarios</h2>
                            <div className="btn-toolbar mb-2 mb-md-0">
                                <div className="btn-group me-2">
                                {hasPermission('createUser') && (

                                    <Link href={route('users.create')} className="btn btn-sm btn-primary">Añadir Usuario</Link>
                                )}
                                </div>
                            </div>
                        </div>

                        {flash.message && (
                            <div class="alert alert-success d-flex align-items-center py-3" role="alert">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                </svg>
                                <div>
                                    {flash.message}
                                </div>
                            </div>
                        )}

                        <div className="table-responsive">
                            <table className="table table-striped table-sm">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Nombre</th>
                                        <th>Nombre de usuario</th>
                                        <th>Email</th>
                                        <th>Puntos</th>
                                        {/* <th>Rol</th> */}
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((user, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{user.name}</td>
                                            <td>{user.username}</td>
                                            <td>{user.email}</td>
                                            <td>{user.points}</td>
                                            <td>
                                                {hasPermission('updateUser') && (

                                                <Link href={route('users.edit', user.id)} className="btn btn-sm btn-success mx-1">
                                                    <i class="fa-regular fa-pen-to-square mx-1"></i>
                                                    Editar</Link>
                                                 )} 
                                                 {hasPermission('deleteUser') && ( 
                                                <button
                                                    className="btn btn-sm btn-danger mx-1 px-1"
                                                    onClick={() => handleDeleteUser(user.id)}
                                                >
                                                    <i className="fa-solid fa-trash mx-1"></i>
                                                    Borrar
                                                </button>
                                                )} 
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                                <Modal show={showModal} onHide={() => setShowModal(false)}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Confirmar eliminación</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <p>¿Estás seguro de que quieres eliminar este usuario?</p>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={() => setShowModal(false)}>
                                            Cancelar
                                        </Button>
                                        <Button variant="danger" onClick={confirmDeleteUser}>
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

