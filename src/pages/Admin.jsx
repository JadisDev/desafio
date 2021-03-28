import React, { useState } from 'react'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import { toastr } from 'react-redux-toastr'
import Label from '../components/Label'
import Input from '../components/Input'
import Button from '../components/Button'
import Alternatives from '../components/Alternatives'

const Admin = (props) => {

    const [question, setQuestion] = useState('')
    const [type, setType] = useState('')
    const [alternatives, setAlternatives] = useState([])

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
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
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

            <Alternatives alternatives={setAlternatives}/>

            <Button
                type="submit"
                variant="outline-primary"
                size="lg"
                action={() => { }}
                name="Cadastrar"
            >
            </Button>

        </Form>
    )

}

export default Admin