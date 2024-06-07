import { Link, NavLink, Outlet } from "react-router-dom";
import {  HiExclamation, HiHome, HiMenu, HiShoppingCart, HiStar,  } from "react-icons/hi";
import { HiCalendarDays, HiDocumentPlus  } from "react-icons/hi2";
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
                className=" lg:p-4  space-y-1 flex lg:flex-col lg:menu  justify-around">
                    {
                        isAdmin && 
                        <>
                        <li><Link to="/dashboard/admin"><HiHome/> Admin Home</Link></li>
                    <li><NavLink to="/dashboard/admin/users"><FaUsers />Manage Users</NavLink></li>
                    <li><NavLink to="/dashboard/admin/survey"><FaBook /> Surveys</NavLink></li>
                    <li><NavLink to="/dashboard/admin/allPayments"><FaWallet />All Payments</NavLink></li>
                        </>
                        }

                        { isSurveyor &&
                        <>
                        <li><Link to="/"><HiHome className="text-lg"/>Home</Link></li>
                    <li><NavLink to="/dashboard/surveyor/create"><HiDocumentPlus className="text-lg" />Create Survey</NavLink></li>
                    <li><NavLink to={`/dashboard/surveyor/surveys/${user?.email}`}><HiShoppingCart  className="text-lg"/>   My Surveys</NavLink></li>
                    <li><NavLink to="/dashboard/surveyor/feedback"><HiStar  className="text-lg"/> Feedback</NavLink></li>
                        </>
                    }

                    { !isAdmin && !isSurveyor && 
                         <>
                         <li><Link to="/dashboard/user"><HiHome className="text-lg" /> User Home</Link></li>
                         <li><NavLink to="/dashboard/user/surveys"><HiStar className="text-lg"/> Join Survey</NavLink></li>
                         <li><NavLink to="/dashboard/user/my-reports"><HiExclamation className="text-lg"/> My Reports</NavLink></li>
                         { !payments.find(item => item.email === user.email) &&
                            <li><NavLink to="/dashboard/user/payment"><FaAward  className="text-lg"/> Become a Member</NavLink></li>}
                         </>
                    }
                    
                    <div className="divider hidden lg:flex"></div> 
                    <li><NavLink to="/"><HiHome className="text-lg"/>Home</NavLink></li>
                    <li><NavLink to="/order/salad"><HiMenu className="text-lg"/>Menu</NavLink></li>
                    <li><NavLink to="/order/salad"><FaShoppingBag className="text-lg"/>Shop</NavLink></li>
                    <li><NavLink to="/order/salad"><FaEnvelope className="text-lg"/>Contact</NavLink></li>
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