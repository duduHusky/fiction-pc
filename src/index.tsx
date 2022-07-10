import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from "react-redux"
import {PersistGate} from 'redux-persist/integration/react'

import 'normalize.css'
import './index.css'

import App from './App'
import {persistor, store} from './store'

import reportWebVitals from './reportWebVitals'

import './mock/index'

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <App/>
            </PersistGate>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
