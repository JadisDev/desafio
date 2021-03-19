import React from 'react'
import ButtonBS from 'react-bootstrap/Button'

const Button = (props) => {
    return (
        <ButtonBS 
            style={props.style}
            variant={props.variant}
            type={props.type}
            size={props.size}
            block
            onClick={() => props.action()}
        >
            {props.name}
        </ButtonBS>
    )
}

export default Button