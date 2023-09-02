import Footer from '@/Layouts/Footer';
import Sidebar from '@/Layouts/Sidebar';
import { Head, Link, useForm } from '@inertiajs/react';
import { useRef, useState, useEffect } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';

export default function Create({ auth }) {

    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
    });

    function handleNameChange(e) {
        setData("name", e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        post(route('category.store'));
    }

    return (
        <>
            <Head title="Crear Categoria" />
            <div className='container-fluid'>
                <div className='row'>
                    <Sidebar auth={auth}></Sidebar>
                    <div className="max-w-7xl mx-auto py-4 col-md-10 col-xs-5  col-lg-10 px-md-4">
                        <div className="mt-6 max-w-6xl mx-auto bg-slate-100 shadow-lg rounded-lg p-6">
                            <h1 className="text-2xl font-semibold text-indigo-700">
                                Nueva Categoría
                            </h1>
                            <form onSubmit={handleSubmit} className='mx-3'>
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

                                <div className="flex items-center mt-4">
                                    <Link
                                        href={route('category.index')}
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

