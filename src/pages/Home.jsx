import React, { useState, useEffect } from 'react'
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import axios from 'axios'
import { modelError } from '../model_error'
import consts from '../const'
import LineCardQuestion from '../components/LineCardQuestion'

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
    }, [])

    return (
        <div className="body-app">
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand >Menu</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav>
                <Button variant="outline-light">Sair</Button>
            </Navbar>

            <LineCardQuestion types={unansweredQuestions}></LineCardQuestion>
        </div>
    )
}

function mapToStateToProps(state) {
    return {
        auth: state.auth
    }
}

function mapDispatchProp(dispatch) {
    return {

    }
}

export default connect(mapToStateToProps, mapDispatchProp)(Home)