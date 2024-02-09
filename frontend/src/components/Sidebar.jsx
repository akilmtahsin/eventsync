import { NavLink } from 'react-router-dom';
import { cookies } from '../../config/cookies';
import { jwtDecode } from 'jwt-decode';


const Sidebar = () => {

  const getUserRoleFromToken = () => {
    const userToken = cookies.get('user_token');

    if (userToken) {
      try {
        const decodedToken = jwtDecode(userToken);

        // Assuming your token has a property named 'userRole'
        const userRole = decodedToken.role;

        if (userRole) {
       

          return userRole;
        } else {
          console.error('User nole not found in the token');
        }
      } catch (error) {
        console.error('Error decoding token:', error.message);
      }
    } else {
      console.error('Not Authorized');
    }
  };

 
  const userRole = getUserRoleFromToken();
  console.log(userRole)

  

  return (
    <aside className="absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-blue-gray-800 font-sans text-white duration-300 ease-linear lg:static lg:translate-x-0">
      <div className="flex items-center justify-center mt-4 gap-2 px-6 py-5.5 lg:py-6.5">
        <NavLink to="/">
          <img src="EventSync.png" alt="Logo" className="h-12 w-auto" />
        </NavLink>
      </div>

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
          {/* <!-- Menu Group --> */}
          <div>
            <h3 className="mb-7 ml-4 text-xl font-semibold text-bodydark2">
              MENU
            </h3>

            {userRole==='admin' && (<ul className="mb-6 flex flex-col gap-1.5">
              <li>
                <NavLink
                  to="/dashboard/"
                  className="group relative flex items-center gap-2.5 rounded-lg py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-blue-800/30 "
                >
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/events/pending"
                  className="group relative flex items-center gap-2.5 rounded-lg py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-blue-800/30 "
                >
                  Approval Requests
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/events/approved"
                  className="group relative flex items-center gap-2.5 rounded-lg py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-blue-800/30 "
                >
                  Approved Events
                </NavLink>
              </li>
              <li>
              <NavLink
                  to="/dashboard/events/ongoing"
                  className="group relative flex items-center gap-2.5 rounded-lg py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-blue-800/30 "
                >
                  Ongoing Events
                </NavLink>
              </li>
              {/* <li>
              <NavLink
                  to="/dashboard/events/rejected"
                  className="group relative flex items-center gap-2.5 rounded-lg py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-blue-800/30 "
                >
                  Rejected Events
                </NavLink>
              </li> */}
              <li>
                <NavLink
                  to="/dashboard/payments"
                  className="group relative flex items-center gap-2.5 rounded-lg py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-blue-800/30 "
                >
                  All Payments
                </NavLink>
              </li>
             
              <li>
                <NavLink
                  to="/dashboard/speakers"
                  className="group relative flex items-center gap-2.5 rounded-lg py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-blue-800/30 "
                >
                  Speakers
                </NavLink>
              </li>
              </ul>
)}
             

              {/* -----------------------admin------------------------------ */}
              { userRole === 'organizer' && (
              <ul>
                <li>
                  <NavLink
                    to="/dashboard/"
                    className="group relative flex items-center gap-2.5 rounded-lg py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-blue-800/30 "
                  >
                    Organizer Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/organizer/events/create"
                    className="group relative flex items-center gap-2.5 rounded-lg py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-blue-800/30 "
                  >
                   Create New Event
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/organizer/speaker/create"
                    className="group relative flex items-center gap-2.5 rounded-lg py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-blue-800/30 "
                  >
                   Create New Speaker
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/organizer/events"
                    className="group relative flex items-center gap-2.5 rounded-lg py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-blue-800/30 "
                  >
                    My Events
                  </NavLink>
                </li>
               
                <li>
                <NavLink
                    to="/dashboard/organizer/events/rejected"
                    className="group relative flex items-center gap-2.5 rounded-lg py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-blue-800/30 "
                  >
                    Rejected Events
                  </NavLink>
                </li>
                
                <li>
                  <NavLink
                    to="/dashboard/organizer/speakers"
                    className="group relative flex items-center gap-2.5 rounded-lg py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-blue-800/30 "
                  >
                    Created Speakers
                  </NavLink>
                </li>
              </ul>
              )}
              {/* -----------------------org end------------------------------ */}
              { userRole === 'user' && (
              <ul>
              <li>
                <NavLink
                  to="/dashboard/"
                  className="group relative flex items-center gap-2.5 rounded-lg py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-blue-800/30 "
                >
                  User Profile
                </NavLink>
              </li>

              
              <li>
                <NavLink
                  to="/dashboard/user/payments"
                  className="group relative flex items-center gap-2.5 rounded-lg py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-blue-800/30 "
                >
                  Payments
                </NavLink>
              </li>
            </ul>)}
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
