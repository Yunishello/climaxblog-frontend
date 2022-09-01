import React from 'react';
import '../utils/css/styles.css'
import '../utils/js/script.js'

export default function Admin() {
    return (
        <>
            <div className="row container-fluid">
                <div className="col-md-10">
                    <div className="container my-5">
                        <div className="card">
                            <div className="card-header m-3">
                                <span className="text-secondary align-items-center justify-content-between text-uppercase">
                                    Admin
                                </span>
                            </div>
                            <div className="card-body">
                                <table id="example" className="table table-striped table-hover table-bordered table-sty table-responsive">
                                    <thead>
                                        <tr>
                                            <th>S/N</th>
                                            <th>Staff ID</th>
                                            <th>Name</th>
                                            <th>Position</th>
                                            <th>Is Admin</th>
                                            <th>Phone</th>
                                            <th>ID-Number</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>st-34258</td>
                                            <td>Samso Nigore</td>
                                            <td>Super Admin</td>
                                            <td>1</td>
                                            <td>09078564256</td>
                                            <td>Id-34258</td>
                                            <td>
                                                    <button className="btn btn-default btn-outline-primary mr-1">Edit</button>
                                                    <button className="btn btn-default btn-outline-danger">Delete</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>st-34258</td>
                                            <td>Samso Nigore</td>
                                            <td>Admin</td>
                                            <td>2</td>
                                            <td>09078564256</td>
                                            <td>Id-34258</td>
                                            <td>
                                                    <button className="btn btn-default btn-outline-primary mr-1">Edit</button>
                                                    <button className="btn btn-default btn-outline-danger">Delete</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>st-34258</td>
                                            <td>Samso Nigore</td>
                                            <td>UI/UX</td>
                                            <td>0</td>
                                            <td>09078564256</td>
                                            <td>Id-34258</td>
                                            <td>
                                                    <button className="btn btn-default btn-outline-primary mr-1">Edit</button>
                                                    <button className="btn btn-default btn-outline-danger">Delete</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>st-34258</td>
                                            <td>Samso Nigore</td>
                                            <td>Frontend</td>
                                            <td>0</td>
                                            <td>09078564256</td>
                                            <td>Id-34258</td>
                                            <td>
                                                    <button className="btn btn-default btn-outline-primary mr-1">Edit</button>
                                                    <button className="btn btn-default btn-outline-danger">Delete</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>st-34258</td>
                                            <td>Samso Nigore</td>
                                            <td>Mobile</td>
                                            <td>0</td>
                                            <td>09078564256</td>
                                            <td>Id-34258</td>
                                            <td>
                                                    <button className="btn btn-default btn-outline-primary mr-1">Edit</button>
                                                    <button className="btn btn-default btn-outline-danger">Delete</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td>st-34258</td>
                                            <td>Samso Nigore</td>
                                            <td>Backend</td>
                                            <td>0</td>
                                            <td>09078564256</td>
                                            <td>Id-34258</td>
                                            <td>
                                                    <button className="btn btn-default btn-outline-primary mr-1">Edit</button>
                                                    <button className="btn btn-default btn-outline-danger">Delete</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>7</td>
                                            <td>st-34258</td>
                                            <td>Samso Nigore</td>
                                            <td>Backend</td>
                                            <td>0</td>
                                            <td>09078564256</td>
                                            <td>Id-34258</td>
                                            <td>
                                                    <button className="btn btn-default btn-outline-primary mr-1">Edit</button>
                                                    <button className="btn btn-default btn-outline-danger">Delete</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>8</td>
                                            <td>st-34258</td>
                                            <td>Samso Nigore</td>
                                            <td>Admin</td>
                                            <td>1</td>
                                            <td>09078564256</td>
                                            <td>Id-34258</td>
                                            <td>
                                                    <button className="btn btn-default btn-outline-primary mr-1">Edit</button>
                                                    <button className="btn btn-default btn-outline-danger">Delete</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>9</td>
                                            <td>st-34258</td>
                                            <td>Samso Nigore</td>
                                            <td>Frontend</td>
                                            <td>0</td>
                                            <td>09078564256</td>
                                            <td>Id-34258</td>
                                            <td>
                                                    <button className="btn btn-default btn-outline-primary mr-1">Edit</button>
                                                    <button className="btn btn-default btn-outline-danger">Delete</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>10</td>
                                            <td>st-34258</td>
                                            <td>Samso Nigore</td>
                                            <td>Frontend</td>
                                            <td>0</td>
                                            <td>09078564256</td>
                                            <td>Id-34258</td>
                                            <td>
                                                    <button className="btn btn-default btn-outline-primary mr-1">Edit</button>
                                                    <button className="btn btn-default btn-outline-danger">Delete</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="row container-fluid my-5">
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-header">Add Admin</div>
                                    <form className="container form-group py-2">
                                        <div className="row form-group">
                                            <div className="col-md-1 d-flex align-items-center justify-content-between">
                                                <span className="fas fa-user"></span>
                                            </div>
                                            <div className="col-md-11">
                                                <input type="text" className="form-control" placeholder="Admin Username" autoComplete="true"/>
                                            </div>
                                        </div>
                                        <div className="row form-group">
                                            <div className="col-md-1 d-flex align-items-center justify-content-between">
                                                <span className="fas fa-users-cog"></span>
                                            </div>
                                            <div className="col-md-11">
                                                <select className="form-control" placeholder="role" >
                                                    <option  className="form-control">Super Admin</option>
                                                    <option className="form-control">Admin 2</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row form-group">
                                            <div className="col-md-1 d-flex align-items-center justify-content-between">
                                                <span className="fas fa-lock"></span>
                                            </div>
                                            <div className="col-md-11">
                                                <input type="password" className="form-control" disabled placeholder="Default Pin is set to ADMIN"/>
                                            </div>
                                        </div>
                                        <div className="">
                                            <button type="submit" className="btn btn-dark btn-block">Make Admin</button>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-md-6">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
