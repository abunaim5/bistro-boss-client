import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";

const FoodCard = ({ item }) => {
    const { name, image, price, recipe, _id } = item;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();

    const handleAddToCart = () => {
        const cartData = {
            menuId: _id,
            email: user?.email,
            name,
            recipe,
            price
        }
        if (user && user?.email) {
            axiosSecure.post('/carts', cartData)
                .then(res => {
                    if (res.data.insertedId) {
                        refetch()
                    }
                })
        }
        else {
            Swal.fire({
                title: "You are not login",
                text: "You aren't be able to add to cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Drive Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }
    return (
        <div className="card bg-base-100 shadow-xl rounded-none">
            <figure><img className="w-full" src={image} alt="food" /></figure>
            <p className="bg-slate-900 px-4 py-1 absolute text-white top-3 right-3">${price}</p>
            <div className="card-body text-center">
                <h2 className="card-title flex justify-center">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button onClick={() => handleAddToCart(item)} className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;