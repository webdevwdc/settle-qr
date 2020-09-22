import React, { Component } from 'react'
import ImagePath from '../assets/ImagePath'
import HeaderComponent from '../Share-Component/HeaderComponent'
import HeroBannerComponent from '../Share-Component/HeroBannerComponent'

export default class GuestPayComponent extends Component {
    render() {
        return (
            <>
                <HeaderComponent />
                <HeroBannerComponent />
                <div className="p-4">
                    <table className="table  text-dark1 font-weight-bold table-borderless border border-secondary" style={{ 'fontSize': '12px' }}>
                        <tr>
                            <td className="p-2">
                                1/4 Chicken wings
                            </td>
                            <td className="p-2">
                                $ 3.00
                            </td>
                        </tr>
                        <tr>
                            <td className="p-2">
                                1 Cheeseburger
                            </td>
                            <td className="p-2">
                                $ 15.00
                            </td>
                        </tr>
                        <tr>
                            <td className="p-2">
                                1/4 Beer pitcher
                            </td>
                            <td className="p-2">
                                $ 3.75
                            </td>
                        </tr>



                        <tr className="border-top border-secondary">
                            <td className="p-2">
                                Tax
                            </td>
                            <td className="p-2">
                                $ 3.26
                            </td>
                        </tr>
                        <tr>
                            <td className="p-2">
                                Subtotal
                            </td>
                            <td className="p-2">
                                $ 25.01
                            </td>
                        </tr>


                        <tr className="border-top border-secondary" style={{ fontSize: '17px' }}>
                            <td className="p-2">
                                Total
                            </td>
                            <td className="p-2">
                                $ 29.51
                            </td>
                        </tr>


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
                    <div className="d-flex justify-content-between">
                        <button className="btn btn-outline-secondary   btn-lg text-dark font-weight-bold rounded-8" style={{ width: '100px' }}>Other</button>
                        <button className="btn btn-primary btn-lg text-white rounded-8" style={{ width: '100px' }}>
                            <img  style={{height:'22px'}} src={ImagePath.applePay} alt={'Apple Pay'} />
                        </button>
                        <button className="btn btn-outline-secondary  btn-lg text-white rounded-8" style={{ width: '100px' }}>
                            <img  style={{height:'22px'}} src={ImagePath.gPay} alt={'Google Pay'} />
                        </button>
                    </div>
                </div>

            </>
        )
    }
}
