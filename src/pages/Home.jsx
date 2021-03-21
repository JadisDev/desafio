import React, { useState, useEffect } from 'react'
import { Nav, Navbar, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import axios from 'axios'
import { modelError } from '../model_error'
import consts from '../const'
import LineCardQuestion from '../components/LineCardQuestion'
import { logout } from '../auth/authAction'
import ModalSuccess from '../components/ModalSuccess'

const Home = (props) => {

    const [unansweredQuestions, setUnansweredQuestions] = useState([]);
    const [answeredQuestions, setAnsweredQuestions] = useState([]);

    async function getUnansweredQuestions() {
        try {
            const result = await axios.get(`${consts.API_URL}/api/questions-unanswered`)
            setUnansweredQuestions(result.data.data)
        } catch (error) {
            modelError(error)
        }
    }

    async function getAnsweredQuestions() {
        try {
            const result = await axios.get(`${consts.API_URL}/api/questions-answered`)
            setAnsweredQuestions(result.data.data)
        } catch (error) {
            modelError(error)
        }
    }

    useEffect(() => {
        getUnansweredQuestions()
        getAnsweredQuestions()
    }, [props.alternativeSelected.alternativeResponse])

    return (
        <div className="body-app">

            <ModalSuccess />

            <Navbar bg="primary" variant="dark">
                <Navbar.Brand >Menu</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav>
                <Button
                    variant="outline-light"
                    onClick={() => props.logout()}
                >
                    Sair
                </Button>
            </Navbar>

            <h3>
                Para responder
            </h3>
            <LineCardQuestion types={unansweredQuestions} show={true} />

            <hr style={{
                color: '#000000',
                backgroundColor: '#000000',
                height: .5,
                borderColor: '#000000'
            }} />

            <h3>
                Respondidas
            </h3>
            <LineCardQuestion types={answeredQuestions} show={false} />
        </div>
    )
}

function mapToStateToProps(state) {
    return {
        auth: state.auth,
        alternativeSelected: state.alternativeSelected
    }
}

function mapDispatchProp(dispatch) {
    return {
        logout() {
            const action = logout()
            dispatch(action)
        }
    }
}

export default connect(mapToStateToProps, mapDispatchProp)(Home)