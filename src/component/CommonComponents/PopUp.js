import React from 'react'
import { Modal } from 'react-bootstrap'
import { cancelIcon } from '../../assets/images/Index'
// import '../../css/popUp.css'

function PopUP({ shouldModalOpen, closeModal, title, children, modelSize = '' }) {
    return (
        <div>
            <Modal
                show={shouldModalOpen}
                onHide={closeModal}
                animation={true}
                size={modelSize}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                backdrop="static"
                dialogClassName="modal-90w"
            // contentClassName={modelClassName}
            >
                <Modal.Header id="example-custom-modal-styling-title">
                    <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                        <span className='popup-header-txt'>{title}</span>
                        <img
                            alt="close"
                            title="close"
                            src={cancelIcon}
                            style={{ height: 24, width: 24, cursor: 'pointer' }}
                            onClick={closeModal}
                        />
                    </div>
                </Modal.Header>
                <Modal.Body>
                    {
                        children
                    }
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default PopUP