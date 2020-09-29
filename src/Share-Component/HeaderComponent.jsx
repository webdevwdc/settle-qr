import React, { Component } from 'react';
import DefaultModal from '../Modals-Component'
import CreateAccount from './CreateAccount'
import LoginComponent from './LoginComponent'

export default class HeaderComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpenMenu: false,
            showModal: false,
            chooseLoginRegister: '',
        }
    }
    onClose = () => {
        this.setState({ showModal: false })
    }



    render() {
        return (
            <>
                <header className="position-sticky top-0 left-0 bg-white">
                    <div className="d-flex justify-content-end py-2 px-3">
                        <div className="hamBergerBtn" onClick={() => this.setState({ isOpenMenu: !this.state.isOpenMenu })}>
                            <i className="material-icons align-middle">menu</i>
                        </div>
                    </div>
                </header>
                <div className={"sideMenuWrap border-0 rounded-0 vh-100 card border-0 position-fixed " + (this.state.isOpenMenu ? 'active' : '')} >
                    <div className="bg-primary">
                        <p className="text-center mb-0 py-3 text-white font-weight-bold">Settle</p>
                    </div>
                    <div className="h-100 overflow-auto  ">
                        <div className="list-group rounded-0 ">
                            <button
                                className="list-group-item list-group-item-action font-weight-bold "
                                onClick={() => this.setState({ showModal: true, isOpenMenu: false, chooseLoginRegister: 'login' })} >Log in</button>

                            <button className="list-group-item list-group-item-action font-weight-bold" onClick={() => this.setState({ showModal: true, isOpenMenu: false, chooseLoginRegister: 'createAccount' })}>Sign up</button>
                        </div>

                        <div className="userDetails d-none-">
                            <table className="table table-borderless">
                                <tbody>
                                    <tr>
                                        <td>
                                            <span className="material-icons">
                                                person
                                            </span>
                                        </td>
                                        <td>
                                            <small className="font-weight-bold">Joseph Eshaq</small> <br />
                                            <a className="d-block text-dark font-weight-bold" href="tel:+14185550100"><small className="font-weight-bold">+1 418 555-0100</small></a>
                                            <a className="d-inline-block text-dark font-weight-bold" href="mailto:jeshaq@gmail.com"><small className="font-weight-bold">jeshaq@gmail.com</small></a>
                                            <a className="d-inline-block font-weight-bold ml-3"><small className="font-weight-bold">Edit</small></a>
                                        </td>
                                    </tr>
                                    <tr onClick={event => window.location.href = '/payment-methods'}>
                                        <td>
                                            <span className="material-icons">
                                                credit_card
                                            </span>
                                        </td>
                                        <td>
                                            <small className="font-weight-bold">Payment Method</small>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="material-icons">
                                                assignment
                                            </span>
                                        </td>
                                        <td>
                                            <small className="font-weight-bold">Order history</small>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="material-icons">
                                                info
                                            </span>
                                        </td>
                                        <td>
                                            <small className="font-weight-bold">Help</small>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>

                        <div className="list-group rounded-0 d-none-">
                            <button className="list-group-item list-group-item-action font-weight-bold">Sign out</button>
                        </div>

                    </div>
                    <div className="card-footer text-center">
                        <small className="font-weight-bold">© 2020 Settle QR.</small>
                    </div>
                </div>
                <div
                    className={"sideMenuWrapMask  position-fixed w-100 h-100 top-0 left-0 " + (this.state.isOpenMenu ? 'active' : '')}
                    onClick={() => this.setState({ isOpenMenu: false })}></div>

                <DefaultModal showModal={this.state.showModal} onClose={this.onClose.bind(this)} containerStyle={{ 'backgroundColor': '#F2F2F2' }}>
                    {(this.state.chooseLoginRegister === 'login') ? <LoginComponent /> : null}

                    {(this.state.chooseLoginRegister === 'createAccount') ? <CreateAccount /> : null}


                </DefaultModal>
            </>
        )
    }
}
