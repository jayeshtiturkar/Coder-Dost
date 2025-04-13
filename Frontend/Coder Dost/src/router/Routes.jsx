import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import PostForm from '../pages/PostForm'
import Home from '../pages/Home'
import App from '../App'

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path:"",
                element : <Home/>
            },
            {
                path: "add-product",
                element: <PostForm />,
            }
        ]
    }
])

export default Routes