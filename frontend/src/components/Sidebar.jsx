
import { NavLink} from 'react-router-dom';



const Sidebar = () => {
  return (
    <aside className="absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-blue-gray-800 font-sans text-white duration-300 ease-linear lg:static lg:translate-x-0">
      <div className="flex items-center justify-center mt-4 gap-2 px-6 py-5.5 lg:py-6.5">
        <NavLink to="/">
          <img src="EventSync.png" alt="Logo" className="h-12 w-auto"/>
        </NavLink>
      </div>

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
          {/* <!-- Menu Group --> */}
          <div>
            <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
              MENU
            </h3>

            <ul className="mb-6 flex flex-col gap-1.5">
              <li>
                <NavLink
                  to="/organizations"
                  className="group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 "
                >
                 
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/organizations"
                  className="group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 "
                >
                  
                  Pending Approval Requests
                </NavLink>
              </li>

              
            </ul>
          </div>

       
        </nav>
      
      </div>
    </aside>
  );
};

export default Sidebar;
