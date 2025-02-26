import React from 'react'
import { createRoot } from 'react-dom/client'
import ReactDom from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Context from './Features/Context.jsx'

createRoot(document.getElementById('root')).render(
  <Context>
    <App />
  </Context>,
)
