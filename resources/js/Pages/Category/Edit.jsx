import { useEffect } from 'react';
import { Head, Link, useForm } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import TextInput from "@/Components/TextInput";
import Sidebar from '@/Layouts/Sidebar';

export default function Edit({ auth, category }) {

    const { data, setData, errors, put, processing } = useForm({
        name: category.name,
    });

    useEffect(() => {
        setForm('name', category?.name);
    }, [category]);

    const setForm = (key, value) => {
        setData(key, value);
    }

    const handleNameChange = (e) => {
        setForm("name", e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('category.update', category.id));
    }

    return (
        <>
            <Head title="Actualizar Categoría" />
            <div className='container-fluid'>
                <div className='row'>
                    <Sidebar auth={auth}></Sidebar>
                    <div className="max-w-7xl mx-auto py-4 col-md-10 col-xs-5  col-lg-10 px-md-4">
                        <div className="flex justify-between">
                            <Link
                                href={route('category.index')}
                                className="px-3 py-2 text-white font-semibold bg-indigo-500 hover:bg-indigo-700 rounded"
                            >
                                Volver
                            </Link>
                        </div>
                        <div className="mt-6 max-w-6xl mx-auto bg-slate-100 shadow-lg rounded-lg p-6">
                            <h1 className="text-2xl font-semibold text-indigo-700">Actualizar Categoría</h1>
                            <form onSubmit={handleSubmit}>
                                <div className="mt-4">
                                    <InputLabel for="name" value="Nombre" />
                                    <TextInput
                                        id="name"
                                        type="text"
                                        className="mt-1 block w-full"
                                        value={data.name}
                                        onChange={handleNameChange}
                                        autoFocus
                                    />

                                    <InputError className="mt-2" message={errors.name} />
                                </div>
                               
                                <div className="flex items-center mt-4">
                                    <Link
                                        href={route('category.index')}
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
        </>
    );
};


