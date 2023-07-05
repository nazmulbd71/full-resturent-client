import { Link } from "react-router-dom";


const NavBar = () => {
    const navOptions = <>
        <li><Link className="hover:bg-lime-600 text-white" to="/">Home</Link></li>
        <li><Link className="hover:bg-lime-600 text-white" to="/menu">Our Menu</Link></li>
        <li><Link className="hover:bg-lime-600 text-white" to="/order/salad">Order Food</Link></li>
        <li><Link className="hover:bg-lime-600 text-white" to="/contact">Contact Us</Link></li>
        <li><Link className="hover:bg-lime-600 text-white" to="/login">Login</Link></li>
    </>
    return (
        <div>
            <div className="navbar fixed z-10 bg-opacity-30 text-white max-w-screen-xl bg-black">
                <div className="navbar-start">
                    <div className="dropdown bg-black">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu bg-black menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-[#2a9d8f] normal-case text-xl">Baper Hotel</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                         {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;