import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Details from './components/Details.jsx'
import Documents from './components/Documents.jsx'
import Purpose from './components/Purpose.jsx'
import Availability from './components/Availability.jsx'
import Scheduled from './components/Scheduled.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Details />, 
      },
      {
        path: 'details',
        element: <Details />, 
      },
      {
        path: 'documents',
        element: <Documents />, 
      },
      {
        path: 'purpose',
        element: <Purpose/>, 
      },
      {
        path: 'available',
        element: <Availability/>, 
      },
      {
        path: 'scheduled',
        element: <Scheduled/>, 
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
