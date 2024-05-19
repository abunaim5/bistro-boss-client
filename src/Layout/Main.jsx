import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/NavBar/NavBar";

const Main = () => {
    const location = useLocation();
    const isNavbarFooter = location.pathname.includes('/login')

    return (
        <div>
            {isNavbarFooter || <NavBar />}
            <Outlet />
            {isNavbarFooter || <Footer />}
        </div>
    );
};

export default Main;