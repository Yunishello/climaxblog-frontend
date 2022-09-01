import React from 'react';
import { Link } from 'react-router-dom';
import Dashboard from '../pages/dashboard';
import Users from '../pages/users';

export default function SideNav() {
    return (
        <>
            <hr/>
            <Link to="/" className="text-decoration-none">
                <div className="row px-3 justify-content-between align-items-center">
                    <div className="col-md-2">
                        <span className="fas fa-tachometer-alt text-secondary"></span>
                    </div>
                    <div className="col-md-10 py-1">
                        <span className="text-secondary text-decoration-none text-uppercase">Dashboard</span>
                    </div>
                </div>
            </Link>
            <hr />
        </>
    )
}
