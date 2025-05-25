import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white transition-all duration-300">
                <Link to={'/'}>
                <h1 className="text-2xl font-bold font-outfit">
          <span className="text-orange-600">N</span>ovaBuy
        </h1>
                </Link>
                <div className="flex items-center gap-5 text-gray-500">
                    <p>Hi! Admin</p>
                    <button className='border rounded-full text-sm px-4 py-1'>Logout</button>
                </div>
            </div>
    );
};

export default Navbar;