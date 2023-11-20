import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider} from 'react-router-dom'
import router from './router.jsx'
import { ContextProvider } from './contexts/contextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <ContextProvider>
    <RouterProvider router={router}/>
    </ContextProvider> */}
    <App />
  </React.StrictMode>,
)

