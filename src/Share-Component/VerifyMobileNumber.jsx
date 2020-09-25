import React, { Component } from 'react'

export default class VerifyMobileNumber extends Component {
    render() {
        return (
            <>
                <div>
                    <h5 className="text-dark1 text-center mb-4 font-weight-bold">Verify your number</h5>

                    <p className="text-dark1 text-center mb-4"><small className="font-weight-bold">Enter 6 digit verification code sent to your phone</small></p>

                    <form>
                        <div className="row justify-content-around">
                            <div className="col-4">
                                <div className="form-group">
                                    <input type="text" placeholder=" " className="form-control shadow-none rounded-8" />
                                    <small className="form-text text-muted d-none">We'll never share your email with anyone else.</small>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-group">
                                    <input type="text" placeholder=" " className="form-control shadow-none rounded-8" />
                                    <small className="form-text text-muted d-none">We'll never share your email with anyone else.</small>
                                </div>
                            </div>
                            <div className="col-md-12 text-center">
                                <button className="btn btn-primary btn-sm rounded-8 px-4">Confirm</button>
                            </div>
                            <div className="col-md-12">
                                <p><small>If you have not recieved a code, click <a href="#" className="font-weight-bold">here</a> to recieve another one</small></p>
                            </div>
                        </div>
                    </form>
                </div>
            </>
        )
    }
}
