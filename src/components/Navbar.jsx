import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import useAdmin from "../Hooks/useAdmin";
import useSurveyor from "../Hooks/useSurveyor";
import icon from "../../public/icon/img3.png"

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isAdmin] = useAdmin();
    const [isSurveyor] = useSurveyor();

    const navOptions = (
        <>
            <li>
                <NavLink to="/surveys">Surveys</NavLink>
            </li>
            { isAdmin && (
                <li>
                    <NavLink to="dashboard/admin">Dashboard</NavLink>
                </li>
            )}
            { isSurveyor && (
                <li>
                    <NavLink to="dashboard/surveyor">Dashboard</NavLink>
                </li>
            )}
            { !isAdmin && !isSurveyor &&
                <li>
                    <Link to="dashboard/user">Dashboard</Link>
                </li> 
                
            }
            {/* {!user || !isAdmin || !isSurveyor &&  
                <li>
                <NavLink to="login">Dashboard</NavLink>
            </li>
            } */}
            <li>
                <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
                <NavLink to="/contact">Contact</NavLink>
            </li>
        </>
    );

    const [theme, setTheme] = useState("nord");
    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme]);

    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("night");
        } else {
            setTheme("nord");
        }
    };

    const handleLogout = () => {
        logOut().then().catch()
    }
    return (
        <div>
            <div className="navbar  z-10  bg-gradient-to-r from-sky-300 via-sky-300 to-sky-300 text-white  font-semibold">
                <div className="navbar-start ">
                    <Link to="/"><button className="text-xl font-semibold btn btn-ghost rounded-full"><img src={icon} className="w-10 h-10" alt="" /><em>Feedback Pro</em></button></Link>
                    {/* <ul className="menu menu-horizontal px-1"></ul> */}
                    <ul className=" menu menu-horizontal hidden lg:flex ">{navOptions}</ul>


                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                     </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black"
                        >{navOptions}                         
                        </ul>
                    </div>
                </div>

                <div className="navbar-end flex gap-5">
                    {user ? (
                        <button className="btn btn-ghost" onClick={handleLogout}>Logout</button>
                    ) : (
                        <NavLink to="/login"><button className="btn btn-ghost">Login</button></NavLink>
                    )}
                    <NavLink to="/signUp" className="btn hidden lg:flex ">Sign up for free</NavLink>
                    {/* <ul className="menu menu-horizontal px-1">{navOptions}</ul> */}
                </div>
                <div className="flex justify-between mx-2">
                        <input
                            value=""
                            type="checkbox"
                            onChange={handleToggle}
                            className="toggle"
                        />
                    </div>
            </div>
        </div>
    );
};

export default Navbar;
