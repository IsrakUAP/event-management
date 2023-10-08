import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1 items-center navbar-start">
               <img className=" h-[120px] w-[100px]" src="https://i.ibb.co/GWbctxd/care-medicine-logo-designs-vector-23100641-removebg-preview-1.png" alt="" /> <span className=" text-[25px] font-semibold text-red-500">Wellness Center</span>
            </div>
            <div className="flex-1 navbar-center">
                <ul className="menu menu-horizontal px-1 gap-4">
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-500 underline font-semibold text-[18px]" : "font-semibold text-[18px]"
                        }>
                        Home
                    </NavLink>
                    <NavLink
                        to="/login"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-500 underline font-semibold text-[18px]" : "font-semibold text-[18px]"
                        }>
                        Login
                    </NavLink>
                    <NavLink
                        to="/registration"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-500 underline font-semibold text-[18px]" : "font-semibold text-[18px]"
                        }>
                        Registration
                    </NavLink>

                </ul>
            </div>
            <div className=" flex-1 navbar-end">
                <button className="btn btn-accent">LOGIN</button>
            </div>
        </div>
    );
};

export default Navbar;