
const MenuItem = ({item}) => {
    const {name, image, price, recipe} = item;

    return (
        <div className="flex gap-2">
            <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[118px] h-[104px]" src={image} alt="" />
            <div className="">
                <h3 className="uppercase">{name} ------------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-600">${price}</p>
        </div>
    );
};

export default MenuItem;