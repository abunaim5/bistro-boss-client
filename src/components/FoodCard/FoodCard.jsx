
const FoodCard = ({ item }) => {
    const { name, image, price, recipe } = item;
    return (
        <div className="card bg-base-100 shadow-xl rounded-none">
            <figure><img className="w-full" src={image} alt="food" /></figure>
            <p className="bg-slate-900 px-4 py-1 absolute text-white top-3 right-3">${price}</p>
            <div className="card-body text-center">
                <h2 className="card-title flex justify-center">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;