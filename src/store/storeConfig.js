import { combineReducers } from 'redux'
import authReducer from './reduce/authReducer'
import alternativeReducer from './reduce/alternativeReducer'
import {reducer as toastrReducer} from 'react-redux-toastr'
import { reducer as formReducer } from 'redux-form'

const reducers = combineReducers({
    auth: authReducer,
    alternativeSelected: alternativeReducer,
    toastr: toastrReducer,
    form: formReducer
})

export default reducers