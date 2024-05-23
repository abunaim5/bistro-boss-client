import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider/AuthProvider";
import Swal from 'sweetalert2'
import 'animate.css';
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../Hooks/useCart";

const NavBar = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const [cart] = useCart();

    const handleLogout = () => {
        signOutUser()
            .then(() => {
                Swal.fire({
                    title: "Successfully Logout",
                    showClass: {
                        popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
                    },
                    hideClass: {
                        popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
                    }
                });
            })
            .catch(error => {
                console.error(error);
            })
    }

    const navLinks = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/menu'}>Our Menu</Link></li>
        <li><Link to={'/order/salad'}>Order Food</Link></li>
        <li><Link to={'/secret'}>Secret</Link></li>
        <li><Link to={'/dashboard/cart'}>
            <button className="btn btn-xs">
                <span><FaShoppingCart /></span>
                <div className="badge badge-secondary ">+{cart.length}</div>
            </button>
        </Link></li>

        {
            user ? <>
                <li><button onClick={handleLogout} className="">Logout</button></li>
            </> : <>
                <li><Link to={'/login'}>Login</Link></li>
                <li><Link to={'/signup'}>SignUp</Link></li>
            </>
        }
    </>

    return (
        <>
            <div className="navbar fixed max-w-screen-xl bg-opacity-40 z-50 text-white bg-black">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Bistro Boss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </>
    );
};

export default NavBar;