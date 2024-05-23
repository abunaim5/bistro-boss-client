import { FaCalendar, FaHome, FaShoppingCart } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex">
            <div>
                <div className="drawer lg:drawer-open">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col items-center justify-center">
                        {/* Page content here */}
                        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                            {/* Sidebar content here */}
                            <li><Link to='/dashboard/cart'><FaShoppingCart /> My Cart</Link></li>
                            <li><Link to='/usrHome'><FaHome /> User Home</Link></li>
                            <li><Link to='/mycart'><FaCalendar /> Reservation</Link></li>
                            <li><Link to='/mycart'>My Booking</Link></li>
                            <div className="divider"></div>
                            <li><Link to='/'>Home</Link></li>
                        </ul>

                    </div>
                </div>
            </div>
            <div className="flex-1">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;