import jbl_soundbox from '../../assets/jbl_soundbox_image.png'
import arrow_icon_white from '../../assets/arrow_icon_white.svg'
import md_controller_image from '../../assets/md_controller_image.png'
import sm_controller_image from '../../assets/sm_controller_image.png'
const Banner = () => {
    return (
         <div className="flex flex-col md:flex-row items-center w-11/12 mx-auto justify-between md:pl-20 py-14 md:py-0 bg-[#E6E9F2] my-16 rounded-xl overflow-hidden">
      <img
        className="max-w-56"
        src={jbl_soundbox}
        alt="jbl_soundbox_image"
      />
      <div className="flex flex-col items-center justify-center text-center space-y-2 px-4 md:px-0">
        <h2 className="text-2xl md:text-3xl font-semibold max-w-[290px]">
          Level Up Your Gaming Experience
        </h2>
        <p className="max-w-[343px] font-medium text-gray-800/60">
          From immersive sound to precise controls—everything you need to win
        </p>
        <button className="group flex items-center justify-center gap-1 px-12 py-2.5 bg-orange-600 rounded text-white">
          Buy now
          <img className="group-hover:translate-x-1 transition" src={arrow_icon_white} alt="arrow_icon_white" />
        </button>
      </div>
      <img
        className="hidden md:block max-w-80"
        src={md_controller_image}
        alt="md_controller_image"
      />
      <img
        className="md:hidden"
        src={sm_controller_image}
        alt="sm_controller_image"
      />
    </div>
    );
};

export default Banner;