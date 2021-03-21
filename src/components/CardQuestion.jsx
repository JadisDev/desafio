import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import './CardQuestions.css'
import Modal from 'react-bootstrap/Modal'
import Button from '../components/Button'
import ListAlternative from './ListAlternative'
import { connect } from 'react-redux'
import { chekAlternative, disableVideo } from '../alternative/alternativeAction'
import ReactPlayer from 'react-player'

const CardQuestion = (props) => {

    const { questions, title, show } = props
    const [showModal, setShowModal] = useState(false)
    const handleClose = () => setShowModal(false)
    const handleShow = () => setShowModal(true)
    const [titleSelectd, setTitleSelected] = useState('')
    const [questionSelected, setQuestionSelected] = useState({})

    const alternatives = (questions, title) => {

        console.log(props.alternativeSelected.showVideo)
        console.log(show)

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
                    {props.alternativeSelected.showVideo &&
                        <ReactPlayer url='video.mp4' muted={true} controls={true} playing={true} />
                    }
                </Modal.Body>
                {props.alternativeSelected.showVideo == false &&
                    <Modal.Footer>
                        <Button
                            variant="primary"
                            action={() => props.chekAlternative(
                                props.alternativeSelected.alternativeSelected,
                                props.alternativeSelected.alternativeResponse
                            )}
                            name="Verificar"
                            type="submit"
                        />
                    </Modal.Footer>
                }
                {props.alternativeSelected.showVideo &&
                    <h3>Parabéns, continue com as questões </h3>
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
        chekAlternative(alternativeId, check) {
            const action = chekAlternative(alternativeId, check)
            dispatch(action)
        },
        disableVideo() {
            const actionDisableVideo = disableVideo()
            dispatch(actionDisableVideo)
        }
    }
}

export default connect(mapToStateToProps, mapDispatchProp)(CardQuestion)