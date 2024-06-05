import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/HomePage/Home";
import Root from "../Root/Root";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Users from "../Pages/Dashboard/Admin/Users";
import AddSurvey from "../Pages/Dashboard/Surveyor/AddSurvey";
import UpdateSurvey from "../Pages/Dashboard/Surveyor/UpdateSurvey";
import MyPostedSurveys from "../Pages/Dashboard/Surveyor/MyPostedSurveys";
import Surveys from "../Pages/Surveys/Surveys";
import UserSurvey from "../Pages/Dashboard/User/UserSurvey";
import AdminHome from "../Pages/Dashboard/Admin/AdminHome";
import SurveyorHome from "../Pages/Dashboard/Surveyor/SurveyorHome";
import UserHome from "../Pages/Dashboard/User/UserHome";
import MySurveyDetails from "../Pages/Dashboard/Surveyor/MySurveyDetails";
import AdminSurvey from "../Pages/Dashboard/Admin/AdminSurvey";
import UserReport from "../Pages/Dashboard/User/UserReport";
import SurveyDetails from "../Pages/Surveys/SurveyDetails";
import AdminRoutes from "./AdminRoutes";
import PrivateRoutes from "./PrivateRoutes";
import SurveyorRoutes from "./SurveyorRoutes";
import Payment from "../Pages/Payment/Payment";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/surveys",
                element: <Surveys></Surveys>,
            },
            {
                path: "/survey/:id",
                element: <SurveyDetails></SurveyDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/survey/${params.id}`)
            }
        ],
    },
    {
        path: "/login",
        element: <Login></Login>,
    },
    {
        path: "/signUp",
        element: <SignUp></SignUp>,
    },
    {
        path: "dashboard",
        element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
        children: [
            // *admin ------------>
            {
                path: "admin/users",
                element: <AdminRoutes><Users></Users></AdminRoutes>,
            },
            {
                path: "admin",
                element: <AdminRoutes><AdminHome></AdminHome></AdminRoutes>,
            },
            {
                path: "admin/survey",
                element: <AdminRoutes
                ><AdminSurvey></AdminSurvey></AdminRoutes>
            },

            // *surveyor ---------------->
            {
                path: "surveyor",
                element: <SurveyorRoutes><SurveyorHome></SurveyorHome></SurveyorRoutes>,
            },
            {
                path: "surveyor/create",
                element: <SurveyorRoutes><AddSurvey></AddSurvey></SurveyorRoutes>,
            },
            {
                path: "surveyor/update/:id",
                element: <SurveyorRoutes><UpdateSurvey></UpdateSurvey></SurveyorRoutes>,
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/survey/${params.id}`),
            },
            {
                path: "surveyor/surveys/:email",
                element: <SurveyorRoutes><MyPostedSurveys></MyPostedSurveys></SurveyorRoutes>,
                // loader: ({params}) => fetch(`http://localhost:5000/surveys/${params.email}`)
            },
            {
                path: "surveyor/details/:id",
                element: <PrivateRoutes><MySurveyDetails></MySurveyDetails></PrivateRoutes>,
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/response/${params.id}`),
            },

            // *USER ---------->
            {
                path: "user",
                element: <PrivateRoutes><UserHome></UserHome></PrivateRoutes>,
            },
            {
                path: "user/surveys",
                element: <PrivateRoutes><UserSurvey></UserSurvey></PrivateRoutes>,
            },
            {
                path: "user/my-reports",
                element: <PrivateRoutes><UserReport></UserReport></PrivateRoutes>,
                loader:  () => fetch(`http://localhost:5000/response`),
            },
            {
                path: "user/payment",
                element: <Payment></Payment>
            }
        ],
    },
]);

export default Router;
