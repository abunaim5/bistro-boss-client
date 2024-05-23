import useCart from "../../../Hooks/useCart";

const Cart = () => {
    const [cart] = useCart();
    console.log(cart)
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    return (
        <div>
            <h1 className="text-5xl">My Cart</h1>
            <div className="flex justify-evenly">
                <button className="">Total orders: {cart.length}</button>
                <button className="">Total price: {totalPrice}</button>
                <button className="btn">Pay</button>
            </div>
        </div>
    );
};

export default Cart;