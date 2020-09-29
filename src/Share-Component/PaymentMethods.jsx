import React, { Component } from 'react'
import ImagePath from '../assets/ImagePath'
import HeaderComponent from './HeaderComponent'

export default class PaymentMethods extends Component {
    render() {
        return (
            <>
            <HeaderComponent />
                <div>
                    <h5 className="text-dark1 text-center font-weight-bold mb-5">Payment methods</h5>
                    <table className="table table-borderless">
                        <tbody>
                            <tr>
                                <td className="align-middle"><img src={ImagePath.visa} alt="Visa" /></td>
                                <td className="align-middle"> <button className="btn btn-primary text-nowrap shadow-none rounded-8 w-100" >Visa ***** 4819</button></td>
                                <td className="align-middle"> <button className="btn font-weight-bold shadow-none btn-sm p-0" >Edit</button></td>
                                <td className="align-middle"><button className="btn font-weight-bold shadow-none btn-sm p-0" >Remove</button></td>
                            </tr>

                            {[0, 1, 2, 3, 4, 5, 6].map(list => (
                                <tr>
                                    <td className="align-middle"> <img src={ImagePath.master} alt="Visa" /></td>
                                    <td className="align-middle"><button className="btn text-white btn-dark2 text-nowrap shadow-none rounded-8 w-100" >Master ***** 4819</button></td>
                                    <td className="align-middle"><button className="btn font-weight-bold shadow-none btn-sm p-0" >Edit</button></td>
                                    <td className="align-middle"> <button className="btn font-weight-bold shadow-none btn-sm p-0" >Remove</button></td>
                                </tr>
                            ))}

                        </tbody>
                    </table>

                    <div className="mb-4">
                        <button className="btn btn-outline-blue border-0 font-weight-bold shadow-none">+ Add payment method</button>
                    </div>

                    <div className="w-100 text-center">
                        <button className="btn btn-primary btn-sm rounded-8 px-4">Save</button>
                    </div>

                </div>
            </>
        )
    }
}
