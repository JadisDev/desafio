import React from 'react'
import { useHistory } from 'react-router-dom'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import { login } from '../auth/authAction'
import { Formik } from 'formik'
import * as yup from 'yup'
import {connect} from 'react-redux'

import Label from '../components/Label'
import Input from '../components/Input'
import Button from '../components/Button'

const Login = (props) => {

    const history = useHistory()

    const schema = yup.object({
        login: yup.string().min(3, 'Login muito curto').required('Obrigatório'),
        password: yup.string().min(3, 'Senha muito curto').required('Obrigatório'),
    });

    return (
        <Formik

            validationSchema={schema}
            onSubmit={values => {
                props.submitLogin(values)
            }}

            initialValues={{
                login: 'xxx',
                password: '112233',
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
                            <h1 className="d-flex justify-content-center">Login sistema</h1>
                            <Form.Row>
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
                            </Form.Row>
                            <Button
                                type="submit"
                                variant="outline-primary"
                                size="lg"
                                action={() => { }}
                                name="Logar"
                            >
                            </Button>
                            <hr></hr>
                            <Button
                                type="buttom"
                                variant="outline-success"
                                size="lg"
                                action={() => history.push('/signup')}
                                name="Cadastrar-se"
                            >
                            </Button>
                        </Form>
                    </div>
                )}
        </Formik>
    )

}

function mapDispatchProp(dispatch) {
    return {
        submitLogin(values) {
            const actionLogin = login(values)
            dispatch(actionLogin)
        }
    }
}

export default connect(null, mapDispatchProp)(Login)