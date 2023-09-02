import { Head, Link, router } from "@inertiajs/react";
import { useRef, useState } from "react";
import { usePermission } from '@/composables/permissions';
import { Button, Modal } from "react-bootstrap"

import Sidebar from '@/Layouts/Sidebar';

export default function Index({ auth, permissions }) {
    
    const [showModal, setShowModal] = useState(false);
    const [permissionIdToDelete, setPermissionIdToDelete] = useState(null);
    const permission = permissions.find((permission) => permission.id === setPermissionIdToDelete);

    const handleDeletePermission = (permissionId) => {
        setShowModal(true);
        setUserIdToDelete(permissionId);
    };

    const confirmDeletePermission = () => {
        setShowModal(false);
        router.delete(route("permissions.destroy", permission.id));
    };

    return (
        <>
            <Head title="Permisos" />
            <div className='container-fluid'>
                <div className='row'>
                    <Sidebar auth={auth}></Sidebar>
                    <main className="col-md-10 col-xs-5  col-lg-10 px-md-4">
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h2 className="h2">Permisos</h2>

                            <div className="btn-toolbar mb-2 mb-md-0">
                                <div className="btn-group me-2">
                                    <Link href={route('permissions.create')} className="btn btn-sm btn-primary">Añadir Permisos</Link>
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
                                    {permissions.map((permission, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{permission.name}</td>
                                            <td>
                                                <Link href={route('permissions.edit', permission.id)} className="btn btn-sm btn-success mx-1">
                                                    <i class="fa-regular fa-pen-to-square mx-1"></i>
                                                    Editar</Link>

                                                    <button
                                                    className="btn btn-sm btn-danger mx-1 px-1"
                                                    onClick={() => handleDeletePermission(permission.id)}
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
                                        <p>¿Estás seguro de que quieres eliminar este permiso?</p>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={() => setShowModal(false)}>
                                            Cancelar
                                        </Button>
                                        <Button variant="danger" onClick={confirmDeletePermission}>
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

