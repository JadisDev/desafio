import ReactPlayer from 'react-player'
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Modal from 'react-bootstrap/Modal'


const ModalSuccess = (props) => {

    const [showModal, setShowModal] = useState(false)
    const handleClose = () => setShowModal(false)
    const handleShow = () => setShowModal(true)

    useEffect(() => {
        if (props.alternativeSelected.showVideo) {
            handleShow()
        }
    }, [props.alternativeSelected.showVideo])

    return (
        <Modal show={showModal} onHide={handleClose} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Resposta correta</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ReactPlayer url='video.mp4' muted={true} controls={true} playing={true} />
            </Modal.Body>
            <Modal.Footer>
                <h3>Parabéns, continue com as questões </h3>
            </Modal.Footer>
        </Modal>
    )
}

function mapToStateToProps(state) {
    return {
        alternativeSelected: state.alternativeSelected
    }
}

function mapDispatchProp(dispatch) {
    return {

    }
}

export default connect(mapToStateToProps, mapDispatchProp)(ModalSuccess)