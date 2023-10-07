import { createBrowserRouter } from "react-router-dom"
import Root from "../layouts/Root"
import Home from "../pages/Home/Home"
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader: ()=> fetch("/data.json")
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/registration',
                element:<Registration></Registration>
            },
            {
                path: '/servicedetails/:name',
                element: <ServiceDetails></ServiceDetails>,
                loader: ()=> fetch("/data.json")
            }
        ]
    }
]);
export default router;