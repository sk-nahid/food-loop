import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import { router } from './Route/Route.jsx'
import ContextProvidor from './Context/ContextProvidor.jsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvidor>
    <RouterProvider router={router}>
      
        <App />
        
      <ToastContainer></ToastContainer>
    </RouterProvider>
    </ContextProvidor>
    
  </StrictMode>,
)
