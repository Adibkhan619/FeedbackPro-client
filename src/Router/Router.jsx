import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/HomePage/Home";
import Root from "../Root/Root";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp"
import Dashboard from "../Pages/Dashboard/Dashboard";
import Users from "../Pages/Dashboard/Users";
import AddSurvey from "../Pages/Dashboard/Surveyor/AddSurvey";
import UpdateSurvey from "../Pages/Dashboard/Surveyor/UpdateSurvey";
import MyPostedSurveys from "../Pages/Dashboard/Surveyor/MyPostedSurveys";


 const Router  = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
        },
        
      
      ]
    },  
    {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/signUp",
            element: <SignUp></SignUp>
        },
        {
            path: "dashboard",
            element: <Dashboard></Dashboard>,
            children: [

                // *admin ------------>
                {
                    path:"admin/users",
                    element: <Users></Users>
                },

                // *surveyor ----------------> 
                {
                    path: "surveyor/create",
                    element: <AddSurvey></AddSurvey>
                },
                {
                    path: "surveyor/update/:id",
                    element: <UpdateSurvey></UpdateSurvey>,
                    loader: ({params}) => fetch(`http://localhost:5000/survey/${params.id}`)
                },
                {
                    path: "surveyor/surveys/:email",
                    element: <MyPostedSurveys></MyPostedSurveys>,
                    loader: ({params}) => fetch(`http://localhost:5000/surveys/${params.email}`)
                },


            ]
        }
  ]);

export default Router;