import axios from 'axios'
import consts from '../const'
import { TOKEN_VALIDATED, USER_FETCHED } from '../store/action/actionsType'
import { modelError } from '../model_error'
import { toastr } from 'react-redux-toastr'

export function login(values) {
    return submit(values, `${consts.API_URL}/login`)
}

export function signup(values) {
    return submit(values, `${consts.API_URL}/users`)
}

function submit(values, url) {

    return dispatch => {
        axios.post(url, values)
            .then(resp => {
                toastr.success('Atenção', resp.data.message)
                dispatch({ type: USER_FETCHED, payload: resp.data.data })
            })
            .catch(error => {
                modelError(error)
            })
    }
}

export function logout() {
    return { type: TOKEN_VALIDATED, payload: false }
}

export function validateToken(token) {
    return dispatch => {
        if (token) {
            axios.post(`${consts.API_URL}/validate-token`, { token })
                .then(resp => {
                    dispatch({ type: TOKEN_VALIDATED, payload: resp.data.valid })
                })
                .catch(e => dispatch({ type: TOKEN_VALIDATED, payload: false }))
        } else {
            dispatch({ type: TOKEN_VALIDATED, payload: false })
        }
    }
}