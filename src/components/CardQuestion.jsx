import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import './CardQuestions.css'
import Modal from 'react-bootstrap/Modal'
import Button from '../components/Button'
import ListAlternative from './ListAlternative'
import { connect } from 'react-redux'
import { chekAlternative } from '../alternative/alternativeAction'

const CardQuestion = (props) => {

    const { questions, title, key } = props
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    const [titleSelectd, setTitleSelected] = useState('')
    const [questionSelected, setQuestionSelected] = useState({})

    const alternatives = (questions, title) => {
        setTitleSelected(title)
        setQuestionSelected(questions)
        handleShow()
    }

    return (
        <div>
            <Card key={{ key }}>
                <Card.Body>
                    <Card.Title> {title} </Card.Title>
                    {questions && questions.length && questions.map((question, index) => (
                        <Card.Text className="question" onClick={e => alternatives(question, title)}>
                            {question.description}
                        </Card.Text>
                    ))}
                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>{titleSelectd}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {questionSelected.description}
                    <ListAlternative
                        alternatives={questionSelected.alternatives}
                    />
                </Modal.Body>
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
            console.log(alternativeId, check)
            const action = chekAlternative(alternativeId, check)
            dispatch(action)
        }
    }
}

export default connect(mapToStateToProps, mapDispatchProp)(CardQuestion)