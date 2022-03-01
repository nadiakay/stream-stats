import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import { App } from './App'
import rootReducer from './slices'

const store = configureStore({ reducer: rootReducer })

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
