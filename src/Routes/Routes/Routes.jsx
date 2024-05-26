import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Menu from "../../Pages/Menu/Menu/Menu";
import Order from "../../Pages/Order/Order/Order";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import Secret from "../../Pages/Secret/Secret";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Dashboard from "../../Layout/Dashboard";
import Cart from "../../Pages/Dashboard/Cart/Cart";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import AddItems from "../../Pages/Dashboard/AddItems/AddItems";
import AdminRoute from "../AdminRoute/AdminRoute";
import ManageItems from "../../Pages/Dashboard/ManageItems/ManageItems";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
    //   errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: '/menu',
          element: <Menu />
        },
        {
          path: '/order/:category',
          element: <Order />
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/signup',
          element: <SignUp />
        },
        {
          path: '/secret',
          element: <PrivateRoute><Secret /></PrivateRoute>
        }
      ],
    },
    {
      path: '/dashboard',
      element: <PrivateRoute><Dashboard /></PrivateRoute>,
      children: [
        // normal user routes
        {
          path: '/dashboard/cart',
          element: <Cart />
        },

        // admin routes
        {
          path: '/dashboard/addItems',
          element: <AdminRoute><AddItems /></AdminRoute>        
        },
        {
          path: '/dashboard/manageItems',
          element: <AdminRoute><ManageItems /></AdminRoute>
        },
        {
          path: '/dashboard/users',
          element: <AdminRoute><AllUsers /></AdminRoute>
        }
      ]
    }
  ]);

  export default router;