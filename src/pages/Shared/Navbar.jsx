
import { useState } from "react";
import { CiUser } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
       const [open, setOpen] = useState(false)

    return (
         <nav className="shadow-md bg-[#232F3E] sticky top-0 z-50 border-b border-gray-300 text-gray-50 flex  justify-between items-center  w-full px-3 md:px-6 lg:px-10 py-4 ">

          <h1 className="text-xl max-sm:hidden font-bold"><span className="text-orange-600">N</span>ovaBuy</h1>
        <div>
        <button className="md:hidden hover:border p-1" onClick={() => setOpen(!open)}>
            {
                open === true ?
                 <IoMdClose className="text-2xl font-bold" /> :
                  <FiMenu className="text-2xl font-bold"/>
            }
            </button>
            <ul className={`md:flex duration-1000 max-sm:py-8 max-sm:px-4 max-sm:pr-10 max-sm:right-6 max-sm:space-y-4 ${open ? 'top-10' : '-top-60'} max-sm:shadow-xl rounded-md absolute md:static gap-12 text-[15px]`}>
                <li><Link className="relative  text-[16px] capitalize no-underline before:absolute before:left-0 before:bottom-[-6px] before:w-0 before:h-[2px] before:bg-orange-600 before:transition-all before:duration-500 hover:before:w-full font-semibold">Home</Link></li>
                <li><Link  className="relative text-[16px] capitalize no-underline before:absolute before:left-0 before:bottom-[-6px] before:w-0 before:h-[2px] before:bg-orange-600 before:transition-all before:duration-500 hover:before:w-full font-semibold">Shop</Link></li>
                <li><Link  className="relative text-[16px] capitalize no-underline before:absolute before:left-0 before:bottom-[-6px] before:w-0 before:h-[2px] before:bg-orange-600 before:transition-all before:duration-500 hover:before:w-full font-semibold">About</Link></li>
                <li><Link  className="relative text-[16px] capitalize no-underline before:absolute before:left-0 before:bottom-[-6px] before:w-0 before:h-[2px] before:bg-orange-600 before:transition-all before:duration-500 hover:before:w-full font-semibold">Contact</Link></li>
            </ul>
            
        </div>
         <div className="flex items-center  gap-3 ">
         <button className="text-xs border px-4 py-1.5 rounded-full">Seller Dashboard</button>
        <button className="flex items-center gap-2 hover:text-gray-900 transition">
          <CiUser />
          Account
        </button>
      </div>
     </nav>
    );
};

export default Navbar;