import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/HomePage/Home";
import Root from "../Root/Root";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp"


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
        }
  ]);

export default Router;