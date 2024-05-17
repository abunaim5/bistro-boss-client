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
            <Cover
                img={cover2}
                title={'DESSERTS'}
                description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
            />
            <MenuCategory items={desserts} />
            <Cover
                img={cover3}
                title={'PIZZA'}
                description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
            />
            <MenuCategory items={pizzas} />
            <Cover
                img={cover4}
                title={'SALADS'}
                description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
            />
            <MenuCategory items={salads} />
            <Cover
                img={cover5}
                title={'SOUPS'}
                description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
            />
            <MenuCategory items={soups} />
        </div>
    );
};

export default Menu;