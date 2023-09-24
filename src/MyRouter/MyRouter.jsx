import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import ErrrorPage from "../MyPages/ErrorPage/ErrrorPage";
import Home from "../MyPages/Home/Home";
import Donation from "../MyPages/Donation/Donation";
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
                loader: ()=>fetch('/public/donation.json')
            },
            {
                path: '/donation',
                element: <Donation></Donation>
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>
            }
        ]
    }
])

export default MyRouter;