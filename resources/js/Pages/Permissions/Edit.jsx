import React from 'react'
import { useEffect } from 'react';
import { Head, Link, useForm } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import TextInput from "@/Components/TextInput";

import Sidebar from '@/Layouts/Sidebar';


export default function Edit({ auth, permission }) {
    const { data, form, setData, errors, put, processing } = useForm({
        name: permission.name,
    });

    useEffect(() => {
        setForm((prevState) => ({
            ...prevState,
            name: permission?.name || "",
        }));
    }, [permission]);

    const setForm = (key, value) => {
        setData(key, value);
    }

    const handleNameChange = (e) => {
        setForm("name", e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('permissions.update', permission.id));
    }

    return (
        <>
            <Head title="Editar Permiso" />
            <div className='container-fluid'>
                <div className='row'>
                    <Sidebar auth={auth}></Sidebar>
                    <div className="max-w-7xl mx-auto py-4 col-md-10 col-xs-5  col-lg-10 px-md-4">
                        <div className="mt-6 max-w-6xl mx-auto bg-slate-100 shadow-lg rounded-lg p-6">
                            <h1 className="text-2xl font-semibold text-indigo-700">
                                Edit Permission
                            </h1>
                            <div className="mt-4">
                                <form onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                                        <div>
                                            <InputLabel forInput="name" value="Nombre" />
                                            <TextInput
                                                id="name"
                                                type="text"
                                                name="name"
                                                value={data.name}
                                                className="mt-1 block w-full rounded-md bg-slate-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                                                isFocused={true}
                                                onChange={handleNameChange}
                                            />
                                            <InputError message={errors.name} />
                                        </div>
                                    </div>
                                    <div className="flex items-center mt-4">
                                        <Link
                                            href={route('permissions.index')}
                                            className="px-3 py-2 my-4 btn btn-primary"
                                        >
                                            Volver
                                        </Link>
                                        <PrimaryButton className="ml-4 btn btn-primary mx-2" disabled={processing}>
                                            Actualizar
                                        </PrimaryButton>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}




