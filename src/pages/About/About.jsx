
import TeamSection from "./TeamSection";
import ChooseUs from "./ChooseUs";
import Testminal from "./Testminal";
import TimeLine from "./TimeLine";




const About = () => {
    

    return (
       <>
       
         <div className="px-4 py-10 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>
      <p className="text-gray-700 text-lg text-center mb-10">
        At NovabuyShop, we're passionate about delivering high-quality electronics with top-notch customer support. Founded in 2024, we aim to make tech accessible and affordable.
      </p>
      <ChooseUs/>
      <TeamSection/>
      <Testminal/>
      <TimeLine/>

      <div className="text-center mt-10">
        <a
          href="/shop"
          className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600"
        >
          Start Shopping
        </a>
      </div>
    </div>
       </>
    );
};

export default About;

