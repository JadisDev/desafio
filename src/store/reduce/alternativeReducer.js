import { ALTERNATIVE_ID, ALTERNATIVE_RESPONSE, SHOW_VIDEO } from '../action/actionsType'

const alternativeSelected = 'alternativeSelected'
const alternativeResponse = true
const showVideo = false

const INITIAL_STATE = {
    'alternativeSelected': alternativeSelected,
    'alternativeResponse': alternativeResponse,
    'showVideo': showVideo
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ALTERNATIVE_ID:
            return { ...state, alternativeSelected: action.payload }
        case ALTERNATIVE_RESPONSE:
            return { ...state, alternativeResponse: action.payload }
        case SHOW_VIDEO:
            return { ...state, showVideo: action.payload }
        default:
            return state
    }
}
