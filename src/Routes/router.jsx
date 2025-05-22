
import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import ProducDetails from "../components/product/ProducDetails";
import AddCard from "../components/product/AddCard";
import AddAddress from "../components/address/AddAddress";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children : [
        {
            path:'/',
            element:<Home/>
        },
        {
          path:'/product/:id',
          element:<ProducDetails/>,
          loader:({params}) => fetch(`http://localhost:8000/products/${params.id}`)
        },

          {
          path:'/addcard/:id',
          element:<AddCard/>,
          loader:({params}) => fetch(`http://localhost:8000/products/${params.id}`)
        },
        {
          path:'address',
          element:<AddAddress/>,
           loader:() => fetch('http://localhost:8000/address')
        }

    ]
  },
]);
