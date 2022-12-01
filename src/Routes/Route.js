import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import Services from './../Components/Pages/Services/Services';
import Home from './../Components/Pages/Home/Home';
import Blog from '../Components/Pages/Blog/Blog';
import Details from '../Components/Shared/Details/Details';
import Reviews from '../Components/Shared/Reviews/Reviews';
import Login from '../Components/Pages/Login/Login';
import Register from '../Components/Pages/Register/Register';
import Error from '../Components/Error/Error';
import MyReviews from '../Components/Pages/MyReviews/MyReviews';
import AddService from '../Components/Pages/AddService/AddService';
import PrivateRoute from './PrivateRoute';
import EditReviews from '../Components/Shared/EditReviews/EditReviews';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/services',
                element: <PrivateRoute><Services /></PrivateRoute>,
            },
            {
                path: '/service/:id',
                loader: ({ params }) => fetch(`https://black-diamond-photography-server.vercel.app/service/${params.id}`),
                element: <Details />,
            },
            {
                path: '/reviews/:id',
                loader: ({ params }) => fetch(`https://black-diamond-photography-server.vercel.app/reviews/${params.id}`),
                element: <Reviews />,
            },
            {
                path: '/myReviews',
                element: <PrivateRoute><MyReviews /></PrivateRoute>,
            },
            {
                path: '/blog',
                element: <Blog />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/register',
                element: <Register />,
            },
            {
                path: '/addService',
                element: <PrivateRoute><AddService /> </PrivateRoute>,
            },
            {
                path: '/editReviews/:id',
                loader: ({ params }) => fetch(`https://black-diamond-photography-server.vercel.app/editReviews/${params.id}`),
                element: <EditReviews />

            }
        ]
    },
    {
        path: '*',
        element: <Error />,
    },
])