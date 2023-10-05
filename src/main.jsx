import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Jogadores from './Jogadores';
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/App",
    element: <App/>
  },
  {
    path: "/Jogadores/:id",
    element: <Jogadores/>
  }
  
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)