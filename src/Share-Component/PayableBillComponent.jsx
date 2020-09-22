import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class PayableBillComponent extends Component {
    render() {
        return (
            <>
                <div className="pt-4">
                    <div className="px-3">
                        <div class="form-group form-check">
                            <input type="radio" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label font-weight-bold text-dark1" for="exampleCheck1">Select all</label>
                        </div>
                    </div>
                    <hr />
                    <div className="px-3">
                        <div class="form-group form-check">
                            <input type="radio" className="form-check-input" id="exampleCheck2" />
                            <label className="form-check-label font-weight-bold text-dark d-flex align-items-center justify-content-between" for="exampleCheck2">
                                <span>Seat 1</span>
                                <span>$ 21.75</span>
                            </label>
                        </div>

                        <div className="px-4">
                            <div class="form-group form-check">
                                <input type="radio" className="form-check-input" id="exampleCheck3" />
                                <label className="form-check-label font-weight-bold text-dark d-flex align-items-center justify-content-between" for="exampleCheck3">
                                    <span>1/4 Chicken wings</span>
                                    <span>$ 3.00</span>
                                </label>
                            </div>
                            <div class="form-group form-check">
                                <input type="radio" className="form-check-input" id="exampleCheck4" />
                                <label className="form-check-label font-weight-bold text-dark d-flex align-items-center justify-content-between" for="exampleCheck4">
                                    <span>1 Cheeseburger</span>
                                    <span>$ 15.00</span>
                                </label>
                            </div>
                            <div class="form-group form-check">
                                <input type="radio" className="form-check-input" id="exampleCheck5" />
                                <label className="form-check-label font-weight-bold text-dark d-flex align-items-center justify-content-between" for="exampleCheck5">
                                    <span>1/4 Beer pitcher</span>
                                    <span>$ 3.75</span>
                                </label>
                            </div>
                        </div>
                    </div> 
                    {/* Seat end */}
                    <hr />
                    <div className="px-3">
                        <div class="form-group form-check">
                            <input type="radio" className="form-check-input" id="exampleCheck2" />
                            <label className="form-check-label font-weight-bold text-dark d-flex align-items-center justify-content-between" for="exampleCheck2">
                                <span>Seat 2</span>
                                <span>$ 21.75</span>
                            </label>
                        </div>

                        <div className="px-4">
                            <div class="form-group form-check">
                                <input type="radio" className="form-check-input" id="exampleCheck3" />
                                <label className="form-check-label font-weight-bold text-dark d-flex align-items-center justify-content-between" for="exampleCheck3">
                                    <span>1/4 Chicken wings</span>
                                    <span>$ 3.00</span>
                                </label>
                            </div>
                            <div class="form-group form-check">
                                <input type="radio" className="form-check-input" id="exampleCheck4" />
                                <label className="form-check-label font-weight-bold text-dark d-flex align-items-center justify-content-between" for="exampleCheck4">
                                    <span>1 Cheeseburger</span>
                                    <span>$ 15.00</span>
                                </label>
                            </div>
                            <div class="form-group form-check">
                                <input type="radio" className="form-check-input" id="exampleCheck5" />
                                <label className="form-check-label font-weight-bold text-dark d-flex align-items-center justify-content-between" for="exampleCheck5">
                                    <span>1/4 Beer pitcher</span>
                                    <span>$ 3.75</span>
                                </label>
                            </div>
                        </div>
                    </div> 
                    {/* Seat end */}
                </div>

                <div className="position-fixed bottom-0 left-0 w-100">
                    <Link to="/guest-pay" className="btn btn-primary w-100 rounded-0 shadow-none py-2">Proceed</Link>
                </div>
            </>
        )
    }
}
