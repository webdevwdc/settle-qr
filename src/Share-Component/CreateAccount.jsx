import React, { Component } from 'react';
 
export default class CreateAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }



    render() {
        return (
            <>
                <div>
                    <h5 className="text-dark1 text-center font-weight-bold">Create Your Account</h5>
                    <form>
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
                            <div className="col-4">
                                <div className="form-group">
                                    <select className="form-control shadow-none rounded-8">
                                        <option value="dd">dd</option>
                                    </select>
                                    <small className="form-text text-muted d-none">We'll never share your email with anyone else.</small>
                                </div>
                            </div>
                            <div className="col-8">
                                <div className="form-group">
                                    <input type="text" placeholder="Phone Number" className="form-control shadow-none rounded-8" />
                                    <small className="form-text text-muted d-none">We'll never share your email with anyone else.</small>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <small>We will send a text with a verification code. Message and data rates may apply</small>
                            </div>
                            <div className="col-12">
                                <div className="form-group">
                                    <input type="text" placeholder="Email" className="form-control shadow-none rounded-8" />
                                    <small className="form-text text-muted d-none">We'll never share your email with anyone else.</small>
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="form-group">
                                    <p className="font-weight-bold mb-2">Enter credit card information</p>
                                    <div className="d-flex border rounded-8 justify-content-between overflow-hidden">
                                        <input className="border-0 shadow-none   py-2  px-2  h-auto form-control" style={{ fontSize: '10px', width: '100px' }} type="text" placeholder="Credit Card Number " />
                                        <input className="border-0 shadow-none  py-2  px--2 h-auto form-control" style={{ fontSize: '10px', width: '50px' }} type="text" placeholder="MM/YY" />
                                        <input className="border-0 shadow-none  py-2  px--2 h-auto form-control" style={{ fontSize: '10px', width: '50px' }} type="text" placeholder="CVC" />
                                        <input className="border-0 shadow-none  py-2  px--2 h-auto form-control" style={{ fontSize: '10px' }} type="text" placeholder="Postal code" />
                                    </div>
                                    <small className="form-text text-muted d-none">We'll never share your email with anyone else.</small>
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div class="form-group form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" for="exampleCheck1">I agree to the Settle Technologies <a href="">Terms</a> and <a href="">Conditions</a> </label>
                                </div>
                            </div>

                            <div className="col-md-12 text-center">
                                <button className="btn btn-primary btn-sm rounded-8 px-4">Create</button>
                            </div>

                        </div>
                    </form>
                </div>
            </>
        )
    }
}
