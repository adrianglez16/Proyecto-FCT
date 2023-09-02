import Sidebar from '@/Layouts/Sidebar';
import { Head, Link, useForm } from '@inertiajs/react';
import { useEffect } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import Select from "react-select";


export default function Create({ auth, roles, permissions, user }) {

    const { data, setData, post, processing, reset, errors } = useForm({
        name: '',
        username: '',
        email: '',
        password: '',
        password_confirmation: '',
        roles: [],
        permissions: [],
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
            setForm('roles', user?.roles); // no muestra el rol que tiene el usuario
            setForm('permissions', user?.permissions);
        };
    }, [user]);

    const setForm = (key, value) => {
        setData(key, value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        post(route('users.store'));
    }

    function handleNameChange(e) {
        setData(e.target.name, e.target.value);
    }

    return (
        <>
            <Head title="Crear Usuario" />
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
                        <div className="mt-6 max-w-6xl mx-auto bg-slate-100 shadow-lg rounded-lg p-6">
                            <h1 className="text-2xl font-semibold text-indigo-700">
                                Crear Usuario
                            </h1>
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <InputLabel htmlFor="name" value="Nombre" />

                                    <TextInput
                                        id="name"
                                        type="text"
                                        name="name"
                                        value={data.name}
                                        className="mt-1 block w-full"
                                        autoComplete="username"
                                        isFocused={true}
                                        onChange={handleNameChange}
                                    />

                                    <InputError message={errors.name} className="mt-2" />
                                </div>
                                <div className="mt-4">
                                    <InputLabel htmlFor="username" value="Nombre de usuario" />

                                    <TextInput
                                        id="username"
                                        type="text"
                                        name="username"
                                        value={data.username}
                                        className="mt-1 block w-full"
                                        autoComplete="username"
                                        isFocused={true}
                                        onChange={handleNameChange}
                                    />

                                    <InputError message={errors.username} className="mt-2" />
                                </div>
                                <div className="mt-4">
                                    <InputLabel htmlFor="email" value="Email" />

                                    <TextInput
                                        id="email"
                                        type="text"
                                        name="email"
                                        value={data.email}
                                        className="mt-1 block w-full"
                                        autoComplete="username"
                                        isFocused={true}
                                        onChange={handleNameChange}
                                    />

                                    <InputError message={errors.email} className="mt-2" />
                                </div>
                                <div className="mt-4">
                                    <InputLabel htmlFor="password" value="Contraseña" />

                                    <TextInput
                                        id="password"
                                        type="password"
                                        name="password"
                                        value={data.password}
                                        className="mt-1 block w-full"
                                        autoComplete="username"
                                        isFocused={true}
                                        onChange={handleNameChange}
                                    />

                                    <InputError message={errors.password} className="mt-2" />
                                </div>
                                <div className="mt-4">
                                    <InputLabel htmlFor="password_confirmation" value="Confirmar Contraseña" />

                                    <TextInput
                                        id="password_confirmation"
                                        type="password"
                                        name="password_confirmation"
                                        value={data.password_confirmation}
                                        className="mt-1 block w-full"
                                        autoComplete="username"
                                        isFocused={true}
                                        onChange={handleNameChange}
                                    />

                                    <InputError message={errors.password_confirmation} className="mt-2" />
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

                                    <InputError message={errors.roles} className="mt-2" />

                                </div>

                               
                                <div className="flex items-center mt-4">
                                    <Link
                                        href={route('users.index')}
                                        className="px-3 py-2 my-4 btn btn-primary"
                                    >
                                        Volver
                                    </Link>
                                    <PrimaryButton className="ml-4 btn btn-primary mx-2" disabled={processing}>
                                        Crear
                                    </PrimaryButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

