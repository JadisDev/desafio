import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import reducer from './store/storeConfig'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import ReduxToastr from 'react-redux-toastr'
import {applyMiddleware, createStore} from 'redux'
import promisse from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

const store = applyMiddleware(thunk, multi, promisse)(createStore)(reducer)

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />

      <ReduxToastr
        timeOut={4000}
        newestOnTop={false}
        preventDuplicates
        position="top-left"
        getState={(state) => state.toastr} // This is the default
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        progressBar
        closeOnToastrClick />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);