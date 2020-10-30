import React, { Component } from 'react'
import ImagePath from '../assets/ImagePath'
import DefaultModal from '../Modals-Component';
import CreateAccount from '../Share-Component/CreateAccount';
import HeaderComponent from '../Share-Component/HeaderComponent'
import HeroBannerComponent from '../Share-Component/HeroBannerComponent';
import LoginComponent from '../Share-Component/LoginComponent';
import PayableBillComponent from '../Share-Component/PayableBillComponent';

const DefaultContent = (props) => {

    return (
        <div className="text-center">
            <button className="btn rounded-8 btn-primary w-100" onClick={() => props.changeContentType('signUp')}>
                <h5 className="d-block mb-0">Create Account</h5>
                <small className="d-block">Save info for future payments</small>
            </button>

            <button className="btn rounded-8 py-3 btn-dark2 w-100 shadow-none my-4" onClick={() => props.onClose()}>
                <h5 className="d-block text-white mb-0">Check out as guest</h5>
            </button>

            <button className="btn rounded-8 btn-primary px-4" onClick={() => props.changeContentType('login')}>
                Login
            </button>
        </div>
    )
}
export default class HomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            homeCoupleBtn: true,
            showModal: false,
            contentType: 'default',
        }

    }

    changeContentType(contentType) {
        this.setState({ contentType })
    }

    onClose() {
        this.setState({ showModal: false, contentType: 'default', homeCoupleBtn: false, })
    }
    render() {
        let { contentType } = this.state;
        return (
            <>
                <HeaderComponent />

                <HeroBannerComponent />

                <div className={'homeCoupleBtn mt-n2'}>
                    <div className={'d-flex bg-secondary'}>
                        <div className={'w-50'}><button onClick={() => this.setState({ homeCoupleBtn: true })} className={'btn py-2 shadow-none w-100 text-center text-white ' + (this.state.homeCoupleBtn === true ? 'btn-primary' : 'btn-secondary')}>View Menu</button></div>
                        <div className={'w-50'}><button style={{ pointerEvents: this.state.homeCoupleBtn === false ? 'none' : '' }} onClick={() => this.setState({ showModal: true, })} className={'btn py-2 shadow-none w-100 text-center text-white  ' + (this.state.homeCoupleBtn === false ? 'btn-primary' : 'btn-secondary')}>Pay Bill</button></div>
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

                <DefaultModal showModal={this.state.showModal} onClose={this.onClose.bind(this)}
                    containerStyle={{ backgroundColor: contentType === 'default' ? 'transparent' : '#F2F2F2' }} >



                    {contentType === 'default' && <DefaultContent changeContentType={this.changeContentType.bind(this)} onClose={this.onClose.bind(this)} />}
                    {contentType === 'login' && <LoginComponent />}
                    {contentType === 'signUp' && <CreateAccount />}



                </DefaultModal>

            </>
        )
    }
}
