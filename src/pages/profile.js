import React from 'react';
import SideNav from '../nav/sidebar';
import Top from '../nav/top';
import Users from '../pages/users';
import Body from '../pages/body';
import {Routes, Route} from 'react-router-dom';
import '../utils/css/styles.css'

export default function Profile() {
    return (
        <>
            <Top />
            <div className="row container-fluid">
                <div className="col-md-2 navbar bg-white mt-2 anchor sidebar">
                    <SideNav />
                </div>
                <div className="col-md-10">
                   <div className="container mt-2 row">
                       <div className="col-md-6">
                            <div className="card shadow-lg">
                                <div className="card-header bg-dark text-white p-2">Profile</div>
                                <div className="card-body">
                                    <form className="form-group">
                                        <div className="row">
                                            <div className="col-md-3 align-items-center justify-content-between">
                                                <label className="mr-3">Surname</label>
                                            </div>
                                            <div className="col-md-9">
                                                <input type="text" className="form-control" value="Yunus" placeHolder="Surname..." />
                                            </div>
                                        </div>
                                        <br />
                                        <div className="row">
                                            <div className="col-md-3 align-items-center justify-content-between">
                                                <label className="mr-3">First/Othername</label>
                                            </div>
                                            <div className="col-md-9">
                                                <input type="text" className="form-control" value="Yusuf" placeHolder="First/Othername..." />
                                            </div>
                                        </div> 
                                        <br />
                                        <div className="row">
                                            <div className="col-md-3 align-items-center justify-content-between">
                                                <label className="mr-3">Email</label>
                                            </div>
                                            <div className="col-md-9">
                                                <input type="email" className="form-control" value="example@example.com" placeHolder="Email..." />
                                            </div>
                                        </div>
                                        <br />
                                        <input type="submit" className="btn btn-dark btn-block" value="update" />
                                    </form>
                                </div>
                            </div>
                       </div>
                       <div className="col-md-6">
                            <div className="card shadow-lg">
                                <div className="card-header bg-dark text-white p-2">Notifications</div>
                                <div className="card-body">
                                    <form className="form-group">
                                        <div className="row">
                                            <div className="col-md-3 align-items-center justify-content-between">
                                                <label className="mr-3">Surname</label>
                                            </div>
                                            <div className="col-md-9">
                                                <input type="text" className="form-control" value="Yunus" placeHolder="Surname..." />
                                            </div>
                                        </div>
                                        <br />
                                        <div className="row">
                                            <div className="col-md-3 align-items-center justify-content-between">
                                                <label className="mr-3">First/Othername</label>
                                            </div>
                                            <div className="col-md-9">
                                                <input type="text" className="form-control" value="Yusuf" placeHolder="First/Othername..." />
                                            </div>
                                        </div>
                                        <br />
                                        <div className="row">
                                            <div className="col-md-3 align-items-center justify-content-between">
                                                <label className="mr-3">Email</label>
                                            </div>
                                            <div className="col-md-9">
                                                <input type="email" className="form-control" value="example@example.com" placeHolder="Email..." />
                                            </div>
                                        </div>
                                        <br />
                                        <input type="submit" className="btn btn-dark btn-block" value="update" />
                                    </form>
                                </div>
                            </div>
                       </div>
                   </div>
                </div>
            </div>
        </>
    )
}
