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

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPages />,
        children: [
            {
                path: '/',
                element: <Home />
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
                loader: () => fetch(`http://localhost:5000/craftItems`)
            },
            {
                path: '/addItem',
                element: <PrivateRoute><AddPotteryItems /></PrivateRoute>
            },
            // {
            //     path: '/myItems/:email',
            //     element: <PrivateRoute><MyPotteryItems /></PrivateRoute>,
            //     loader: ({ params }) => fetch(`http://localhost:5000/craftItems/${params.email}`)
            // },
            {
                path: '/itemDetails/:id',
                element: <PrivateRoute><ItemDetails /></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/craftItems/${params.id}`)
            },

        ]
    },
]);

export default router;