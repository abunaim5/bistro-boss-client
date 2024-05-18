import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import cover1 from "../../../assets/menu/banner3.jpg"
import cover2 from "../../../assets/menu/dessert-bg.jpeg"
import cover3 from "../../../assets/menu/pizza-bg.jpg"
import cover4 from "../../../assets/menu/salad-bg.jpg"
import cover5 from "../../../assets/menu/soup-bg.jpg"
import MenuCategory from "../MenuCategory/MenuCategory";
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Menu = () => {
    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === 'offered');
    const desserts = menu.filter(item => item.category === 'dessert');
    const pizzas = menu.filter(item => item.category === 'pizza');
    const soups = menu.filter(item => item.category === 'soup');
    const salads = menu.filter(item => item.category === 'salad');

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover
                img={cover1}
                title={'OUR MENU'}
                description={'Would you like to try a dish?'}
            />
            <SectionTitle heading="TODAY'S OFFER" subHeading="Don't miss" />
            <MenuCategory items={offered} />
            <MenuCategory items={desserts} img={cover2} title={'desserts'} description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s'} />
            <MenuCategory items={pizzas} img={cover3} title={'pizza'} description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s'} />
            <MenuCategory items={salads} img={cover4} title={'salads'} description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s'} />
            <MenuCategory items={soups} img={cover5} title={'soups'} description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s'} />
        </div>
    );
};

export default Menu;