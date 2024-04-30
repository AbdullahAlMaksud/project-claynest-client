import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPages from "../pages/ErrorPages";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllPotteryItems from "../pages/AllPotteryItems";
import AddPotteryItems from "../pages/AddPotteryItems";
import PrivateRoute from "./PrivateRoute";
import MyPotteryItems from "../pages/MyPotteryItems";
import ItemDetails from "../pages/ItemDetails";
import UpdatePotteryItems from "../pages/UpdatePotteryItems";
import CategoryWiseProduct from "../pages/CategoryWiseProduct";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPages />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: ()=>fetch('https://b9a10-clay-nest-server.vercel.app/craftCategory')
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/allItems',
                element: <AllPotteryItems />,
                loader: () => fetch(`https://b9a10-clay-nest-server.vercel.app/craftItems`)
            },
            {
                path: '/addItem',
                element: <PrivateRoute><AddPotteryItems /></PrivateRoute>
            },
            {
                path: '/myItems',
                element: <PrivateRoute><MyPotteryItems /></PrivateRoute>,
            },
            {
                path: '/itemDetails/:id',
                element: <PrivateRoute><ItemDetails /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://b9a10-clay-nest-server.vercel.app/craftItems/${params.id}`)
            },
            {
                path: '/updateItem/:id',
                element: <PrivateRoute><UpdatePotteryItems/></PrivateRoute>,
                loader: ({ params }) => fetch(`https://b9a10-clay-nest-server.vercel.app/craftItems/${params.id}`)
            },
            {
                path: '/productsCategory/:category',
                element: <PrivateRoute><CategoryWiseProduct/></PrivateRoute>,
                loader: ({ params }) => fetch(`https://b9a10-clay-nest-server.vercel.app/productsCategory/${params.category}`)
            },



        ]
    },
]);

export default router;