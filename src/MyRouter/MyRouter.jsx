import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import ErrrorPage from "../MyPages/ErrorPage/ErrrorPage";
import Home from "../MyPages/Home/Home";
import Donation from "../MyPages/Donation/Donation";

import Details from "../components/Details/Details";
import Statistics from "../MyPages/Statistics/Statistics";

const MyRouter = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        errorElement: <ErrrorPage></ErrrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=>fetch('/donation.json')
            },
            {
                path: '/donation',
                element: <Donation></Donation>,
                loader: ()=>fetch('/donation.json')
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>,
                loader: ()=> fetch('/donation.json')
            },
            {
                path: '/details/:id',
                element: <Details></Details>,
                loader: ()=>fetch('/donation.json')
            }
        ]
    }
])

export default MyRouter;