import { Link, NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    
      <div className="sticky top-0 z-[1000] font-display flex justify-between items-center h-full w-screen max-w-full mx-auto px-4 py-2 backdrop-blur-md  ">
        <Link to="/">
          <img src="/EventSync.png" alt="logo" className="h-8 w-auto" />
        </Link>
        <ul className="flex justify-between ">
          <li className="text-lg p-2  my-3 mr-4 ml-2 hover:text-blue-500 transition-colors ">
            <NavLink
              className="group text-sky-600 transition duration-300"
              to="/events"
            >
              Events{" "}
            </NavLink>
          </li>
          <li className="text-lg p-2  my-3 mr-4 ml-2 hover:text-blue-500 transition-colors">
            <NavLink to="/speakers">Speaker </NavLink>
          </li>
          <li className="text-lg p-2 mr-4 ml-2 rounded-lg hover:bg-gray-200  my-3">
            <NavLink to="/auth/login">Login </NavLink>
          </li>
          <li className="text-lg p-2 ml-2 rounded-lg text-white bg-gray-600  hover:drop-shadow-lg my-3">
            <NavLink to="/auth/signup">Sign Up </NavLink>
          </li>
        </ul>
      </div>
   
  );
};

export default NavBar;
