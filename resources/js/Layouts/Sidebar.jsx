import React, { useState } from 'react';
import { usePage, Link } from '@inertiajs/react';
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { usePermission } from '@/composables/permissions';

export default function Sidebar({ auth }) {

  const { hasRole, hasRoles } = usePermission();

  return (
    <div className='bg-dark col-auto col-md-2 min-vh-100 d-flex justify-content-between flex-column'>
      <div>
        <a className='text-decoration-none text-white d-none d-sm-inline d-flex align-itemcenter ms-3 mt-3'>
          <i class="fa-brands fa-quinscape"></i>
          <a href="/" className='ms-1 fs-4  d-none d-sm-inline white'>Roomer</a>
        </a>

        <hr className='text-light d-none d-sm-block' />
        <ul className="nav nav-pills flex-column mt-3 mt-sm-0">

          <li className="nav-item text-white fs-4 my-1 py-2 py-sm-0">
            <a href="#" className="nav-link text-white fs-5" aria-current="page">
              <i class="fa-solid fa-users"></i>
              <span className='ms-3 d-none d-sm-inline'>
                <a className='white' href={route('users.index')}>Usuarios</a>
              </span>
            </a>
          </li>

          {hasRoles(['admin', 'mod']) &&
            <li className="nav-item text-white fs-4 my-1 py-2 py-sm-0">
              <a href="#" className="nav-link text-white fs-5" aria-current="page">
                <i class="fa-solid fa-table-cells-large"></i>
                <span className='ms-3 d-none d-sm-inline '>
                  <a className='white' href={route('category.index')}>Categorias</a>
                </span>
              </a>
            </li>

          }
          {hasRoles(['admin', 'mod']) &&

            <li className="nav-item text-white fs-4 my-1 py-2 py-sm-0">
              <a href="#" className="nav-link text-white fs-5" aria-current="page">
                <i class="fa-solid fa-blog"></i>
                <span className='ms-3 d-none d-sm-inline'>
                  <a className='white' href={route('posts.index')}>Posts</a>
                </span>
              </a>
            </li>
          }

          {auth.user.roles == 'admin' &&
            <li className="nav-item text-white fs-4 my-1 py-2 py-sm-0">
              <a href="#" className="nav-link text-white fs-5" aria-current="page">
                <i class="fa-regular fa-address-book"></i>
                <span className='ms-3 d-none d-sm-inline'>
                  <a className='white' href={route('roles.index')}>Roles</a>
                </span>
              </a>
            </li>
          }

          {auth.user.roles == 'admin' &&
            <li className="nav-item text-white fs-4 my-1 py-2 py-sm-0">
              <a href="#" className="nav-link text-white fs-5" aria-current="page">
                <i class="fa-solid fa-door-open"></i>
                <span className='ms-3 d-none d-sm-inline'>
                  <a className='white' href={route('permissions.index')}>Permisos</a>
                </span>
              </a>
            </li>
          }

        </ul>
      </div>
      <div className="dropdown open">
        <a className="text-decoration-none text-white dropdown-toggle p-3" type="button" id="triggerId" data-bs-toggle="dropdown" aria-haspopup="true"
          aria-expanded="false">
          <i className='bi bi-person-circle'></i>
          <span className='ms-2 d-none d-sm-inline'>{auth.user.name}</span>
        </a>
        <div className="dropdown-menu" aria-labelledby="triggerId">
          <a className="dropdown-item" href={route('profile.edit')}>
            <a className="dropdown-item className='white'" href={route('profile.edit')}>Perfil</a>
          </a>
        </div>
      </div>
    </div>

  );
};

