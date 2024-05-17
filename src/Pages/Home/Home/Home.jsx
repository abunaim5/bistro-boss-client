import PopularMenu from "../../Shared/PopularMenu/PopularMenu";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";

const Home = () => {
    return (
        <div>
            <Banner />
            <Category />
            <PopularMenu />
        </div>
    );
};

export default Home;