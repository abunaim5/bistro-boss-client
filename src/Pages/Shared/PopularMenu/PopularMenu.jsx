import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');

    return (
        <section className="mb-32">
            <SectionTitle
                heading='FROM OUR MENU'
                subHeading='Check it out'
            />
            <div className="grid md:grid-cols-2 gap-12">
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    />)
                }
            </div>
        </section>
    );
};

export default PopularMenu;