import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1 items-center">
               <img className=" h-[120px] w-[100px]" src="https://i.ibb.co/GWbctxd/care-medicine-logo-designs-vector-23100641-removebg-preview-1.png" alt="" /> <span><i>Wellness Center</i></span>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 gap-2">
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#008000] underline font-semibold text-[18px]" : "font-semibold text-[18px]"
                        }>
                        Home
                    </NavLink>
                    <NavLink
                        to="/login"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#008000] underline font-semibold text-[18px]" : "font-semibold text-[18px]"
                        }>
                        Login
                    </NavLink>
                    <NavLink
                        to="/registration"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#008000] underline font-semibold text-[18px]" : "font-semibold text-[18px]"
                        }>
                        Registration
                    </NavLink>

                </ul>
            </div>
        </div>
    );
};

export default Navbar;