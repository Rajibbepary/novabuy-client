import Banner from "./Banner";
import FeaturedPruduct from "./FeaturedPruduct";
import HomeProducts from "./HomeProducts";
import HomeSlider from "./HomeSlider";

const Home = () => {
    return (
        <div>

           <HomeSlider/>
           <HomeProducts/>
           <FeaturedPruduct/>
           <Banner/>
        </div>
    );
};

export default Home;