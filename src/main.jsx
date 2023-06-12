import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main.jsx';
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import AuthProviders from './Providers/AuthProviders.jsx';
import Orders from './components/Orders/Orders.jsx';
import PrivateRoute from './routs/PrivateRoute.jsx';
import Profile from './components/Profile/Profile.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'profile',
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path:'login',
        element: <Login></Login>
      },
      {
        path:'register',
        element:<Register></Register>
      },
      {
        path:'orders',
        element: <PrivateRoute><Orders></Orders></PrivateRoute>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
    <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
