import React from 'react';
import  '../utils/css/styles.css'

export default function Body() {
    return (
        <>
            <div className="container-fluid">
                <div className="py-3">
                    <span className="font-weight-bold">Dashboard</span>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div className="card p-2">
                            <div className="row  align-items-center justify-content-between">
                                <div className="col-8">
                                    <div className="text-grey text-uppercase">total Income</div>
                                    <div className="text-secondary text-uppercase text-page font-weight-bold">56785</div>
                                </div>
                                <div className="col-4 px-1">
                                    <span className="fas fa-chart-area text-grey icon-1"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card p-2">
                            <div className="row  align-items-center justify-content-between">
                                <div className="col-8">
                                    <div className="text-grey text-uppercase">total Outcome</div>
                                    <div className="text-secondary text-uppercase text-page font-weight-bold">9508</div>
                                </div>
                                <div className="col-4 px-1">
                                    <span className="fas fa-chart-line text-grey icon-1"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card p-2">
                            <div className="row  align-items-center justify-content-between">
                                <div className="col-8">
                                    <div className="text-grey text-uppercase">transactions</div>
                                    <div className="text-secondary text-uppercase text-page font-weight-bold">78</div>
                                </div>
                                <div className="col-4 px-1">
                                    <span className="fas fa-receipt text-grey icon-1"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card p-2">
                            <div className="row  align-items-center justify-content-between">
                                <div className="col-8">
                                    <div className="text-grey text-uppercase">users</div>
                                    <div className="text-secondary text-uppercase text-page font-weight-bold">985</div>
                                </div>
                                <div className="col-4 px-1">
                                    <span className="fas fa-user-friends text-grey icon-1"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div className="card my-3">
                            <span className="p-3 text-secondary align-items-center justify-content-between text-uppercase">
                                transactions
                            </span>
                            <div className="">
                                <table class="table table-hover table-responsive">
                                    <thead>
                                        <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Transactions Id</th>
                                        <th scope="col">Users Id</th>
                                        <th scope="col">User Name</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <th scope="row">1</th>
                                        <td>trans/22078647</td>
                                        <td>us-23453</td>
                                        <td>@mdo</td>
                                        <td><span class="badge badge-success p-2">success</span></td>
                                        <td>
                                            <button className="btn btn-default btn-outline-primary btn-sm mr-2">Edit</button>
                                            <button className="btn btn-default btn-outline-danger   btn-sm">Delete</button>
                                        </td>
                                        </tr>
                                        <tr>
                                        <th scope="row">2</th>
                                        <td>trans/9858903</td>
                                        <td>us-22078</td>
                                        <td>fatto</td>
                                        <td><span class="badge badge-danger p-2">failed</span></td>
                                        <td>
                                            <button className="btn btn-default  btn-outline-primary  btn-sm mr-2">Edit</button>
                                            <button className="btn btn-default btn-outline-danger  btn-sm">Delete</button>
                                        </td>
                                        </tr>
                                        <tr>
                                        <th scope="row">3</th>
                                        <td>trans/4567765</td>
                                        <td>us-89033</td>
                                        <td>yunis</td>
                                        <td><span class="badge badge-dark p-2">pending</span></td>
                                        <td>
                                            <button className="btn btn-default btn-outline-primary  btn-sm mr-2">Edit</button>
                                            <button className="btn btn-default btn-outline-danger  btn-sm">Delete</button>
                                        </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                    <div className="card my-3">
                            <span className="p-3 text-secondary align-items-center justify-content-between text-uppercase">
                                Users
                            </span>
                            <div className="">
                                <table class="table table-hover table-responsive">
                                    <thead>
                                        <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Fullname</th>
                                        <th scope="col">Phone Number</th>
                                        <th scope="col">BVN</th>
                                        <th scope="col">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <th scope="row">1</th>
                                        <td>Yunus Yusuf</td>
                                        <td>09136355360</td>
                                        <td>220786479844</td>
                                        <td>
                                            <button className="btn btn-default btn-outline-primary btn-sm mr-2">Edit</button>
                                            <button className="btn btn-default btn-outline-danger  btn-sm">Delete</button>
                                        </td>
                                        </tr>
                                        <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob Thornton</td>
                                        <td>09136355360</td>
                                        <td>220786479844</td>
                                        <td>
                                            <button className="btn btn-default btn-outline-primary  btn-sm mr-2">Edit</button>
                                            <button className="btn btn-default btn-outline-danger btn-sm">Delete</button>
                                        </td>
                                        </tr>
                                        <tr>
                                        <th scope="row">3</th>
                                        <td>Larry danger</td>
                                        <td>09187623456</td>
                                        <td>220786479844</td>
                                        <td>
                                            <button className="btn btn-default btn-outline-primary btn-sm mr-2">Edit</button>
                                            <button className="btn btn-default btn-outline-danger btn-sm">Delete</button>
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
