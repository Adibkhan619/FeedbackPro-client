import { Link, NavLink, Outlet } from "react-router-dom";
import {  HiHome  } from "react-icons/hi";
import {  HiChartBar, HiChartBarSquare, HiDocumentPlus  } from "react-icons/hi2";
import { FaAward, FaBook, FaChartArea, FaChartBar, FaChartLine, FaComment, FaDove, FaEnvelope,  FaExclamationTriangle,  FaHome, FaRegChartBar, FaUsers, FaWallet, } from "react-icons/fa";
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
            
           
            <div className="lg:w-64 w-full h-16 p-4 lg:min-h-screen ">
                <h1 className="text-3xl font-semibold m-10 hidden lg:flex">Welcome {user.displayName}</h1>
                <div className="divider hidden lg:flex"></div> 
                <ul 
                className="lg:p-0 p-2 space-y-1 flex lg:flex-col lg:menu   justify-around">
                    {
                        isAdmin && 
                        <>
                        <li><Link to="/dashboard/admin"><HiHome className="text-2xl"/><span className="lg:flex hidden md:flex">Admin Home</span> </Link></li>
                    <li><NavLink to="/dashboard/admin/users"><FaUsers className="text-xl"/><span className="lg:flex hidden md:flex">Manage Users</span></NavLink></li>
                    <li><NavLink to="/dashboard/admin/survey"><FaChartArea className="text-xl"/><span className="lg:flex hidden md:flex"> Surveys</span></NavLink></li>
                    <li><NavLink to="/dashboard/admin/allPayments"><FaWallet className="text-lg" /><span className="lg:flex hidden md:flex">All Payments</span></NavLink></li>
                        </>
                        }

                        { isSurveyor &&
                        <>
                        <li><Link to="/dashboard/surveyor"><HiHome className="lg:text-xl text-2xl"/><span className="lg:flex hidden md:flex">My Home</span></Link></li>
                    <li><NavLink to="/dashboard/surveyor/create"><HiDocumentPlus className="text-lg" /><span className="lg:flex hidden md:flex">Create Survey</span></NavLink></li>
                    <li><NavLink to={`/dashboard/surveyor/surveys/${user?.email}`}><HiChartBar  className="text-lg"/><span className="lg:flex hidden md:flex">My Surveys</span>   </NavLink></li>
                    <li><NavLink to="/dashboard/surveyor/feedback"><FaComment  className="text-lg"/><span className="lg:flex hidden md:flex">Feedback</span> </NavLink></li>
                        </>
                    }

                    { !isAdmin && !isSurveyor && 
                         <>
                         <li><Link to="/dashboard/user"><HiHome className="text-xl" /><span className="lg:flex hidden md:flex">My Home</span> </Link></li>
                         <li><NavLink to="/dashboard/user/surveys"><HiChartBar className="text-lg"/><span className="lg:flex hidden md:flex">Join Survey</span> </NavLink></li>
                         <li><NavLink to="/dashboard/user/my-reports"><FaExclamationTriangle className="text-lg"/><span className="lg:flex hidden md:flex">My Reports</span> </NavLink></li>
                         { !payments.find(item => item.email === user.email) &&
                            <li><NavLink to="/dashboard/user/payment"><FaAward  className="text-lg"/><span className="lg:flex hidden md:flex">Become a Member</span> </NavLink></li>}
                         </>
                    }
                    
                    <div className="divider hidden lg:flex"></div> 
                    <li><NavLink to="/"><FaHome className="text-xl"/><span className="lg:flex hidden md:flex">Home</span></NavLink></li>
                    <li><NavLink to="/about"><FaDove className="text-lg"/><span className="lg:flex hidden md:flex">About Us</span></NavLink></li>
                    
                    <li><NavLink to="/contact"><FaEnvelope className="text-lg"/><span className="lg:flex hidden md:flex">Contact</span></NavLink></li>
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