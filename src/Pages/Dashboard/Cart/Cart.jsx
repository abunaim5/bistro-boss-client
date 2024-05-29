import { FaTrash } from "react-icons/fa";
import useCart from "../../../Hooks/useCart";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { Link } from "react-router-dom";

const Cart = () => {
    const [cart, refetch] = useCart();
    console.log(cart)
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const axiosPublic = useAxiosPublic();

    const handleDeleteItem = item => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`/carts/${item._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: `${item.name} has been deleted.`,
                                icon: "success"
                            });
                            refetch();
                        }
                    })
            }
        });
    }

    return (
        <div>
            <h1 className="text-5xl">My Cart</h1>
            <div className="flex justify-evenly">
                <button className="">Total orders: {cart.length}</button>
                <button className="">Total price: {totalPrice}</button>
                {
                    cart.length ? <Link to='/dashboard/payment'><button className="btn">Pay</button></Link> : <button disabled className="btn">Pay</button>
                }
            </div>
            <div>
                <div>
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Item Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                               cart.map((item, idx) => <tr key={item._id}>
                                    <td>{idx + 1}</td>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>
                                        <button onClick={() => handleDeleteItem(item)} className="btn btn-ghost text-red-600 text-xl"><FaTrash /></button>
                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;