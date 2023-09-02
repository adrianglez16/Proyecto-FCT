import { useState, useEffect } from 'react';
import { Head, Link, useForm } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import TextInput from "@/Components/TextInput";
import Select from 'react-select'

import Footer from '@/Layouts/Footer';
import Sidebar from '@/Layouts/Sidebar';

const Edit = ({ role, permissions, auth, user }) => {
  const { data, setData, errors, put, processing } = useForm({
    name: role.name,
    permissions: [],
    // permissions: role.permissions,
  });

  //PARECE QUE FUNCIONA -- ARREGLAR QUE SE VEAN LOS PERMISOS A ELEGIR Y QUE POR DEFECTO ESTEN LOS QUE YA TIENE EL ROL
  // console.log(permissions);
  console.log(user);

  useEffect(() => {
    setForm((prevState) => ({
      ...prevState,
      name: role?.name || "",
      permissions: role?.permissions || "",
    }));
  }, [role]);

  useEffect(() => {
    setForm('permissions', role?.permissions);
  }, [role]);

  const setForm = (key, value) => {
    setData(key, value);
  }

  const handleNameChange = (e) => {
    setForm("name", e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    put(route('roles.update', role.id));
  }

  return (
    <>
      <Head title="Actualizar rol" />
      <div className='container-fluid'>
        <div className='row'>
          <Sidebar auth={auth}></Sidebar>
          <div className="max-w-7xl mx-auto py-4 col-md-10 col-xs-5  col-lg-10 px-md-4">

            <div className="mt-6 max-w-6xl mx-auto bg-slate-100 shadow-lg rounded-lg p-6">
              <h1 className="text-2xl font-semibold text-indigo-700">Actualizar rol</h1>
              <form onSubmit={handleSubmit}>
                <div className="mt-4">
                  <InputLabel for="name" value="Name" />
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
                  <Link
                    href={route('roles.index')}
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
            <div className="mt-6 max-w-6xl mx-auto bg-slate-100 shadow-lg rounded-lg p-6">
              <h1 className="text-2xl font-semibold text-indigo-700">Permisos</h1>
              <div className="bg-white">
                <table className="table table-striped table-sm">

                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Nombre</th>
                      <th>Accion</th>
                    </tr>
                  </thead>
                  <tbody>
                    {role.permissions.map((rolePermission) => (
                      <tr key={
                        rolePermission.id
                      }>
                        <td>
                          {
                            rolePermission.id
                          }
                        </td>
                        <td>
                          {
                            rolePermission.name
                          }
                        </td>
                        <td>
                          <div className="flex items-center">
                            <Link
                              href={route('roles.permissions.destroy', [role.id, rolePermission.id])}
                              className="btn btn-sm btn-danger mx-1 px-1"
                              method="DELETE"
                              as="button"
                            >
                              <i class="fa-solid fa-trash mx-1"></i>

                              Revocar
                            </Link>
                          </div>
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
      <Footer></Footer>
    </>
  );
};

export default Edit;

