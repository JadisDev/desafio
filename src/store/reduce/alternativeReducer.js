import {ALTERNATIVE_ID, ALTERNATIVE_RESPONSE} from '../action/actionsType'

const alternativeSelected = 'alternativeSelected'
const alternativeResponse = true

const INITIAL_STATE = {
    'alternativeSelected': alternativeSelected,
    'alternativeResponse': alternativeResponse
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ALTERNATIVE_ID:
            return { ...state, alternativeSelected: action.payload }
        case ALTERNATIVE_RESPONSE:
            return { ...state, alternativeResponse: action.payload }
        default:
            return state
    }
}
