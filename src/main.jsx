import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './app.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import { router } from './Route/Route.jsx'
import ContextProvidor from './Context/ContextProvidor.jsx'
import { ToastContainer } from 'react-toastify'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


document.documentElement.setAttribute("data-theme", "lighttheme");

const client = new QueryClient()
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={client}>

      <ContextProvidor>
        <RouterProvider router={router}>
          <App />

        </RouterProvider>
      </ContextProvidor>

      <ToastContainer></ToastContainer>
    </QueryClientProvider>

  </StrictMode>,
)
