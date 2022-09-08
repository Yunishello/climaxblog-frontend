import React from 'react';
import { Outlet, Link, } from 'react-router-dom';

export default function Top() {

    const login = sessionStorage.getItem("islogin")
    const isLogin = login;

    console.log(isLogin);

    if (isLogin === true) {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm container-fluid row">
                    <div className="col-md-1">
                        <a className="navbar-brand" href="#">Unicard</a>
                        </div>
                        <div className="col-md-9"></div>
                        <div className="col-md-2">

                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item dropdown">
                                    <Link to="/" className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Yunishello
                                    </Link>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <Link to="/profile" className="dropdown-item" href="#">Notifications <span className="badge badge-danger">9</span></Link>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#">Logout</a>
                                    </div>
                                </li>
                            </ul>
                    </div>
                </nav>
                <Outlet />
            </>
        )
        
    }else {
        return (
            <>
                <div className="container-fluid row">
                    <div className="col-md-10"></div>
                    <div className="col-md-2">
                        <nav className="navbar navbar-expand-lg">

                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                                    <ul className="navbar-nav mr-auto">
                                        <li className="nav-item active">
                                            <Link to="/login"  className="nav-link text-dark" href="#">Login</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/register" className="nav-link text-dark" href="#">Register</Link>
                                        </li>
                                    </ul>
                        
                        </nav>
                    </div>
                </div>
                <Outlet />
            </>
        )
    }
}
