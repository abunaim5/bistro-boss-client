import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import FeaturedImg from "../../../assets/home/featured.jpg"

const Featured = () => {
    return (
        <section style={{ backgroundImage: `url(${FeaturedImg})` }} className="my-20 bg-center bg-cover bg-fixed text-white">
            <div className="bg-black/40 pb-20">
                <SectionTitle
                    heading='Featured item'
                    subHeading='Check it out'
                />
                <div className="flex items-center justify-center gap-6 md:mx-44">
                    <div>
                        <img src={FeaturedImg} alt="" />
                    </div>
                    <div>
                        <p>March 20, 2027</p>
                        <p>WHERE CAN I GET SOME?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className="btn uppercase btn-outline border-0 border-b-4 text-white mt-4">Order Now</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Featured;