import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/HomePage/Home";
import Root from "../Root/Root";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp"
import Dashboard from "../Pages/Dashboard/Dashboard";
import Users from "../Pages/Dashboard/Users";


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
                {
                    path:"admin/users",
                    element: <Users></Users>
                }
            ]
        }
  ]);

export default Router;