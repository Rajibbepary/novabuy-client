import Banner from "./Banner";
import FeaturedPruduct from "./FeaturedPruduct";
import HomeSlider from "./HomeSlider";

const Home = () => {
    return (
        <div>
           <HomeSlider/>
           <FeaturedPruduct/>
           <Banner/>
        </div>
    );
};

export default Home;