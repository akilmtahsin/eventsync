// import React, { useState, useEffect } from 'react';
// import { Navigate } from 'react-router-dom';
// import jwtDecode from 'jwt-decode';
// // import Cookies from 'js-cookie';

// const DashboardRoute = ({ element, allowedRoles }) => {
//   const [userRole, setUserRole] = useState(null);

//   const getUserRoleFromToken = () => {
//     const userToken = Cookies.get('user_token');

//     if (userToken) {
//       const decodedToken = jwtDecode(userToken);
//       setUserRole(decodedToken.role);
//     } else {
//       console.error('Not Authorized');
//     }
//   };

//   useEffect(() => {
//     getUserRoleFromToken();
//   }, []);

//   useEffect(() => {
//     // This will log the updated userRole whenever it changes
//     console.log('Updated userRole:', userRole);
//   }, [userRole]);

//   // Check if the user is authorized
//   const isAuthorized = allowedRoles.includes(userRole);

//   // If not authorized, navigate to a different route (or show an error)
//   if (!isAuthorized) {
//     return <Navigate to="/unauthorized" />;
//   }

//   return <div>{element}</div>;
// };

// export default DashboardRoute;
