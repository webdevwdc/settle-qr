import React, { Component } from 'react'
import Modal, { closeStyle } from 'simple-react-modal'

export default class DefaultModal extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    show() {
        this.setState({ show: true })
    }

    close() {
        this.setState({ show: false })
    }

    render() {
        return (
            <Modal show={this.state.show} onClose={this.close} transitionSpeed={1000}>
                <div>
                    <a style={closeStyle} onClick={this.close.bind(this)}>X</a>

                hey, click outside of me to close me!</div>
            </Modal>
        )
    }
}
