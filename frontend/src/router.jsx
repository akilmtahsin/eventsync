import {createBrowserRouter} from "react-router-dom";
import Login from "./views/Login";
import Signup from "./views/SignUp";
import Notfound from "./views/NotFound";
import Home from "./views/home";
import DefaultLayout from "./assets/components/DefaultLayout";
import AdminLayout from "./assets/components/AdminLayout";
import Events from "./views/Events";
import Speakers from "./views/Speakers";
import EventDetails from "./assets/components/EventDetails";

const router = createBrowserRouter([


  {
    path:'/',
    element: <Home/>,
  },

  {
    path: '/events',
    element: <Events/>,
  
  },

  {
    path: '/events/details',
    element: <EventDetails/>,
  
  },


  {
    path:'/admin',
    element: <AdminLayout/>,
  },

  {
    path:'/login',
    element: <Login/>,
  },

  {
    path:'/signup',
    element: <Signup/>,
  },

  {
    path: '/events',
    element: <Events/>
  },

  {
    path: '/speakers',
    element: <Speakers/>
  },
  
  {
    path: '*',
    element: <Notfound/>
  }


  
])

export default router;