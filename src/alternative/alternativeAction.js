import { ALTERNATIVE_ID } from '../store/action/actionsType'

export function alternativeSelected(id) {
    return dispatch => {
        dispatch({ type: ALTERNATIVE_ID, payload: id })
    }
}