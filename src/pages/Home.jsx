import React, { useState, useEffect } from 'react'
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap'
import { connect } from 'react-redux'

const Home = (props) => {

    console.log(props)

    

    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand >Menu</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav>
                <Button variant="outline-light">Sair</Button>
            </Navbar>
        </>
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