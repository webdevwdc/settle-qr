import React, { Component } from 'react';

import telNumber from '../assets/CountryCodes.json';
import VerifyMobileNumber from './VerifyMobileNumber';
export default class CreateAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOtpOpen: false
        }
    }



    render() {
        return (
            <>
                {(this.state.isOtpOpen === false) ?
                    <div>
                        <h5 className="text-dark1 text-center font-weight-bold">Create Your Account</h5>
                        <form noValidate>
                            <div className="row">
                                <div className="col-6">
                                    <div className="form-group">
                                        <input type="text" placeholder="First Name" className="form-control shadow-none rounded-8" />
                                        <small className="form-text text-muted d-none">We'll never share your email with anyone else.</small>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <input type="text" placeholder="Last Name" className="form-control shadow-none rounded-8" />
                                        <small className="form-text text-muted d-none">We'll never share your email with anyone else.</small>
                                    </div>
                                </div>
                                <div className="col-4 pr-0">
                                    <div className="form-group">
                                        <select className="form-control shadow-none px-1 rounded-8">
                                            <option value="US +1" >US +1</option>
                                            {telNumber.map((list, index) => (
                                                <option value={list.code + list.dial_code} key={index}>{list.code} {list.dial_code}</option>
                                            ))}

                                        </select>
                                        <small className="form-text text-muted d-none">We'll never share your email with anyone else.</small>
                                    </div>
                                </div>
                                <div className="col-8">
                                    <div className="form-group">
                                        <input type="number" placeholder="Phone Number" className="form-control shadow-none rounded-8" />
                                        <small className="form-text text-muted d-none">We'll never share your email with anyone else.</small>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <p><small>We will send a text with a verification code. Message and data rates may apply</small></p>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <input type="text" placeholder="email" className="form-control shadow-none rounded-8" />
                                        <small className="form-text text-muted d-none">We'll never share your email with anyone else.</small>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="form-group">
                                        <p className="font-weight-bold mb-2">Enter credit card information</p>
                                        <div className="d-flex border rounded-8 justify-content-between overflow-hidden">
                                            <input className="border-0 shadow-none rounded-0   py-2  px-2  h-auto form-control" style={{ fontSize: '10px', width: '100px' }} maxLength="16" type="number" placeholder="Credit Card Number " />
                                            <input className="border-0 shadow-none rounded-0  py-2  px--2 h-auto form-control" style={{ fontSize: '10px', width: '50px' }} type="text" placeholder="MM/YY" />
                                            <input className="border-0 shadow-none rounded-0  py-2  px--2 h-auto form-control" style={{ fontSize: '10px', width: '50px' }} type="number" placeholder="CVC" />
                                            <input className="border-0 shadow-none rounded-0  py-2  px--2 h-auto form-control" style={{ fontSize: '10px' }} type="number" placeholder="Postal code" />
                                        </div>
                                        <small className="form-text text-muted d-none">We'll never share your email with anyone else.</small>
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="form-group form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" htmlFor="exampleCheck1">I agree to the Settle Technologies <a href="">Terms</a> and <a href="">Conditions</a> </label>
                                    </div>
                                </div>

                                <div className="col-md-12 text-center">
                                    <button className="btn btn-primary btn-sm rounded-8 px-4" onClick={() => this.setState({ isOtpOpen: true })}>Create</button>
                                </div>

                            </div>
                        </form>
                    </div>
                    : null
                }

                {(this.state.isOtpOpen === true) ? <VerifyMobileNumber /> : null}

            </>
        )
    }
}
