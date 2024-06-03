import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import useAdmin from "../Hooks/useAdmin";
import useSurveyor from "../Hooks/useSurveyor";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isAdmin] = useAdmin();
    const [isSurveyor] = useSurveyor();
    const navOptions = (
        <>
            <li>
                <NavLink to="/surveys">Surveys</NavLink>
            </li>
            { user && isAdmin && (
                <li>
                    <NavLink to="dashboard/admin">Dashboard</NavLink>
                </li>
            )}
            {user && isSurveyor && (
                <li>
                    <NavLink to="dashboard/surveyor">Dashboard</NavLink>
                </li>
            )}
            {user && !isAdmin && !isSurveyor && (
                <li>
                    <Link to="dashboard/user">Dashboard</Link>
                </li>
            )}
            {!user && !isAdmin && !isSurveyor && (
                <li>
                    <NavLink to="login">Dashboard</NavLink>
                </li>
            )}
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
            <li>
                <NavLink to="/contact">Contact</NavLink>
            </li>
        </>
    );
    return (
        <div>
            <div className="navbar max-w-screen-2xl  ">
                <div className="navbar-start">
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                    <ul className="menu menu-horizontal px-1">{navOptions}</ul>

                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
                        ></div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            {navOptions}
                        </ul>
                    </div>
                    {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
                    {/* {user && <p>{user?.email}</p>} */}
                </div>
                <div className="navbar-center hidden lg:flex"></div>
                <div className="navbar-end flex gap-5">
                    {user ? (
                        <button onClick={logOut}>Logout</button>
                    ) : (
                        <NavLink to="/login">Login</NavLink>
                    )}
                    <NavLink to="/signUp">Sign up for free</NavLink>
                    {/* <ul className="menu menu-horizontal px-1">{navOptions}</ul> */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
