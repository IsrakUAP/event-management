import { createBrowserRouter } from "react-router-dom"
import Root from "../layouts/Root"
import Home from "../pages/Home/Home"
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import PrivateRouter from "./PrivateRouter";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import MeetOurTeam from "../pages/MeetOurTeam/MeetOurTeam";
import AppointmentForm from "../pages/AppointmentForm/AppointmentForm";

const router = createBrowserRouter([
    {
        path: '/',
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
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
                element:<PrivateRouter><ServiceDetails></ServiceDetails></PrivateRouter> ,
                loader: ()=> fetch("/data.json")
            },
            {
                path: '/meetOurTeam',
                element:<PrivateRouter><MeetOurTeam></MeetOurTeam></PrivateRouter> ,
                loader: ()=> fetch("/team.json")
            },
            {
                path: '/appointmentForm',
                element:<PrivateRouter><AppointmentForm></AppointmentForm></PrivateRouter>
            }
        ]
    }
]);
export default router;