import React from 'react'
import Form from 'react-bootstrap/Form'

const Input = (props) => {

    return (
        <Form.Control
            className="mb-2"
            type={props.type}
            placeholder={props.placeholder}
            name={props.name}
            onChange={props.onChange}
            isValid={props.isValid}
            isInvalid={props.isInvalid}
            value={props.value}
            readOnly={props.readOnly}
        />
    )
}

export default Input