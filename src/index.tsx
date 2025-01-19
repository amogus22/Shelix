import React, { Suspense } from "react";
import {createRoot} from 'react-dom/client'
import App from "./components/App";
import About from './pages/about/About'
import Shop from './pages/shop/Shop'
import { LazyAbout } from "./pages/about/About.lazy";
import { LazyShop } from "./pages/shop/Shop.lazy";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const root = document.getElementById('root')

if(!root){
    throw new Error('Не найден компонент Root!')
}

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/about',
                element: <Suspense fallback="Loading..."><LazyAbout/></Suspense>
            },
            {
                path: '/shop',
                element: <Suspense fallback="Loading..."><LazyShop/></Suspense>
            }
        ]
    }
])

const container = createRoot(root)

container.render(
    <RouterProvider router={router}/>
)