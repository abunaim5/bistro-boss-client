import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../MenuItem/MenuItem";

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItems = data.filter(item => item.category === 'popular');
            setMenu(popularItems);
        })
    }, [])

    return (
        <section className="mb-32">
            <SectionTitle
                heading='FROM OUR MENU'
                subHeading='Check it out'
            />
            <div className="grid md:grid-cols-2 gap-12">
                {
                    menu.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    />)
                }
            </div>
        </section>
    );
};

export default PopularMenu;