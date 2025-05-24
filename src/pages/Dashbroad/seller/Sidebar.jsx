import { Link, useLocation } from "react-router-dom";
import add_icon from '../../../assets/add_icon.svg'
import product_list_icon from '../../../assets/product_list_icon.svg'
import order_icon from '../../../assets/order_icon.svg'
const Sidebar = () => {
    const location = useLocation();
    const pathname = location.pathname;

    const menuItems = [
        { name: 'Add Product', path: '/seller', icon: add_icon },
        { name: 'Product List', path: '/seller/product-list', icon: product_list_icon },
        { name: 'Orders', path: '/seller/orders', icon: order_icon },
    ];

    return (
        <div className='md:w-64 w-16 border-r min-h-screen text-base border-gray-300 py-2 flex flex-col'>
            {menuItems.map((item) => {
                const isActive = pathname === item.path;

                return (
                    <Link to={item.path} key={item.name}>
                        <div
                            className={`flex items-center py-3 px-4 gap-3 ${isActive
                                ? "border-r-4 md:border-r-[6px] bg-orange-600/10 border-orange-500/90"
                                : "hover:bg-gray-100/90 border-white"
                                }`}
                        >
                            <img
                                src={item.icon}
                                alt={`${item.name.toLowerCase()}_icon`}
                                className="w-7 h-7"
                            />
                            <p className='md:block hidden text-center'>{item.name}</p>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
};

export default Sidebar;