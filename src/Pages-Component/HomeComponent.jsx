import React, { Component } from 'react'
import ImagePath from '../assets/ImagePath'
import DefaultModal from '../Modals-Component';
import HeaderComponent from '../Share-Component/HeaderComponent'
import HeroBannerComponent from '../Share-Component/HeroBannerComponent';
import PayableBillComponent from '../Share-Component/PayableBillComponent';

export default class HomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            homeCoupleBtn: true,
            showModal: false
        }

    }

    onClose() {
        this.setState({ showModal: false })
    }
    render() {
        return (
            <>
                <HeaderComponent />

                <HeroBannerComponent />

                {/* 
                <CreateAccount />
                <VerifyMobileNumber />
                <EditAccount />
                <PaymentMethods />
                <OrderHistory /> */}
                {/* <ReceiptComponent/> */}



                <div className={'homeCoupleBtn mt-n2'}>
                    <div className={'d-flex bg-secondary'}>
                        <div className={'w-50'}><button onClick={() => this.setState({ homeCoupleBtn: true })} className={'btn py-2 shadow-none w-100 text-center text-white ' + (this.state.homeCoupleBtn === true ? 'btn-primary' : 'btn-secondary')}>View Menu</button></div>
                        <div className={'w-50'}><button onClick={() => this.setState({ homeCoupleBtn: false, showModal: true, })} className={'btn py-2 shadow-none w-100 text-center text-white  ' + (this.state.homeCoupleBtn === false ? 'btn-primary' : 'btn-secondary')}>Pay Bill</button></div>
                    </div>
                </div>


                {(this.state.homeCoupleBtn === true) ?
                    <figure className={'foodPrintedMenu d-block m-0 pt-4'}>
                        <img src={ImagePath.img2} alt={''} className={'d-block w-100'} />
                    </figure>
                    : null
                }
                {(this.state.homeCoupleBtn === false) ?
                    <PayableBillComponent />
                    : null
                }

                <DefaultModal showModal={this.state.showModal} onClose={this.onClose.bind(this)} containerStyle={{ backgroundColor: 'transparent' }} >
                    <div className="text-center">
                        <button className="btn rounded-8 btn-primary w-100">
                            <h5 className="d-block mb-0">Create Account</h5>
                            <small className="d-block">Save info for future payments</small>
                        </button>

                        <button className="btn rounded-8 py-3 btn-dark2 w-100 my-4" onClick={this.onClose.bind(this)}>
                            <h5 className="d-block text-white mb-0">Check out as guest</h5>
                        </button>

                        <button className="btn rounded-8 btn-primary">
                            Login
                        </button>
                    </div>
                </DefaultModal>

            </>
        )
    }
}
