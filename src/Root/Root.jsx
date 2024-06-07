import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


const Root = () => {
    return (
        <div className="max-w-screen-2xl mx-auto poppins">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;