import Sidebar from '@/Layouts/Sidebar';
import { Head, Link, useForm, router } from '@inertiajs/react';
import { useRef, useState, useEffect } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import Form from 'react-bootstrap/Form';

export default function Create({ auth }) {

    const { data, setData, post, processing, errors, reset } = useForm({
        title: "",
        content: "",
    });

    function handleTitleChange(e) {
        setData("title", e.target.value);
    }

    function handleContentChange(e) {
        setData("content", e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        post(route('posts.store'));
    }


    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <Sidebar auth={auth}></Sidebar>
                    <div className="max-w-7xl mx-auto py-4 col-md-10 col-xs-5  col-lg-10 px-md-4">
                        <div className="mt-6 max-w-6xl mx-auto bg-slate-100 shadow-lg rounded-lg p-6">
                            <h1 className="text-2xl font-semibold text-indigo-700">
                                Nuevo Post
                            </h1>
                            <form onSubmit={handleSubmit} className='mx-3'>
                                <div>
                                    <InputLabel htmlFor="title" value="Título" />
                                    <TextInput
                                        id="title"
                                        type="text"
                                        name="title"
                                        value={data.title}
                                        className="mt-1 block w-full"
                                        autoComplete="username"
                                        isFocused={true}
                                        onChange={handleTitleChange}
                                    />

                                    <InputError message={errors.title} className="mt-2" />
                                </div>
                                <div className="mt-4">
                                    <InputLabel htmlFor="content" value="Contenido" />
                                    
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Un día..."
                                        id="content"
                                        type="text"
                                        name="content"
                                        value={data.content}
                                        className="mt-1 block w-full"
                                        autoComplete="username"
                                        isFocused={true}
                                        onChange={handleContentChange}
                                    />

                                    <InputError message={errors.content} className="mt-2" />
                                </div>

                                <div className="mt-4">
                                    {/* IMAGEN DE PORTADA ¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?
                                    <InputLabel htmlFor="img" value="Img" />
                                    <TextInput
                                        id="img"
                                        type="file"
                                        name="img"
                                        // value={data.status}
                                        className="mt-1 block w-full"
                                        autoComplete="username"
                                    // isFocused={true}
                                    // onChange={handleStatusChange}
                                    />
                                    <InputError message={errors.status} className="mt-2" /> */}
                                </div>

                                <div className="flex items-center mt-4">
                                    <Link
                                        href={route('posts.index')}
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

