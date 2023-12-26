// import { Suspense, lazy, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
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
import Home from './views/Home';
// import { jwtDecode } from 'jwt-decode';
// import { cookies } from '../config/cookies';
import DashboardLayout from './Layouts/DashboardLayout';
import UserProfile from './views/User/UserProfile';
import UserPayments from './views/User/Payments';
import EnrolledEvent from './views/User/EnrolledEvent';
import CreatedSpeakers from './views/Organizer/CreatedSpeakers';
import CreatedEvents from './views/Organizer/CreatedEvents';
import AdminDashboard from './views/Admin/AdminDashboard';
import OrganizerDashboard from './views/Organizer/OrganizerDashboard';
import EventCreationForm from './components/Forms/EventRegistration';
import ViewAllUser from './views/Admin/ViewAllUser';
import ViewAllOrganizers from './views/Admin/ViewAllOrganizers';
import ViewAllSpeakers from './views/Admin/ViewAllSpeakers';
import ViewAllPayments from './views/Admin/ViewAllPayments';
import ViewAllEvents from './views/Admin/ViewAllEvents';
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

const publicRoutes = [
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
          <Route path="/dashboard/users" element={<ViewAllUser   />} />
          <Route path="/dashboard/organizers" element={<ViewAllOrganizers   />} />
          <Route path="/dashboard/speakers" element={<ViewAllSpeakers  />} />
          <Route path="/dashboard/payments" element={<ViewAllPayments  />} />
          <Route path="/dashboard/events" element={<ViewAllEvents  />} />
          <Route path="/dashboard/organizers" element={<UserProfile />} />
          <Route path="/dashboard/speakers" element={<UserProfile />} />
          <Route path="/dashboard/events" element={<UserProfile />} />
          <Route path="/dashboard/organizer" element={<OrganizerDashboard    />} />
          <Route path="/dashboard/organizer/speakers" element={<CreatedSpeakers    />} />
          <Route path="/dashboard/organizer/events" element={<CreatedEvents   />} />
          <Route path="/dashboard/organizer/events/create" element={<EventCreationForm   />} />
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
          {publicRoutes.map((route, index) => (
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
