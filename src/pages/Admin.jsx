import React from 'react'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import { login } from '../auth/authAction'
import { Formik, Field } from 'formik'
import * as yup from 'yup'
import { connect } from 'react-redux'

import Label from '../components/Label'
import Input from '../components/Input'
import Button from '../components/Button'

const Admin = (props) => {

    const schema = yup.object({
        type: yup.string().required('Obrigatório'),
        question: yup.string().min(3, 'Questão muito curto').required('Obrigatório'),
    });

    return (
        <Formik

            validationSchema={schema}

            onSubmit={values => {
                console.log(values)
            }}

            initialValues={{

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
                <div className="container">
                    <Form noValidate onSubmit={handleSubmit}>
                        <h1 className="d-flex justify-content-center">Login sistema</h1>
                        <Form.Row>
                            <Form.Group as={Col} md="12" controlId="validationFormik101">
                                <Label label="type" />
                                <Field
                                    as="select"
                                    name="type"
                                    onChange={handleChange}
                                    isValid={touched.type && !errors.type}
                                    isInvalid={!!errors.type}
                                >
                                    <option value="red">Red</option>
                                    <option value="green">Green</option>
                                    <option value="blue">Blue</option>
                                </Field>
                                <Form.Control.Feedback type="invalid">
                                    {errors.type}
                                </Form.Control.Feedback>
                                <Form.Control.Feedback >Tudo ok!</Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} md="12" controlId="validationFormik102">
                                <Label label="Questão" />
                                <Input
                                    type="text"
                                    placeholder="Informe a questão"
                                    name="question"
                                    onChange={handleChange}
                                    isValid={touched.question && !errors.question}
                                    isInvalid={!!errors.question}
                                    value={values.question}
                                >
                                </Input>
                                <Form.Control.Feedback type="invalid">
                                    {errors.question}
                                </Form.Control.Feedback>
                                <Form.Control.Feedback >Tudo ok!</Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>


                        <Form.Row>
                            <Form.Group as={Col} md="12" controlId="validationFormik122">
                                <Label label="Alternativa" />
                                <Input
                                    type="text"
                                    placeholder="Informe a questão"
                                    name="alternative_description"
                                >
                                </Input>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>
                            </Form.Group>
                        </Form.Row>

                        <Button
                            type="submit"
                            variant="outline-primary"
                            size="lg"
                            action={() => { }}
                            name="Cadastrar"
                        >
                        </Button>

                    </Form>
                </div>
            )}
        </Formik>
    )

}

export default Admin