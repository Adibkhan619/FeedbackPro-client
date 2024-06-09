import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";


const Root = () => {
    return (
        <div className="
        max-w-screen-2xl 
        mx-auto poppins">
              <Helmet>
                <title>Feedback Pro | Home</title>
            </Helmet>
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-300px)]'>
                <Outlet></Outlet>
            </div>
            
            <Footer></Footer>
        </div>
    );
};

export default Root;