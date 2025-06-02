import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Startup_Icon from '../../assets/rocket_4280509.png'
import Customer_Icon from '../../assets/cart_11262782.png'
import App_Icon from '../../assets/startup_8276380.png'
const TimeLine = () => {
  return (
    <section className="mt-16">
      <h2 className="text-3xl font-semibold text-center mb-8">Our Journey</h2>
      <div className="my-10 px-4 bg-base-200 border-b-2 border-orange-500 transition-colors duration-300">
        <h1 className="text-4xl font-bold text-center py-10 text-[#FFFFFF]">
          E-Commerce Milestones
        </h1>
        <VerticalTimeline>
          {/* Milestone 1 */}
          <VerticalTimelineElement
            date="2023"
            contentStyle={{ background: "#F3E8FF", color: "#6A0DAD" }}
            contentArrowStyle={{ borderRight: "7px solid #6A0DAD" }}
            iconStyle={{ background: "#6A0DAD", color: "#fff" }}
            icon={
              <div className="flex justify-center items-center w-full h-full">
                <img
                  src={Startup_Icon}
                  alt="Startup Icon"
                  className="w-14 h-14 object-contain"
                />
              </div>
            }
          >
            <h3 className="text-[#6A0DAD] text-[20px] font-bold">
              Founded the Company
            </h3>
            <p className="text-[#4B0082] text-[16px] font-semibold mb-4">
              Started with a vision to simplify e-commerce.
            </p>
          </VerticalTimelineElement>

          {/* Milestone 2 */}
          <VerticalTimelineElement
            date="2024"
            contentStyle={{ background: "#E8EAF6", color: "#3F51B5" }}
            contentArrowStyle={{ borderRight: "7px solid #3F51B5" }}
            iconStyle={{ background: "#3F51B5", color: "#fff" }}
            icon={
              <div className="flex justify-center items-center w-full h-full">
                <img
                  src={Customer_Icon}
                  alt="Customers Icon"
                  className="w-14 h-14 object-contain"
                />
              </div>
            }
          >
            <h3 className="text-[#3F51B5] text-[20px] font-bold">
              10,000+ Happy Customers
            </h3>
            <p className="text-[#303F9F] text-[16px] font-semibold mb-4">
              Built a loyal customer base with excellent service.
            </p>
          </VerticalTimelineElement>

          {/* Milestone 3 */}
          <VerticalTimelineElement
            date="2025"
            contentStyle={{ background: "#E3F2FD", color: "#0288D1" }}
            contentArrowStyle={{ borderRight: "7px solid #0288D1" }}
            iconStyle={{ background: "#0288D1", color: "#fff" }}
            icon={
              <div className="flex justify-center items-center w-full h-full">
                <img
                  src={App_Icon}
                  alt="App Launch Icon"
                  className="w-14 h-14 object-contain"
                />
              </div>
            }
          >
            <h3 className="text-[#0288D1] text-[20px] font-bold">
              Global Expansion & App Launch
            </h3>
            <p className="text-[#01579B] text-[16px] font-semibold mb-4">
              Launched our mobile app and expanded to global shipping.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default TimeLine;
