import { ALTERNATIVE_ID, ALTERNATIVE_RESPONSE, SHOW_VIDEO } from '../store/action/actionsType'

import axios from 'axios'
import { modelError } from '../model_error'
import consts from '../const'
import { toastr } from 'react-redux-toastr'

export function alternativeSelected(id) {
    return dispatch => {
        dispatch({ type: ALTERNATIVE_ID, payload: id })
    }
}
export function chekAlternative(alternativeId, check, callback) {
    return dispatch => {
        axios.post(`${consts.API_URL}/api/games`, { 'alternativeId': alternativeId })
            .then(resp => {
                toastr.success('Atenção', resp.data.message)
                const newValue = check ? false : true
                dispatch({ type: ALTERNATIVE_RESPONSE, payload: newValue })
                dispatch({ type: SHOW_VIDEO, payload: true })
                callback()
            })
            .catch(error => {
                modelError(error)
            })
    }
}

export function disableVideo() {
    return dispatch => {
        dispatch({ type: SHOW_VIDEO, payload: false })
    }
}