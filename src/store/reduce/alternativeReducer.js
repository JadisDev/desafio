import {ALTERNATIVE_ID} from '../action/actionsType'

const alternativeSelected = 'alternativeSelected'

const INITIAL_STATE = {
    alternativeSelected: alternativeSelected,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ALTERNATIVE_ID:
            return { ...state, alternativeSelected: action.payload }
        default:
            return state
    }
}
