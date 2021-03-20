import React from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import { alternativeSelected } from '../alternative/alternativeAction'
import { connect } from 'react-redux'

const ListAlternative = (props) => {

    const { alternatives, show } = props

    return (
        <div>
            <ButtonGroup toggle>
                {show && alternatives.map((alternative, index) => (
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

                {!show && alternatives.map((alternative, index) => (
                    <>
                        {alternative.is_right &&
                            <h5>Resposta: {alternative.alternative} </h5>
                        }
                    </>
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