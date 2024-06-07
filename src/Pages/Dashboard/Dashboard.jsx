import { Link, NavLink, Outlet } from "react-router-dom";
import {  HiExclamation, HiHome, HiMenu, HiShoppingCart, HiStar,  } from "react-icons/hi";
import {  HiDocumentPlus  } from "react-icons/hi2";
import { FaAward, FaBook, FaEnvelope,  FaShoppingBag, FaUsers, FaWallet, } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useAdmin from "../../Hooks/useAdmin";
import useSurveyor from "../../Hooks/useSurveyor";
import usePayments from "../../Hooks/usePayments";
// import useAdmin from "../../Hooks/useAdmin";
const Dashboard = () => {
    const {user} = useContext(AuthContext)
    // const isAdmin = true;
    const [isAdmin] = useAdmin()
    const [isSurveyor] = useSurveyor()
    const [payments] = usePayments()

    
    return (
        <div>
               <div className='flex lg:flex-row flex-col  max-w-screen-2xl mx-auto'>
            {/* DASHBOARD SIDEBAR */}
            
           
            <div className="lg:w-64 w-full h-16  lg:min-h-screen ">
                <ul 
                className=" lg:p-4 p-2 space-y-1 flex lg:flex-col lg:menu  justify-around">
                    {
                        isAdmin && 
                        <>
                        <li><Link to="/dashboard/admin"><HiHome className="text-xl"/><span className="lg:flex hidden md:flex">Admin Home</span> </Link></li>
                    <li><NavLink to="/dashboard/admin/users"><FaUsers className="text-xl"/><span className="lg:flex hidden md:flex">Manage Users</span></NavLink></li>
                    <li><NavLink to="/dashboard/admin/survey"><FaBook className="text-lg"/><span className="lg:flex hidden md:flex"> Surveys</span></NavLink></li>
                    <li><NavLink to="/dashboard/admin/allPayments"><FaWallet className="text-lg" /><span className="lg:flex hidden md:flex">All Payments</span></NavLink></li>
                        </>
                        }

                        { isSurveyor &&
                        <>
                        <li><Link to="/"><HiHome className="text-lg"/><span className="lg:flex hidden md:flex"></span>Home</Link></li>
                    <li><NavLink to="/dashboard/surveyor/create"><HiDocumentPlus className="text-lg" /><span className="lg:flex hidden md:flex"></span>Create Survey</NavLink></li>
                    <li><NavLink to={`/dashboard/surveyor/surveys/${user?.email}`}><HiShoppingCart  className="text-lg"/><span className="lg:flex hidden md:flex"></span>   My Surveys</NavLink></li>
                    <li><NavLink to="/dashboard/surveyor/feedback"><HiStar  className="text-lg"/><span className="lg:flex hidden md:flex"></span> Feedback</NavLink></li>
                        </>
                    }

                    { !isAdmin && !isSurveyor && 
                         <>
                         <li><Link to="/dashboard/user"><HiHome className="text-lg" /><span className="lg:flex hidden md:flex">User Home</span> </Link></li>
                         <li><NavLink to="/dashboard/user/surveys"><HiStar className="text-lg"/><span className="lg:flex hidden md:flex">Join Survey</span> </NavLink></li>
                         <li><NavLink to="/dashboard/user/my-reports"><HiExclamation className="text-lg"/><span className="lg:flex hidden md:flex">My Reports</span> </NavLink></li>
                         { !payments.find(item => item.email === user.email) &&
                            <li><NavLink to="/dashboard/user/payment"><FaAward  className="text-lg"/><span className="lg:flex hidden md:flex">Become a Member</span> </NavLink></li>}
                         </>
                    }
                    
                    <div className="divider hidden lg:flex"></div> 
                    <li><NavLink to="/"><HiHome className="text-lg"/><span className="lg:flex hidden md:flex">Home</span></NavLink></li>
                    <li><NavLink to="/order/salad"><HiMenu className="text-lg"/><span className="lg:flex hidden md:flex">Menu</span></NavLink></li>
                    <li><NavLink to="/order/salad"><FaShoppingBag className="text-lg"/><span className="lg:flex hidden md:flex">Shop</span></NavLink></li>
                    <li><NavLink to="/order/salad"><FaEnvelope className="text-lg"/><span className="lg:flex hidden md:flex">Contact</span></NavLink></li>
                </ul>
            </div>
            
        {/* DASHBOARD CONTENT */}
            <div className='flex-1'>
                    <Outlet></Outlet>
            </div>
        </div>

        </div>
    );
};

export default Dashboard;