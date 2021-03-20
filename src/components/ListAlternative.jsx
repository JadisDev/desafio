import React from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import { alternativeSelected } from '../alternative/alternativeAction'
import {connect} from 'react-redux'

const ListAlternative = (props) => {

    const { alternatives } = props

    return (
        <div>
            <ButtonGroup toggle>
                {alternatives.map((alternative, index) => (
                    <ToggleButton
                        key={index}
                        type="radio"
                        name="radio"
                        value={alternative.id}
                        checked={false}
                        onChange={e => props.alternativeSelected(e.currentTarget.value)}
                    >
                        {alternative.alternative}
                    </ToggleButton>
                ))}
            </ButtonGroup>
        </div>
    )
}

function mapDispatchProp(dispatch) {
    return {
        alternativeSelected(values) {
            const actionAlternative = alternativeSelected(values)
            dispatch(actionAlternative)
        }
    }
}

export default connect(null, mapDispatchProp)(ListAlternative)