import React from 'react';
import '../utils/css/styles.css';
import {Link} from 'react-router-dom';


export default function SideNav() {
    return(
        <>

            {/* sidebar */}

            <div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark">
                <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                {/* <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg> */}
                <span class="fs-4">Sidebar</span>
                </a>
                <hr />
                <ul class="nav nav-pills flex-column mb-auto">
                <li class="nav-item">
                    <a href="#" class="nav-link active" aria-current="page">
                    {/* <svg class="bi me-2" width="16" height="16"><use xlink:href="#home"/></svg> */}
                    Home
                    </a>
                </li>
                <li>
                    <a href="#" class="nav-link text-white">
                    {/* <svg class="bi me-2" width="16" height="16"><use xlink:href="#speedometer2"/></svg> */}
                    Dashboard
                    </a>
                </li>
                <li>
                    <a href="#" class="nav-link text-white">
                    {/* <svg class="bi me-2" width="16" height="16"><use xlink:href="#table"/></svg> */}
                    Orders
                    </a>
                </li>
                <li>
                    <a href="#" class="nav-link text-white">
                    {/* <svg class="bi me-2" width="16" height="16"><use xlink:href="#grid"/></svg> */}
                    Products
                    </a>
                </li>
                <li>
                    <a href="#" class="nav-link text-white">
                    {/* <svg class="bi me-2" width="16" height="16"><use xlink:href="#people-circle"/></svg> */}
                    Customers
                    </a>
                </li>
                </ul>
                <hr />
                <div class="nav-item dropdown">
                    <Link to="" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2" />
                        <strong>mdo</strong>
                    </Link>
                <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="#">New project...</a></li>
                    <li><a class="dropdown-item" href="#">Settings</a></li>
                    <li><a class="dropdown-item" href="#">Profile</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><Link class="dropdown-item" to="/logout">Sign out</Link></li>
                </ul>
                </div>
            </div>
        </>
    )
}