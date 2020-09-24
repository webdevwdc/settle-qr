import React from 'react'
import Modal, { closeStyle } from 'simple-react-modal'


const DefaultModal = (props) => {
    console.log('tag------------------', props);
    return (
        <Modal
            show={props.showModal}
            onClose={props.onClose.bind(this)}
            style={{ display: 'flex' }}
            containerStyle={{ margin: 'auto', width: '400px', maxWidth: '90%', borderRadius: '8px', border: '1px solid rgba(0, 0, 0, 0.125)', padding: '15px' }}
        >
            {props.children}
        </Modal>
    )
}

export default DefaultModal;