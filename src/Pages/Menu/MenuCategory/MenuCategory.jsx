import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, img, description }) => {
    return (
        <div>
            {title && <Cover img={img} title={title} description={description} />}
            <div className={`grid md:grid-cols-2 gap-12 ${title ? 'mb-20' : 'my-20'}`}>
                {
                    items.map(item => <MenuItem key={item._id} item={item} />)
                }
            </div>
        </div>
    );
};

export default MenuCategory;