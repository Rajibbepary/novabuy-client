import Banner from "./Banner";
import FeaturedPruduct from "./FeaturedPruduct";
import HomeContact from "./HomeContact";
import HomeProducts from "./HomeProducts";
import HomeSlider from "./HomeSlider";

const Home = () => {
    return (
        <div>

           <HomeSlider/>
           <HomeProducts/>
           <FeaturedPruduct/>
           <Banner/>
           <HomeContact/>
        </div>
    );
};

export default Home;