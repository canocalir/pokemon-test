import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'

import '@shared/styles/global.scss'

import AppRouter from './router/AppRouter'

ReactDOM.render(
  <AppRouter />,
  document.getElementById('app')
)
