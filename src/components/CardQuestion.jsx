import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import './CardQuestions.css'
import Modal from 'react-bootstrap/Modal'
import Button from '../components/Button'
import ListAlternative from './ListAlternative'
import { connect } from 'react-redux'
import { chekAlternative, disableVideo } from '../alternative/alternativeAction'

const CardQuestion = (props) => {

    const { questions, title, show } = props
    const [showModal, setShowModal] = useState(false)
    const handleClose = () => setShowModal(false)
    const handleShow = () => setShowModal(true)
    const [titleSelectd, setTitleSelected] = useState('')
    const [questionSelected, setQuestionSelected] = useState({})

    const alternatives = (questions, title) => {
        props.disableVideo()
        setTitleSelected(title)
        setQuestionSelected(questions)
        handleShow()
    }

    return (
        <div>
            <Card className="card-question">
                <Card.Body>
                    <Card.Title style={{ fontWeight: "bold" }} > {title} </Card.Title>
                    {questions && questions.length && questions.map((question, index) => (
                        <Card.Text className="question" onClick={e => alternatives(question, title)}>
                            {question.description}
                        </Card.Text>
                    ))}
                </Card.Body>
            </Card>

            <Modal show={showModal} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>{titleSelectd}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {props.alternativeSelected.showVideo == false &&
                        <>
                            {questionSelected.description}
                            <ListAlternative
                                alternatives={questionSelected.alternatives}
                                show={show}
                            />
                        </>
                    }
                </Modal.Body>
                    {props.alternativeSelected.showVideo == false && show == true &&
                        <Modal.Footer>
                            <Button
                                variant="primary"
                                action={() => props.chekAlternative(
                                    props.alternativeSelected.alternativeSelected,
                                    props.alternativeSelected.alternativeResponse,
                                    handleClose
                                )}
                                name="Verificar"
                                type="submit"
                            />
                        </Modal.Footer>
                    }
            </Modal>
        </div>
    )
}

function mapToStateToProps(state) {
    return {
        alternativeSelected: state.alternativeSelected
    }
}

function mapDispatchProp(dispatch) {
    return {
        chekAlternative(alternativeId, check, handleClose) {
            const action = chekAlternative(alternativeId, check, () => {
                handleClose()
            })
            dispatch(action)
        },
        disableVideo() {
            const actionDisableVideo = disableVideo()
            dispatch(actionDisableVideo)
        }
    }
}

export default connect(mapToStateToProps, mapDispatchProp)(CardQuestion)