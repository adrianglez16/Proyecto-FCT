import React from 'react'
import { useEffect } from 'react';
import { Head, Link, useForm } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import TextInput from "@/Components/TextInput";
import Select from 'react-select'
import Sidebar from '@/Layouts/Sidebar';


export default function Edit({ auth, user, roles, permissions }) {

    const { data, setData, errors, put, processing } = useForm({
        name: user.name,
        username: user.username,
        email: user.email,
        roles: [],
        permissions: [],
    });

    useEffect(() => {
        setForm('name', user?.name);
        setForm('username', user?.username);
        setForm('email', user?.email);
        setForm('roles', user?.roles); // no muestra el rol que tiene el usuario
        setForm('permissions', user?.permissions);
    }, [user]);

    // console.log(user.permissions);

    const setForm = (key, value) => {
        setData(key, value);
    }

    const handleNameChange = (e) => {
        setForm("name", e.target.value);
    }

    const handleUsernameChange = (e) => {
        setForm("username", e.target.value);
    }

    const handleEmailChange = (e) => {
        setForm("email", e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('users.update', user.id));
    }


    return (
        <>
            <Head title="Editar Usuario" />
            <div className='container-fluid'>
                <div className='row'>
                    <Sidebar auth={auth}></Sidebar>
                    <div className="max-w-7xl mx-auto py-4 col-md-10 col-xs-5  col-lg-10 px-md-4">
                        <div className="flex justify-between">
                            <Link

                                href={route('users.index')}
                                className="px-3 py-2 text-white font-semibold bg-indigo-500 hover:bg-indigo-700 rounded"
                            >
                                Volver
                            </Link>
                        </div>
                        <div className="relative overflow-x-auto">
                            <div className="mt-6 max-w-6xl mx-auto bg-slate-100 shadow-lg rounded-lg p-6">
                                <h1 className="text-2xl font-semibold text-indigo-700">Actualizar Usuario</h1>

                                <form onSubmit={handleSubmit} className='mt-4'>
                                    <div className="flex flex-col mb-4 space-y-4 md:flex-row md:space-y-0">
                                        <div className="w-full space-y-2 md:w-1/2">
                                            <InputLabel forInput="name" value="Nombre" />
                                            <TextInput
                                                id="name"
                                                type="text"
                                                className="w-full"
                                                value={data.name}
                                                onChange={handleNameChange}
                                            />
                                            <InputError message={errors.name} />
                                        </div>
                                        <div className="w-full space-y-2 md:w-1/2">
                                            <InputLabel forInput="username" value="Nombre de usuario" />
                                            <TextInput
                                                id="username"
                                                type="text"
                                                className="w-full"
                                                value={data.username}
                                                onChange={handleUsernameChange}
                                            />
                                            <InputError message={errors.username} />
                                        </div>
                                    </div>
                                    <div className="flex flex-col mb-4 space-y-4 md:flex-row md:space-y-0">
                                        <div className="w-full space-y-2 md:w-1/2">
                                            <InputLabel forInput="email" value="Email" />
                                            <TextInput
                                                id="email"
                                                type="text"
                                                className="w-full"
                                                value={data.email}
                                                onChange={handleEmailChange}
                                            />
                                            <InputError message={errors.email} />
                                        </div>

                                        <div className="mt-4">
                                            <InputLabel for="roles" value="Roles" />
                                            <Select
                                                id="roles"
                                                name="roles"
                                                value={data.roles}
                                                options={roles}
                                                isMulti
                                                closeMenuOnSelect
                                                placeholder="Pick some"
                                                getOptionLabel={(option) => option.name}
                                                getOptionValue={(option) => option.id}
                                                onChange={(selectedOptions) => setForm('roles', selectedOptions)}
                                                className="mt-1 block w-full"
                                            />
                                        </div>

                                    </div>
                                        <div className="mt-4">
                                            <InputLabel for="permissions" value="Permisos" />
                                            <Select
                                                id="permissions"
                                                name="permissions"
                                                value={data.permissions}
                                                options={permissions}
                                                isMulti
                                                closeMenuOnSelect
                                                placeholder="Pick some"
                                                getOptionLabel={(option) => option.name}
                                                getOptionValue={(option) => option.id}
                                                onChange={(selectedOptions) => setForm('permissions', selectedOptions)}
                                                className="mt-1 block w-full"
                                            />

                                            

                                    </div>


                                    <div className="flex items-center mt-4">
                                        <Link
                                            href={route('users.index')}
                                            className="px-3 py-2 my-4 btn btn-primary"
                                        >
                                            Volver
                                        </Link>
                                        <PrimaryButton className="ml-4 btn btn-primary mx-2" disabled={processing}>
                                            Actualizar
                                        </PrimaryButton>
                                    </div>
                                </form>

                                <div className="mt-6 max-w-6xl mx-auto bg-slate-100 shadow-lg rounded-lg p-6">
                                    <h1 className="text-2xl font-semibold text-indigo-700">Roles</h1>
                                    <div className="bg-white">
                                        <table className="table table-striped table-sm">
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Nombre</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {user.roles.map((userRole) => (
                                                    <tr key={
                                                        userRole.id
                                                    }>
                                                        <td>
                                                            {
                                                                userRole.id
                                                            }
                                                        </td>
                                                        <td>
                                                            {
                                                                userRole.name
                                                            }
                                                        </td>

                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div className="mt-6 max-w-6xl mx-auto bg-slate-100 shadow-lg rounded-lg p-6">
                                    <h1 className="text-2xl font-semibold text-indigo-700">Permisos</h1>
                                    <div className="bg-white">  
                                        <table className="table table-striped table-sm">
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Nombre</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {user.permissions.map((userPermission) => (
                                                    <tr key={
                                                        userPermission.id
                                                    }>
                                                        <td>
                                                            {
                                                                userPermission.id
                                                            }
                                                        </td>
                                                        <td>
                                                            {
                                                                userPermission.name
                                                            }
                                                        </td>
                                                            
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                                    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}




