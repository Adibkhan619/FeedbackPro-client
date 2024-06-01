import { NavLink, Outlet } from "react-router-dom";
import { HiCalendar, HiHome, HiMenu, HiShoppingCart, HiStar,  } from "react-icons/hi";
import { HiCalendarDays, HiWallet } from "react-icons/hi2";
import { FcAddressBook } from "react-icons/fc";
import { FaBook, FaEnvelope, FaListUl, FaShoppingBag, FaUsers, FaUtensils, FaWallet, } from "react-icons/fa";
const Dashboard = () => {
    const isAdmin = true;
    return (
        <div>
               <div className='flex max-w-screen-2xl mx-auto'>
            {/* DASHBOARD SIDEBAR */}
            <div className="w-64 min-h-screen bg-orange-200">
                <ul className="menu p-4 space-y-1">
                    {
                        isAdmin? 
                        <>
                        <li><NavLink to="/dashboard/adminHome"><HiHome/> Admin Home</NavLink></li>
                    <li><NavLink to="/dashboard/admin/users"><FaUsers />Manage Users</NavLink></li>
                    <li><NavLink to="/dashboard/admin/surveys"><FaBook /> Surveys</NavLink></li>
                    <li><NavLink to="/dashboard/admin/payments"><FaWallet />Payments</NavLink></li>
                    {/* <li><NavLink to="/dashboard/bookings"><FcAddressBook />Manage Bookings</NavLink></li> */}

                        </>
                        :
                        <>
                        <li><NavLink to="/dashboard/userHome"><HiHome/>   My Home</NavLink></li>
                    <li><NavLink to="/dashboard/reservation"><HiCalendar />   My Reservation</NavLink></li>
                    <li><NavLink to="/dashboard/paymentHistory"><HiWallet />  Payment History</NavLink></li>
                    <li><NavLink to="/dashboard/cart"><HiShoppingCart />   My Cart ({cart.length})</NavLink></li>
                    <li><NavLink to="/dashboard/review"><HiStar />  Add Review</NavLink></li>
                    <li><NavLink to="/dashboard/bookings"><HiCalendarDays />  Booking</NavLink></li>
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
            <div className='flex-1 p-8'>
                    <Outlet></Outlet>
            </div>
        </div>

        </div>
    );
};

export default Dashboard;