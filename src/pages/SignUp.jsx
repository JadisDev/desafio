import React from 'react';
import Col from 'react-bootstrap/Col'
import Form from "react-bootstrap/Form"

import Label from '../components/Label'
import Input from '../components/Input'

import Button from '../components/Button'
import { Formik } from 'formik'
import * as yup from 'yup';
import {connect} from 'react-redux'
import {signup} from '../auth/authAction'
import { useHistory } from 'react-router-dom'
import { toastr } from 'react-redux-toastr'

const SiginUp = (props) => {

    const schema = yup.object({
        name: yup.string().min(3, 'Nome muito curto').required('Obrigatório'),
        login: yup.string().min(3, 'Login muito curto').required('Obrigatório'),
        password: yup.string().min(3, 'Senha muito curto').required('Obrigatório'),
        confirmPassword: yup.string()
                        .oneOf([yup.ref('password'), null], 'Senha não conferi')
                        .required('Confirmação da senha é obrigatória'),
    });

    const {validToken} = props
    console.log(validToken)
    const history = useHistory()
    if (validToken) {
        history.push('/')
    }
    return (
        <Formik
            validationSchema={schema}
            onSubmit={values => {
                props.dispatchSiginUp(values)
            }}
            initialValues={{
                name: 'Jadis da Silva Jale',
                login: 'jsj',
                password: '112233',
                confirmPassword: '112233'
            }}
        >
            {({
                handleSubmit,
                handleChange,
                handleBlur,
                values,
                touched,
                isValid,
                errors,
            }) => (
                    <div className="d-flex justify-content-center">
                        <Form noValidate onSubmit={handleSubmit}>
                            <h1 className="d-flex justify-content-center">Cadastre-se</h1>
                            <Form.Row>
                                <Form.Group as={Col} md="12" controlId="validationFormik103">
                                    <Label label="Nome" />
                                    <Input
                                        type="text"
                                        placeholder="Informe seu nome"
                                        name="name"
                                        onChange={handleChange}
                                        isValid={touched.name && !errors.name}
                                        isInvalid={!!errors.name}
                                        value={values.name}
                                    >
                                    </Input>
                                    <Form.Control.Feedback type="invalid">
                                        {errors.name}
                                    </Form.Control.Feedback>
                                    <Form.Control.Feedback >Tudo ok!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="12" controlId="validationFormik101">
                                    <Label label="Login" />
                                    <Input
                                        type="text"
                                        placeholder="Informe seu login"
                                        name="login"
                                        onChange={handleChange}
                                        isValid={touched.login && !errors.login}
                                        isInvalid={!!errors.login}
                                        value={values.login}
                                    >
                                    </Input>
                                    <Form.Control.Feedback type="invalid">
                                        {errors.login}
                                    </Form.Control.Feedback>
                                    <Form.Control.Feedback >Tudo ok!</Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} md="12" controlId="validationFormik102">
                                    <Label label="Senha" />
                                    <Input
                                        type="password"
                                        placeholder="***"
                                        name="password"
                                        onChange={handleChange}
                                        isValid={touched.password && !errors.password}
                                        isInvalid={!!errors.password}
                                        value={values.password}
                                    >
                                    </Input>
                                    <Form.Control.Feedback type="invalid">
                                        {errors.password}
                                    </Form.Control.Feedback>
                                    <Form.Control.Feedback >Tudo ok!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="12" controlId="validationFormik102">
                                    <Label label="Confirmar senha" />
                                    <Input
                                        type="password"
                                        placeholder="***"
                                        name="confirmPassword"
                                        onChange={handleChange}
                                        isValid={touched.confirmPassword && !errors.confirmPassword}
                                        isInvalid={!!errors.confirmPassword}
                                        value={values.confirmPassword}
                                    >
                                    </Input>
                                    <Form.Control.Feedback type="invalid">
                                        {errors.confirmPassword}
                                    </Form.Control.Feedback>
                                    <Form.Control.Feedback >Tudo ok!</Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                            <Button
                                type="submit"
                                variant="success"
                                size="lg"
                                action={() => { }}
                                name="Cadastre-se"
                            >
                            </Button>
                            <Button
                                type="submit"
                                variant="outline-primary"
                                size="lg"
                                action={() => { history.push('/') }}
                                name="Voltar"
                            >
                            </Button>
                        </Form>
                    </div>
                )}
        </Formik>
    )
}

function mapStateToProp(state) {
    return {
        validToken: state.auth.validToken,
    }
}

function mapDispatchToProp(dispatch) {
    return {
        dispatchSiginUp(values) {
            const actionSiginUp = signup(values)
            dispatch(actionSiginUp)
        }
    }
}

export default connect(mapStateToProp, mapDispatchToProp)(SiginUp)