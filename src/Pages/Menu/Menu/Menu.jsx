import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import cover1 from "../../../assets/menu/banner3.jpg"
import PopularMenu from "../../Shared/PopularMenu/PopularMenu";

const Menu = () => {
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
            <PopularMenu />
            <Cover
                img={cover1}
                title={'OUR MENU'}
                description={'Would you like to try a dish?'}
            />
            <PopularMenu />
        </div>
    );
};

export default Menu;