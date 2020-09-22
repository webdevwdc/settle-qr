import React, { Component } from 'react'
import ImagePath from '../assets/ImagePath'
import HeaderComponent from '../Share-Component/HeaderComponent'
import HeroBannerComponent from '../Share-Component/HeroBannerComponent';
import PayableBillComponent from '../Share-Component/PayableBillComponent';

export default class HomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            homeCoupleBtn: true,
        }

    }
    render() {
        return (
            <>
                <HeaderComponent />

                <HeroBannerComponent />

                <div className={'homeCoupleBtn mt-n2'}>
                    <div className={'d-flex bg-secondary'}>
                        <div className={'w-50'}><button onClick={() => this.setState({ homeCoupleBtn: true })} className={'btn py-2 shadow-none w-100 text-center text-white ' + (this.state.homeCoupleBtn === true ? 'btn-primary' : 'btn-secondary')}>View Menu</button></div>
                        <div className={'w-50'}><button onClick={() => this.setState({ homeCoupleBtn: false })} className={'btn py-2 shadow-none w-100 text-center text-white  ' + (this.state.homeCoupleBtn === false ? 'btn-primary' : 'btn-secondary')}>Pay Bill</button></div>
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

            </>
        )
    }
}
