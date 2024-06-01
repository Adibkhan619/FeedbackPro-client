import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


const Root = () => {
    return (
        <div className="max-w-screen-2xl mx-auto">
            <Navbar></Navbar>
            <button className="btn btn-outline btn-success">Success</button>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;