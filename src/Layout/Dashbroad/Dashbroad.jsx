import { Outlet } from "react-router-dom";
import Sidebar from "../../pages/Dashbroad/seller/Sidebar";
//import AddProduct from "../../pages/Dashbroad/seller/product/AddProduct";
import Navbar from "../../pages/Dashbroad/seller/Navbar";


const Dashbroad = () => {
    return (
        <div > 
            <Navbar/>
            <div className="flex w-full">
                <Sidebar/>
                 <Outlet/>
            </div>
            
            
            
        </div>
    );
};

export default Dashbroad;