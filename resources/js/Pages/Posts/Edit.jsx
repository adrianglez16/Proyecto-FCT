import { useState, useEffect } from 'react';
import { Head, Link, useForm } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import TextInput from "@/Components/TextInput";
import Form from 'react-bootstrap/Form';

import Sidebar from '@/Layouts/Sidebar';

const Edit = ({ auth, post }) => {
    const { data, setData, errors, put, processing } = useForm({
        title: post.title,
        content: post.content,
    });

    useEffect(() => {
        setForm('title', post?.title);
        setForm('content', post?.content);
    }, [post]);

    const setForm = (key, value) => {
        setData(key, value);
    }

    const handleTitleChange = (e) => {
        setForm("title", e.target.value);
    }

    const handleContentChange = (e) => {
        setForm("content", e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('posts.update', post.id));
    }

    return (
        <>
            <Head title="Actualizar Post" />
            <div className='container-fluid'>
                <div className='row'>
                    <Sidebar auth={auth}></Sidebar>
                    <div className="max-w-7xl mx-auto py-4 col-md-10 col-xs-5  col-lg-10 px-md-4">
                        <div className="mt-6 max-w-6xl mx-auto bg-slate-100 shadow-lg rounded-lg p-6">
                            <h1 className="text-2xl font-semibold text-indigo-700">Actualizar post</h1>
                            <form onSubmit={handleSubmit}>
                                <div className="mt-4">
                                    <InputLabel for="title" value="Título" />
                                    <TextInput
                                        id="title"
                                        type="text"
                                        className="mt-1 block w-full"
                                        value={data.title}
                                        onChange={handleTitleChange}
                                        autoFocus
                                    />

                                    <InputError className="mt-2" message={errors.name} />
                                </div>
                                <div className="mt-4">
                                    <InputLabel for="content" value="Contenido" />

                                    <Form.Control
                                        as="textarea"
                                        placeholder="Un día..."
                                        id="content"
                                        type="text"
                                        name="content"
                                        value={data.content}
                                        className="mt-1 block w-full"
                                        autoFocus
                                        onChange={handleContentChange}
                                    />
                                </div>
                                <div className="flex items-center mt-4">
                                    <Link
                                        href={route('posts.index')}
                                        className="px-3 py-2 my-4 btn btn-primary"
                                    >
                                        Volver
                                    </Link>
                                    <PrimaryButton
                                        className={`ml-4  btn btn-primary mx-2${processing ? 'opacity-25' : ''}`}
                                        disabled={processing}
                                    >
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

export default Edit;

