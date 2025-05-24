import { Outlet } from "react-router-dom";
import Sidebar from "../../pages/Dashbroad/seller/Sidebar";


const Dashbroad = () => {
    return (
        <div>
            <div className="flex w-full">
                <Sidebar/>
            </div>
            <Outlet/>
        </div>
    );
};

export default Dashbroad;