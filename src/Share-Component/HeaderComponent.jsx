import React, { Component } from 'react'

export default class HeaderComponent extends Component {
    render() {
        return (
            <>
                <header>
                    <div className="d-flex justify-content-end py-2 px-3">
                        <div className="hamBergerBtn">                            
                            <i className="material-icons align-middle">menu</i>
                        </div>
                    </div>
                </header>
            </>
        )
    }
}
