// import { Suspense, lazy, useEffect, useState } from 'react';
import { Outlet, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Login from "./Authentication/Login";
import SignUp from "./Authentication/SignUp";
import Home from "./views/home";
// import { DefaultSpinner } from './components/Spinner';

import DefaultLayout from "./Layouts/DefaultLayout";
import Events from "./views/Events";
import EventDetails from "./views/EventDetails";
import Speakers from "./views/Speakers";
import Notfound from "./components/NotFound";
import AdminLayout from "./Layouts/AdminLayout";

const routes = [
  {
    path: "/",
    component: Home,
    isIndex: true,
  },

  {
    path: "/events",
    component: Events,
  },

  {
    path: "/events/details",
    component: EventDetails,
  },

  {
    path: "/auth/login",
    component: Login,
  },

  {
    path: "/auth/signup",
    component: SignUp,
  },

  {
    path: "/speakers",
    component: Speakers,
  },

  {
    path:"/adminlayout",
    component: AdminLayout,

  },

  {
    path: "*",
    component: Notfound,
  },
];

function App() {
  return (
    <div>
      <Toaster
        position="top-center"
        reverseOrder={false}
        containerClassName="overflow-auto"
      />
      <Routes>
      <Route path="/adminlayout" element={<AdminLayout />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<SignUp />} />
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
      </Routes>
    </div>
  );
}

export default App;
