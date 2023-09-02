import { useState } from 'react';
// import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
// import NavLink from '@/Components/NavLink';
// import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';


export default function Header({ auth }) {


    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mynavbar">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                </li>
                <li className="nav-item">
                </li>
                <li className="nav-item">
                </li>
              </ul>
              <div class="dropdown d-flex">
                <button type="button" class="btn btn-sm btn-secondary dropdown-toggle" data-bs-toggle="dropdown">
                  {auth.user.name}
                </button>
                <ul class="dropdown-menu">
                  <a className="dropdown-item" href={route('profile.edit')}>Profile</a>
                  <a className="dropdown-item" href={route('logout')} method="post" as="button"> Log Out</a>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      );
}

