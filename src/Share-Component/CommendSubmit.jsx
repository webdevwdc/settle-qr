import React, { Component } from 'react'
import StarRatingComponent from './StarRatingComponent'

import DefaultModal from "../Modals-Component"



export default class CommendSubmit extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showModal: false,
            modalContentType: ""
        }
    }

    onClose = () => {
        this.setState({ showModal: false, modalContentType: "" })
    }

    renderModalContent() {
        let Content = ""

        switch (this.state.modalContentType) {
            case "1":
                Content = this.getContent();
                // Content = 'sadadsa';
                break;

            case "2":
                Content = "B";
                break;

            case "3":
                Content = "C";
                break;
        }
        return Content;

    }

    getContent() {
        return (
            <div>
                <h1>Hello World</h1>
            </div>
        )


    };

    render() {
        return (
            <>
                <div className="p-3">
                    <h6 className="font-weight-bold text-dark1">Rate your favorite dishes</h6>
                    <div className="d-flex justify-content-between">
                        <div>
                            <button style={{ width: '100px', fontSize: '12px', padding: '12px 0' }} className="btn rounded-8   btn-primary" onClick={() => this.setState({ showModal: true, modalContentType: "1" })}>Cheeseburger</button>
                        </div>
                        <div>
                            <button style={{ width: '100px', fontSize: '12px', padding: '12px 0' }} className="btn rounded-8   btn-primary" onClick={() => this.setState({ showModal: true, modalContentType: "2" })}>Beer</button>
                        </div>
                        <div>
                            <button style={{ width: '100px', fontSize: '12px', padding: '12px 0' }} className="btn rounded-8   btn-primary" onClick={() => this.setState({ showModal: true, modalContentType: "3" })}>Nachos</button>
                        </div>
                    </div>
                    <div className="pt-2">
                        <table className="table table-borderless font-weight-bold text-dark1">
                            <tr>
                                <td>Food</td>
                                <td><StarRatingComponent /> </td>
                            </tr>
                            <tr>
                                <td>Service</td>
                                <td><StarRatingComponent /> </td>
                            </tr>
                            <tr>
                                <td>Ambiance</td>
                                <td><StarRatingComponent /> </td>
                            </tr>
                        </table>
                    </div>

                    <div className="submitBox">
                        <h6 className="text-dark1">Tell us more! </h6>
                        <textarea className="form-control rounded-8" rows="3"></textarea>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                        <div><a className={'btn text-primary font-weight-bold'}>Skip</a></div>
                        <div><a className={'btn text-primary font-weight-bold'}>Submit</a></div>
                    </div>
                </div>


                <DefaultModal showModal={this.state.showModal} onClose={this.onClose.bind(this)}>
                    {this.renderModalContent()}

                </DefaultModal>


            </>
        )
    }
}
