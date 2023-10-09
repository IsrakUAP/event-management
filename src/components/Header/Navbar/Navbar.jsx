import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/ContextProvider";
import { getAuth } from "firebase/auth";


const Navbar = () => {
    const { user, logout, createUser } = useContext(AuthContext);
    const [displayName, setDisplayName] = useState("");
    const [photoURL, setPhotoURL] = useState("");

    useEffect(() => {
        const auth = getAuth();
        const currentUser = auth.currentUser;

        if (currentUser) {
            setDisplayName(currentUser.displayName);
            setPhotoURL(currentUser.photoURL);
        }
    }, [user, createUser]);

    const handleSignout = () => {
        logout();
    };

    return (
        <div className="navbar bg-base-100">

            <div className="navbar-start block md:hidden">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <Link className=" hover:text-red-500" to="/">Homepage</Link>
                        <Link className=" hover:text-red-500" to="/meetOurTeam">Our Team</Link>
                        <Link className=" hover:text-red-500" to="/appointmentForm">Appointment</Link>
                        <Link className=" hover:text-red-500" to="/login">Login</Link>
                        <Link className=" hover:text-red-500" to="/registration">Register</Link>
                        
                    </ul>
                </div>
            </div>
            <div className="flex-1 flex-row-reverse md:flex-row items-center navbar-start">
                <img className=" h-[120px] w-[100px]" src="https://i.ibb.co/GWbctxd/care-medicine-logo-designs-vector-23100641-removebg-preview-1.png" alt="" /> <span className=" text-[20px] font-semibold text-red-500">Wellness Center</span>
            </div>
            <div className="flex-1 navbar-center hidden md:block">
                <ul className="menu menu-horizontal px-1 gap-4">
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-500 underline font-semibold text-[15px]" : "font-semibold text-[15px]"
                        }>
                        Home
                    </NavLink>
                    <NavLink
                        to="/meetOurTeam"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-500 underline font-semibold text-[15px]" : "font-semibold text-[15px]"
                        }>
                            Our Team
                    </NavLink>
                    <NavLink
                        to="/appointmentForm"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-500 underline font-semibold text-[15px]" : "font-semibold text-[15px]"
                        }>
                        Appointment
                    </NavLink>
                    <NavLink
                        to="/login"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-500 underline font-semibold text-[15px]" : "font-semibold text-[15px]"
                        }>
                        Login
                    </NavLink>
                    <NavLink
                        to="/registration"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-500 underline font-semibold text-[15px]" : "font-semibold text-[15px]"
                        }>
                        Register
                    </NavLink>

                </ul>
            </div>
            <div className=" flex-1 navbar-end">
                {user ? (
                    <div className=" flex-row md:flex items-center">
                        <div className="flex justify-end md:flex-none md:justify-start">
                        <img className="rounded-full h-8 w-8 mr-2" src={photoURL} alt="User" />
                        <p className="text-gray-700">{displayName}</p>
                        </div>
                        <button onClick={handleSignout} className="btn btn-accent ml-2">
                            Sign Out
                        </button>
                    </div>
                ) : (
                    <Link to="/login">
                        <button className="btn btn-accent">LOGIN</button>
                    </Link>
                )}

            </div>
        </div>
    );
};

export default Navbar;