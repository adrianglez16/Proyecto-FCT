import { useEffect } from 'react';
import { Head, Link, useForm } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import TextInput from "@/Components/TextInput";
import Select from "react-select";
import Sidebar from '@/Layouts/Sidebar';
import Footer from '@/Layouts/Footer';


export default function Create({ auth, permissions }) {
    const { data, setData, errors, post, processing } = useForm({
        name: "",
        permissions: [],
    });
    console.log(data.permissions);

    const setForm = (key, value) => {
        setData(key, value);
      }

    const handleNameChange = (e) => {
        setData("name", e.target.value);
    };

    const handlePermissionsChange = (values) => {
        setData("permissions", values.map((value) => value.value));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('roles.store'));
    };

    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <Sidebar auth={auth}></Sidebar>

                    <div className="max-w-7xl mx-auto py-4 col-md-10 col-xs-5  col-lg-10 px-md-4">
                        <div className="flex justify-between">
                            <Link
                                href={route('roles.index')}
                                className="px-3 py-2 text-white font-semibold bg-indigo-500 hover:bg-indigo-700 rounded"
                            >
                                Back
                            </Link>
                        </div>
                        <div className="mt-6 max-w-6xl mx-auto bg-slate-100 shadow-lg rounded-lg p-6">
                            <h1 className="text-2xl font-semibold text-indigo-700">
                                Create new role
                            </h1>
                            <form onSubmit={handleSubmit}>
                                <div className="mt-4">
                                    <InputLabel htmlFor="name" value="Name" />

                                    <TextInput
                                        id="name"
                                        type="text"
                                        name="name"
                                        value={data.name}
                                        className="mt-1 block w-full"
                                        autoComplete="username"
                                        autoFocus
                                        isFocused={true}
                                        onChange={handleNameChange}
                                    />

                                    <InputError message={errors.name} className="mt-2" />
                                </div>

                                <div className="mt-4">
                                    <InputLabel for="permissions" value="Permissions" />
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
                                    <PrimaryButton className="ml-4" disabled={processing}>
                                        Create
                                    </PrimaryButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>

        </>
    );
};

