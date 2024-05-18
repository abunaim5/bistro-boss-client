import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, img, description }) => {
    return (
        <div className={`${title ? 'my-10' : 'mb-20'}`}>
            {title && <Cover img={img} title={title} description={description} />}
            <div className={`grid md:grid-cols-2 gap-12 ${title && 'mt-20'}`}>
                {
                    items.map(item => <MenuItem key={item._id} item={item} />)
                }
            </div>
            <Link to={`/order/${title}`}><button className="btn uppercase btn-outline border-0 border-b-4 mt-4">Order Now</button></Link>
        </div>
    );
};

export default MenuCategory;