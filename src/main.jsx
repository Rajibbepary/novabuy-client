import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { router } from './Routes/router';


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <div className='font-outfit'>
     <RouterProvider router={router} />
   </div>
  </StrictMode>,
)
