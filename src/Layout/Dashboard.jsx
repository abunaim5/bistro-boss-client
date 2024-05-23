import { FaBook, FaCalendar, FaCommentAlt, FaHamburger, FaHome, FaList, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
    const isAdmin = true;

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
                            {
                                isAdmin ? <>
                                    <li><Link to='/dashboard/usrHome'><FaHome />Admin Home</Link></li>
                                    <li><Link to='/dashboard/addItems'><FaUtensils />Add Items</Link></li>
                                    <li><Link to='/dashboard/manageItems'><FaList />Manage Items</Link></li>
                                    <li><Link to='/dashboard/manageBookings'><FaBook />Manage Bookings</Link></li>
                                    <li><Link to='/dashboard/users'><FaUsers />All Users</Link></li>
                                </> : <>
                                    <li><Link to='/dashboard/usrHome'><FaHome />User Home</Link></li>
                                    <li><Link to='/dashboard/cart'><FaShoppingCart />My Cart</Link></li>
                                    <li><Link to='/dashboard/cart'><FaCommentAlt />Add Review</Link></li>
                                    <li><Link to='/dashboard/reservation'><FaCalendar />Reservation</Link></li>
                                    <li><Link to='/dashboard/myBooking'><FaHamburger /> My Bookings</Link></li>
                                </>
                            }
                            {/* shared nav links */}
                            <div className="divider"></div>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/menu'>Menu</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
                            <li><Link to='/'></Link></li>
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