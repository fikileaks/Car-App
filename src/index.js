import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

//importing packages and Hook
import { BrowserRouter} from 'react-router-dom'

//importing file
import App from './App'


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
