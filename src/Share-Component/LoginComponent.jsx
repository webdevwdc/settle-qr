import React, { Component } from 'react';
import phoneUrl from "../assets/CountryCodes.json";
import VerifyMobileNumber from './VerifyMobileNumber';

export default class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneNumber: [],
            isOtpOpen: false
        }
    }
    componentDidMount() {
    }
    render() {
        console.log('tag', phoneUrl);
        return (
            <>
                {(this.state.isOtpOpen === false) ?
                    <div>
                        <h5 className="text-dark1 text-center font-weight-bold mb-4">Enter your phone number</h5>
                        <form>
                            <div className="row">

                                <div className="col-4 pr-0">
                                    <div className="form-group">
                                        <select className="form-control shadow-none rounded-8 px-1">
                                            {phoneUrl.map((list, index) => (
                                                <option value="" key={index}>{list.code} {list.dial_code}</option>
                                            ))}

                                        </select>
                                    </div>
                                </div>
                                <div className="col-8">
                                    <div className="form-group">
                                        <input type="text" placeholder="Phone Number" className="form-control shadow-none rounded-8" />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <small>We will send a text with a verification code. Message and data rates may apply</small>

                                    <p className="pt-4">Or enter the email associated with your account and we will send you a verification code</p>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <input type="text" placeholder="Email" className="form-control shadow-none rounded-8" />
                                        <small className="form-text text-muted d-none">We'll never share your email with anyone else.</small>
                                    </div>
                                </div>



                                <div className="col-md-12 text-center">
                                    <button className="btn btn-primary btn-sm rounded-8 px-4"  onClick={() => this.setState({ isOtpOpen: true })}>Continue</button>
                                </div>

                            </div>
                        </form>
                    </div>
                    : null}

                {(this.state.isOtpOpen === true) ? <VerifyMobileNumber /> : null}
            </>
        )
    }
}
