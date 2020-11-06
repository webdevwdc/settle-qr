import React, { Component } from 'react'
import ImagePath from '../assets/ImagePath'

export default class HeroBannerComponent extends Component {
    render() {
        return (
            <>
                <div className={'heroBanner text-center'} style={{ backgroundImage: `url(${ImagePath.img1})` }}>
                    <h5 className={'text-white mb-4'}>Burger Joint A </h5>
                    <div className={'d-flex justify-content-around'}>
                        <div className={'text-white'}>Table 50</div>
                        <div className={'text-white'}>6 Jun 2020</div>
                    </div>
                </div>
            </>
        )
    }
}
