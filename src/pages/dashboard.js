import React from 'react';
import SideNav from '../nav/sidebar';
import Top from '../nav/top';
import Users from '../pages/users';
import Body from '../pages/body';
import {Routes, Route} from 'react-router-dom';
import '../utils/css/styles.css'
import axios, { Axios } from 'axios';
import { useEffect, useRef, useState } from 'react';
import { render } from '@testing-library/react';
import ModalScript from '../utils/js/modal';

export default function Dashboard() {

    //Axios Getting Data from Backend 
    
    const details = sessionStorage.getItem("Details");
    const id = JSON.stringify(details);
    // console.log(id);
    axios.get("http://127.0.0.1:8000/api/wallet/"+1+"")
        .then(function(response){
            console.log(response);
        })

        // for (let index = 0; index < viewData.length; index++) {
        //     const view = 1;
            
        // };
        // var i = 0;
        // while (i < viewData.length) {
        //     i++
        //     console.log(i);
        // }

        

        const islog = sessionStorage.getItem("isLogin");

        const [inputValue, setInputValue] = useState("");
        const previous = useRef("");
        useEffect(()=> {
            previous.current = inputValue;
        }, [inputValue]);

        if (inputValue === "1") {
            var content = <div className="py-3">Please choose a payment method</div>
        }else if (inputValue === "2") {
            var content = <div className="py-3"><table className="table table-bordered"><tr><th>S/N</th><th>Bank Name</th><th>Account Number</th></tr><tr><td>1</td><td>GTB</td><td>0298457390</td></tr></table></div>
        }else{
            var content = <div className="py-3"><form className="form-inline"><input className="form-control mx-1" type="text" placeHolder="Enter Amount" /><input className="form-control mx-1" type="text" placeHolder="Enter Amount" /><input className="btn btn-dark mx-1" type="submit" value="Make Payment"/></form></div>
        }

        if (islog === true) {

            // const viewData = [["4","3","2","1"]];

            // viewData.forEach((viewDatas)=> {
            //     const names = <td></td>;
            //     const price = viewDatas[1];
            // })

    return (
        <>
            <Top />
            <div className="row container-fluid">
                <div className='col-md-2'>
                    <SideNav />
                </div>
                <div className="col-md-10 mt-2">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card shadow-lg mb-4">
                                <div className="card-header bg-dark text-white p-2">Total Balance</div>
                                <div className="card-body text-center">
                                    <span className="money">&#8358; 1234567890</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                        <div className="card shadow-lg">
                                <div className="card-header bg-dark text-white p-2">Fund account</div>
                                <div className="card-body">
                                    <select className="form-control" value={inputValue} onChange={(e)=> setInputValue(e.target.value)}>
                                        <option value="1">Choose Method...</option>
                                        <option value="2">Bank Transfer</option>
                                        <option value="3">Card Payment</option>
                                    </select>
                                    {content}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-4">
                            <div className="card shadow-lg mb-4">
                                <div className="card-header bg-dark text-white">Our Price List</div>
                                <div className="Card-body p-2">
                                    <table className="table table-bordered">
                                        <tr>
                                            <th>S/N</th>
                                            <th>Card</th>
                                            <th>Price</th>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>Neco</td>
                                            <td>0298</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Waec</td>
                                            <td>0298</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="card shadow-lg">
                                <div className="card-header bg-dark text-white">Buy Card</div>
                                <div className="Card-body p-4">
                                    <form>
                                        <div className="form-inline">
                                            <label className="px-2">Amount</label>
                                            <input type="text" className="form-control" placeHolder="Amount"/>
                                            <label className="px-2">Amount</label>
                                            <input type="text" className="form-control" placeHolder="Amount"/>
                                        </div>
                                        <br />
                                        <input type="submit" className="float-right btn btn-dark"/>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-4">
                        <div className="card shadow-lg">
                            <div className="card-header bg-dark text-white">Transaction History</div>
                            <div className="Card-body p-4">
                            <input class="form-control" id="myInput" type="text" placeholder="Search.." />
                            <br />

                                    <table class="table table-bordered">
                                        <thead>
                                            <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Item</th>
                                            <th scope="col">Price </th>
                                            <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td></td>
                                                <td>Otto</td>
                                                <td>
                                                    <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                                        <label class="btn btn-outline-primary" data-toggle="modal" data-target=".bd-example-modal-lg">
                                                            <input type="radio" name="options" id="option1" checked /> View
                                                        </label>
                                                        <label class="btn btn-outline-danger" data-toggle="modal" data-target="#bd-example-modal-lg">
                                                            <input type="radio" name="options" id="option2" /> Delete
                                                        </label>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ModalScript />
        </>
    )

        } else {
            window.location.href = '/'
        }
}