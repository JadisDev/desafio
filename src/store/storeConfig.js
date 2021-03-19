import { combineReducers } from 'redux'
import authReducer from './reduce/authReducer'
import {reducer as toastrReducer} from 'react-redux-toastr'
import { reducer as formReducer } from 'redux-form'

const reducers = combineReducers({
    auth: authReducer,
    toastr: toastrReducer,
    form: formReducer
})

export default reducers