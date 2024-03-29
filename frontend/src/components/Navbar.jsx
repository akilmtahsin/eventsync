import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import DropdownUser from './DropDownUser';
import { cookies } from '../../config/cookies';

const NavBar = () => {
  
  const [isLoggedIn, setLoggedIn] = useState(false); // State to track login status

 
  useEffect(() => {
    // Check if the user is logged in 
    const token = cookies.get('user_token');
    if (token) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, []); 

   

  return (
    <div className="sticky top-0 z-[1000] font-display flex justify-between items-center h-16 w-screen max-w-full mx-auto px-4 py-2 bg-white drop-shadow-lg">
      <Link to="/">
        <img src="/EventSync.png" alt="logo" className="ml-5 h-12 w-auto" />
      </Link>
      <ul className="flex justify-between">
        <li className="text-lg p-2 my-3 mr-4 ml-2 hover:text-blue-500 transition-colors">
          <NavLink className="group text-sky-600 transition duration-300" to="/events">
            Events
          </NavLink>
        </li>
        <li className="text-lg p-2 my-3 mr-4 ml-2 hover:text-blue-500 transition-colors">
          <NavLink to="/speakers">Speaker</NavLink>
        </li>
        {isLoggedIn ? (
          // If logged in, render UserDropdown component
          <li className="ml-2">
            <DropdownUser set/>
          </li>
        ) : (
          // If not logged in, render login and signup links
          <>
            <li className="text-lg p-2 mr-4 ml-2 rounded-lg hover:bg-gray-200 my-3">
              <NavLink to="/auth/login">Login</NavLink>
            </li>
            <li className="text-lg p-2 ml-2 rounded-lg text-white bg-gray-600 hover:drop-shadow-lg my-3">
              <NavLink to="/auth/signup">Sign Up</NavLink>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default NavBar;
