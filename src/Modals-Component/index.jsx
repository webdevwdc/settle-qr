import React from 'react'
import Modal, { closeStyle } from 'simple-react-modal'


const DefaultModal = (props) => {
    return(
        <Modal show={props.showModal} onClose={props.onClose.bind(this)}  >
            {props.children}
        </Modal>
    )
}

export default DefaultModal;