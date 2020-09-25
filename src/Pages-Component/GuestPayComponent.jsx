import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ImagePath from '../assets/ImagePath'
import HeaderComponent from '../Share-Component/HeaderComponent'
import HeroBannerComponent from '../Share-Component/HeroBannerComponent'
import OtherPaymentInputComponent from '../Share-Component/OtherPaymentInputComponent'

export default class GuestPayComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOtherPayment: false,
        }
    }


    render() {
        return (
            <>
                <HeaderComponent />
                <HeroBannerComponent />
                <div className="p-4">
                    <table className="table  text-dark1 font-weight-bold table-borderless border border-secondary" style={{ 'fontSize': '12px' }}>
                        <tbody>
                            <tr>
                                <td className="p-2">
                                    1/4 Chicken wings
                            </td>
                                <td className="p-2 text-right">
                                    $ 3.00
                            </td>
                            </tr>
                            <tr>
                                <td className="p-2">
                                    1 Cheeseburger
                            </td>
                                <td className="p-2 text-right">
                                    $ 15.00
                            </td>
                            </tr>
                            <tr>
                                <td className="p-2">
                                    1/4 Beer pitcher
                            </td>
                                <td className="p-2 text-right">
                                    $ 3.75
                            </td>
                            </tr>



                            <tr className="border-top border-secondary">
                                <td className="p-2">
                                    Tax
                            </td>
                                <td className="p-2 text-right">
                                    $ 3.26
                            </td>
                            </tr>
                            <tr>
                                <td className="p-2">
                                    Subtotal
                            </td>
                                <td className="p-2 text-right">
                                    $ 25.01
                            </td>
                            </tr>


                            <tr className="border-top border-secondary" style={{ fontSize: '17px' }}>
                                <td className="p-2">
                                    Total
                            </td>
                                <td className="p-2 text-right">
                                    $ 29.51
                            </td>
                            </tr>


                        </tbody>
                    </table>
                </div>
                {/* Table Wraper End */}

                <div className="chooseTops px-3">
                    <h5 className="text-dark1 font-weight-bold">Tip</h5>
                    <div className="d-flex justify-content-between">
                        <button className="btn btn-dark2 btn-lg text-white rounded-8" style={{ width: '94px' }}>15%</button>
                        <button className="btn btn-primary btn-lg text-white rounded-8" style={{ width: '94px' }}>18%</button>
                        <button className="btn btn-dark2 btn-lg text-white rounded-8" style={{ width: '94px' }}>Other</button>
                    </div>

                    <p className="text-dark1 font-weight-bold mb-2 pt-4">Select Your Payment Method</p>

                    {/* Other Payment Method Start */}

                    {(this.state.isOtherPayment === true) ? <OtherPaymentInputComponent /> : null}

                    {/* Other Payment Method Start */}
                    <div className="d-flex flex-wrap justify-content-between pb-5">
                        <button className="btn mb-3 btn-outline-secondary    btn-lg text-dark font-weight-bold rounded-8" onClick={() => this.setState({ isOtherPayment: !this.state.isOtherPayment })} style={{ width: '80px', fontSize: '1rem' }}>Other</button>
                        <button className="btn mb-3 btn-outline-secondary   btn-lg text-dark font-weight-bold rounded-8 " style={{ width: 'auto', fontSize: '1rem' }}>Pay with Visa ***** 4819</button>
                        <Link to="/thanks" className="btn mb-3 btn-primary btn-lg text-white rounded-8" style={{ width: '100px' }}>
                            <img style={{ height: '20px' }} src={ImagePath.applePay} alt={'Apple Pay'} />
                        </Link>
                        <Link to="/thanks" className="btn mb-3 btn-outline-secondary  btn-lg text-white rounded-8" style={{ width: '100px' }}>
                            <img style={{ height: '20px' }} src={ImagePath.gPay} alt={'Google Pay'} />
                        </Link>
                    </div>
                </div>
                <div className="position-fixed bottom-0 left-0 w-100">
                    <Link to="/thanks" className="btn btn-primary w-100 rounded-0 shadow-none py-2">Pay</Link>
                </div>
            </>
        )
    }
}
