import { Link, NavLink, Outlet } from "react-router-dom";
import {  HiExclamation, HiHome, HiMenu, HiShoppingCart, HiStar,  } from "react-icons/hi";
import { HiCalendarDays, HiDocumentPlus  } from "react-icons/hi2";
import { FaAward, FaBook, FaEnvelope,  FaShoppingBag, FaUsers, FaWallet, } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useAdmin from "../../Hooks/useAdmin";
import useSurveyor from "../../Hooks/useSurveyor";
// import useAdmin from "../../Hooks/useAdmin";
const Dashboard = () => {
    const {user} = useContext(AuthContext)
    // const isAdmin = true;
    const [isAdmin] = useAdmin()
    const [isSurveyor] = useSurveyor()
    
    return (
        <div>
               <div className='flex max-w-screen-2xl mx-auto'>
            {/* DASHBOARD SIDEBAR */}
            <div className="w-64 min-h-screen bg-gray-200">
                <ul className="menu p-4 space-y-1">
                    {
                        isAdmin && 
                        <>
                        <li><Link to="/dashboard/admin"><HiHome/> Admin Home</Link></li>
                    <li><NavLink to="/dashboard/admin/users"><FaUsers />Manage Users</NavLink></li>
                    <li><NavLink to="/dashboard/admin/survey"><FaBook /> Surveys</NavLink></li>
                    <li><NavLink to="/dashboard/admin/payments"><FaWallet />Payments</NavLink></li>
                        </>
                        }

                        { isSurveyor &&
                        <>
                        <li><Link to="/"><HiHome/>Home</Link></li>
                    <li><NavLink to="/dashboard/surveyor/create"><HiDocumentPlus />Create Survey</NavLink></li>
                    <li><NavLink to={`/dashboard/surveyor/surveys/${user?.email}`}><HiShoppingCart />   My Surveys</NavLink></li>
                    <li><NavLink to="/dashboard/review"><HiStar />  Add Review</NavLink></li>
                    <li><NavLink to="/dashboard/bookings"><HiCalendarDays />  Booking</NavLink></li>
                        </>
                    }

                    { !isAdmin && !isSurveyor && 
                         <>
                         <li><Link to="/dashboard/user"><HiHome className="text-lg" /> User Home</Link></li>
                         <li><NavLink to="/dashboard/user/surveys"><HiStar className="text-lg"/> Join Survey</NavLink></li>
                         <li><NavLink to="/dashboard/user/my-reports"><HiExclamation className="text-lg"/> My Reports</NavLink></li>
                         <li><NavLink to="/dashboard/user/payment"><FaAward /> Become a Member</NavLink></li>
                         </>
                    }
                    
                    <div className="divider"></div> 
                    <li><NavLink to="/"><HiHome/>Home</NavLink></li>
                    <li><NavLink to="/order/salad"><HiMenu/>Menu</NavLink></li>
                    <li><NavLink to="/order/salad"><FaShoppingBag/>Shop</NavLink></li>
                    <li><NavLink to="/order/salad"><FaEnvelope/>Contact</NavLink></li>
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