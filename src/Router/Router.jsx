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
        element: <Dashboard></Dashboard>,
        children: [
            // *admin ------------>
            {
                path: "admin/users",
                element: <Users></Users>,
            },
            {
                path: "admin",
                element: <AdminHome></AdminHome>,
            },
            {
                path: "admin/survey",
                element: <AdminSurvey></AdminSurvey>
            },

            // *surveyor ---------------->
            {
                path: "surveyor",
                element: <SurveyorHome></SurveyorHome>,
            },
            {
                path: "surveyor/create",
                element: <AddSurvey></AddSurvey>,
            },
            {
                path: "surveyor/update/:id",
                element: <UpdateSurvey></UpdateSurvey>,
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/survey/${params.id}`),
            },
            {
                path: "surveyor/surveys/:email",
                element: <MyPostedSurveys></MyPostedSurveys>,
                // loader: ({params}) => fetch(`http://localhost:5000/surveys/${params.email}`)
            },
            {
                path: "surveyor/details/:id",
                element: <MySurveyDetails></MySurveyDetails>,
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/response/${params.id}`),
            },

            // *USER ---------->
            {
                path: "user",
                element: <UserHome></UserHome>,
            },
            {
                path: "user/surveys",
                element: <UserSurvey></UserSurvey>,
            },
            {
                path: "user/my-reports",
                element: <UserReport></UserReport>,
                loader:  () => fetch(`http://localhost:5000/response`),
            }
        ],
    },
]);

export default Router;
