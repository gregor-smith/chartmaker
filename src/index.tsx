import 'bootstrap/scss/bootstrap-reboot.scss'

import React from 'react'
import thunk from 'redux-thunk'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import { App } from '@/App'
import { reducer } from '@/reducer'
import { createInitialState, loadStateFromLocalStorage } from '@/state'


const store = createStore(
    reducer,
    loadStateFromLocalStorage() ?? createInitialState(),
    applyMiddleware(thunk)
)


render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('react-root')
)
