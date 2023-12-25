// import { Suspense, lazy, useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Outlet, useEffect, useState } from 'react';
import Login from './Authentication/Login';
import SignUp from './Authentication/SignUp';

// import { DefaultSpinner } from './components/Spinner';

import DefaultLayout from './Layouts/DefaultLayout';
import Events from './views/Events';
import EventDetails from './views/EventDetails';
import Speakers from './views/Speakers';
import Notfound from './components/NotFound';
import AdminLayout from './Layouts/DashboardLayout';
import Home from './views/Home';
import { jwtDecode } from 'jwt-decode';
import Dashboard from './Dashboard/Dashboard';
import { cookies } from '../config/cookies';
import DashboardLayout from './Layouts/DashboardLayout';
import Profile from './components/Profile';
import UserProfile from './views/User/UserProfile';
import UserPayments from './views/User/Payments';
import EnrolledEvent from './views/User/EnrolledEvent';
import CreatedSpeakers from './views/Organizer/CreatedSpeakers';
import CreatedEvents from './views/Organizer/CreatedEvents';
import AdminDashboard from './views/Admin/AdminDashboard';
// import DashboardRoute from './Routes/DashboardRoute';

// const DashboardRoute = ({ element, userRole, allowedRoles }) => {
//   // Check if the user is authorized
//   const isAuthorized = allowedRoles.includes(userRole);

//   // If not authorized, navigate to a different route (or show an error)
//   if (!isAuthorized) {
//     return <Navigate to="/unauthorized" />;
//   }

//   // If authorized, render the specified element
//   return element;
// };

const routes = [
  {
    path: '/',
    component: Home,
    isIndex: true,
  },

  {
    path: '/events',
    component: Events,
  },

  {
    path: '/events/details',
    component: EventDetails,
  },

  {
    path: '/auth/login',
    component: Login,
  },

  {
    path: '/auth/signup',
    component: SignUp,
  },

  {
    path: '/speakers',
    component: Speakers,
  },

  // {
  //   path: '/adminlayout',
  //   component: AdminLayout,
  // },

  {
    path: '*',
    component: Notfound,
  },
];

function App() {
  // const [userRole, setUserRole] = useState(null);

  // const getUserRoleFromToken = () => {
  //   const userToken = Cookies.get('user_token');

  //   if (userToken) {
  //     const decodedToken = jwtDecode(userToken);
  //   } else {
  //     console.error('Not Authorized');
  //   }
  // };

  // useEffect(() => {
  //   getUserRoleFromToken();
  // }, []);

  // useEffect(() => {
  //   // This will log the updated userRole whenever it changes
  //   console.log('Updated userRole:', userRole);
  // }, [userRole]);

  // // // Check if the user is authorized
  // // const isAuthorized = allowedRoles.includes(userRole);

  return (
    <div>
      <Toaster
        position="top-center"
        reverseOrder={false}
        containerClassName="overflow-auto"
      />
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<SignUp />} />
        <Route
          path="/dashboard"
          element={
            <DashboardLayout>
              <Outlet />
            </DashboardLayout>
          }
        >
          <Route path="/dashboard/" element={<AdminDashboard />} />
          <Route path="/dashboard/users" element={<UserProfile />} />
          <Route path="/dashboard/organizers" element={<UserProfile />} />
          <Route path="/dashboard/speakers" element={<UserProfile />} />
          <Route path="/dashboard/events" element={<UserProfile />} />
          <Route path="/dashboard/organizer/speakers" element={<CreatedSpeakers    />} />
          <Route path="/dashboard/organizer/events" element={<CreatedEvents   />} />
          <Route path="/dashboard/user/profile" element={<UserProfile />} />
          <Route path="/dashboard/user/payments" element={<UserPayments />} />
          <Route path="/dashboard/user/events" element={<EnrolledEvent />} />
          <Route
            path="/dashboard/organizer/dashboard"
            element={<UserProfile />}
          />
          <Route
            path="/dashboard/organizer/speakers"
            element={<UserPayments />}
          />
          <Route
            path="/dashboard/organizer/events"
            element={<EnrolledEvent />}
          />
        </Route>
        <Route path="*" element={<Notfound />} />
        <Route
          path="/"
          element={
            <DefaultLayout>
              <Outlet />
            </DefaultLayout>
          }
        >
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                route.isIndex ? <route.component /> : <route.component />
              }
            />
          ))}
        </Route>

        {/* <DashboardRoute
          path="admin"
          element={<Dashboard />}
          userRole={userRole}
          allowedRoles={['admin', 'organizer']}
        />
          
          
       */}
      </Routes>
    </div>
  );
}

export default App;
