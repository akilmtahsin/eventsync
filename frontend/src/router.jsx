import {Navigate, createBrowserRouter} from "react-router-dom";
import Login from "./views/login";
import Signup from "./views/signup";
import Users from "./views/users";
import Notfound from "./views/notfound";
import Admin from "./assets/components/admin";
import Dashboard from "./views/dashboard";
import Guestlayout from "./assets/components/guestlayout";
import Organizers from "./views/organizers";
import Events from "./views/events";
import Userlayout from "./assets/components/userlayout";
import Organizerlayout from "./assets/components/organizerlayout";
import Home from "./views/home";


const router = createBrowserRouter([
  // {
  //   path:'/',
  //   element: <Navigate to= "/home"/>
  // },

  {
    path:'/',
    element: <Guestlayout/>,
    children:[
      
        {
          path: '/login',
          element: <Login/>
        },
        
        {
          path: '/signup',
          element: <Signup/>
        },
      
    ]
  },

  {
    path:'/admin',
    element: <Admin/>,
    children:[
      {
        path: 'admin/dashboard',
        element: <Dashboard/>
      },
      {
        path: 'admin/view-users',
        element: <Users/>
      },
      {
        path: 'admin/view-organizers',
        element: <Organizers/>
      },
      {
        path: 'admin/view-events',
        element: <Events/>
      }
    ]
  },

  {
    path:'/user',
    element: <Userlayout/>,
  },

  {
    path:'/organizer',
    element: <Organizerlayout/>,
  },

  
  
  
  {
    path: '*',
    element: <Notfound/>
  }


  
])

export default router;