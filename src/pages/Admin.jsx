import React, { useState, useEffect } from 'react'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import { toastr } from 'react-redux-toastr'
import Label from '../components/Label'
import Input from '../components/Input'
import Button from '../components/Button'
import Alternatives from '../components/Alternatives'
import axios from 'axios';
import consts from '../const'
import { modelError } from '../model_error'
import { connect } from 'react-redux'

const Admin = (props) => {

    axios.defaults.headers.common['Authorization'] = 'Bearer ' + props.auth.user.token

    const [question, setQuestion] = useState('')
    const [type, setType] = useState('')
    const [typesDB, setTypesDB] = useState(0)
    const [alternatives, setAlternatives] = useState([])
    const [request, setRequest] = useState(false);

    async function getTypes() {
        try {
            const result = await axios.get(`${consts.API_URL}/api/types`)
            const typesRequest = result.data.data
            setTypesDB(typesRequest)
            setRequest(true)
        } catch (error) {
            modelError(error)
        }
    }

    useEffect(() => {
        getTypes()
    }, [request])

    const handleSubmit = (e) => {
        e.preventDefault()

        if (type === '') {
            toastr.warning('Atenção', "Informe o tipo da questão")
            return false;
        }

        if (question === '') {
            toastr.warning('Atenção', "Informe a questão")
            return false;
        }

        if (alternatives.length === 0) {
            toastr.warning('Atenção', "Informe pelo menos uma alternativa")
            return false;
        }

        var existAlternativeTrue = []

        alternatives.map((value) => {
            if (value.alternative === '') {
                toastr.warning('Atenção', "Informe a descrição da alternativa")
                return false;
            }
            if (value.check) {
                existAlternativeTrue.push(true)
            }
        });

        if (existAlternativeTrue.length !== 1) {
            toastr.warning('Atenção', "Precisa ter pelo menos uma alternativa verdadeira")
            return false;
        }

        var item = {
            type,
            question,
            alternatives
        }

        console.log(item);
    }

    return (
        <Form noValidate onSubmit={handleSubmit}>
            <h1 className="d-flex justify-content-center">Cadastro de novos desafios</h1>
            <Form.Row>
                <Form.Group as={Col} md="12" controlId="validationFormik112">
                    <Form.Label>Tipo de questão</Form.Label>
                    <Form.Control
                        as="select"
                        onChange={e => setType(e.target.value)}
                    >
                        <option></option>
                        {typesDB && typesDB.map((typeDB, index) => (
                            <option key={index} value={typeDB.id}>{typeDB.text}</option>
                        ))}
                    </Form.Control>
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} md="12" controlId="validationFormik102">
                    <Label label="Questão" />
                    <Input
                        type="text"
                        placeholder="Informe a questão"
                        name="question"
                        onChange={e => setQuestion(e.target.value)}
                        value={question}
                    >
                    </Input>
                </Form.Group>
            </Form.Row>

            <Alternatives alternatives={setAlternatives} />

            <Button
                type="submit"
                variant="outline-primary"
                size="lg"
                action={() => { }}
                name="Cadastrar"
            >
            </Button>

        </Form >
    )
}

function mapToStateToProps(state) {
    return {
        auth: state.auth,
    }
}

function mapDispatchProp(dispatch) {
    return {
        logout() {

        }
    }
}

export default connect(mapToStateToProps, mapDispatchProp)(Admin)