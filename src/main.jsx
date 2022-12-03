import React from 'react'
import ReactDOM from 'react-dom/client'
import { TestimonyApp } from './TestimonyApp'
import { TestimonyProvider } from './context'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TestimonyProvider>
      <TestimonyApp />
    </TestimonyProvider>
  </React.StrictMode>
)