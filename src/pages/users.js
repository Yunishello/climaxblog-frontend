import React from 'react';
import '../utils/css/styles.css'
import '../utils/js/script.js'

export default function Dashboard() {
    return (
        <>
            <div className="row container-fluid">
                <div className="col-md-10">
                    <div className="container my-5">
                    <div className="card">
                        <div className="card-header m-3">
                            <span className="text-secondary align-items-center justify-content-between text-uppercase">
                                Users
                            </span>
                        </div>
                        <div className="card-body">
                            <table id="example" className="table table-striped table-hover table-bordered table-sty">
                                <thead>
                                    <tr>
                                        <th>S/N</th>
                                        <th>Name</th>
                                        <th>Phone Number</th>
                                        <th>Bvn</th>
                                        <th>DOB</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Samso Nigore</td>
                                        <td>System Architect</td>
                                        <td>22441098575</td>
                                        <td>2018/04/25</td>
                                        <td>
                                                <button className="btn btn-default btn-outline-primary mr-1">Edit</button>
                                                <button className="btn btn-default btn-outline-danger">Delete</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Samso Nigore</td>
                                        <td>System Architect</td>
                                        <td>22441098575</td>
                                        <td>2018/04/25</td>
                                        <td>
                                                <button className="btn btn-default btn-outline-primary mr-1">Edit</button>
                                                <button className="btn btn-default btn-outline-danger">Delete</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Samso Nigore</td>
                                        <td>System Architect</td>
                                        <td>22441098575</td>
                                        <td>2018/04/25</td>
                                        <td>
                                                <button className="btn btn-default btn-outline-primary mr-1">Edit</button>
                                                <button className="btn btn-default btn-outline-danger">Delete</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Samso Nigore</td>
                                        <td>System Architect</td>
                                        <td>22441098575</td>
                                        <td>2018/04/25</td>
                                        <td>
                                                <button className="btn btn-default btn-outline-primary mr-1">Edit</button>
                                                <button className="btn btn-default btn-outline-danger">Delete</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Samso Nigore</td>
                                        <td>System Architect</td>
                                        <td>22441098575</td>
                                        <td>2018/04/25</td>
                                        <td>
                                                <button className="btn btn-default btn-outline-primary mr-1">Edit</button>
                                                <button className="btn btn-default btn-outline-danger">Delete</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>Samso Nigore</td>
                                        <td>System Architect</td>
                                        <td>22441098575</td>
                                        <td>2018/04/25</td>
                                        <td>
                                                <button className="btn btn-default btn-outline-primary mr-1">Edit</button>
                                                <button className="btn btn-default btn-outline-danger">Delete</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td>Samso Nigore</td>
                                        <td>System Architect</td>
                                        <td>22441098575</td>
                                        <td>2018/04/25</td>
                                        <td>
                                                <button className="btn btn-default btn-outline-primary mr-1">Edit</button>
                                                <button className="btn btn-default btn-outline-danger">Delete</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>8</td>
                                        <td>Samso Nigore</td>
                                        <td>System Architect</td>
                                        <td>22441098575</td>
                                        <td>2018/04/25</td>
                                        <td>
                                                <button className="btn btn-default btn-outline-primary mr-1">Edit</button>
                                                <button className="btn btn-default btn-outline-danger">Delete</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>9</td>
                                        <td>Samso Nigore</td>
                                        <td>System Architect</td>
                                        <td>22441098575</td>
                                        <td>2018/04/25</td>
                                        <td>
                                                <button className="btn btn-default btn-outline-primary mr-1">Edit</button>
                                                <button className="btn btn-default btn-outline-danger">Delete</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>10</td>
                                        <td>Samso Nigore</td>
                                        <td>System Architect</td>
                                        <td>22441098575</td>
                                        <td>2018/04/25</td>
                                        <td>
                                                <button className="btn btn-default btn-outline-primary mr-1">Edit</button>
                                                <button className="btn btn-default btn-outline-danger">Delete</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}
