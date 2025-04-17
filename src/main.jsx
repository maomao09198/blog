import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom' // 👈 CHANGE THIS
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter> {/* 👈 CHANGE THIS */}
      <Blog/>
    </HashRouter>
  </React.StrictMode>
)
