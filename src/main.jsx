import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { router } from './Routes/router';
import { ClerkProvider } from '@clerk/clerk-react'
import { ToastContainer } from 'react-toastify';
// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env file')
}

createRoot(document.getElementById('root')).render(
   
  <StrictMode>
     <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
   <div className='font-outfit'>
     <ToastContainer />
     <RouterProvider router={router} />
   </div>
   </ClerkProvider>
  </StrictMode>,
  
)
