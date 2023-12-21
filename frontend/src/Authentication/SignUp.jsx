import { useState } from 'react';
import { Switch } from '@headlessui/react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';


export default function SignUp() {
  const navigate = useNavigate();
  const [userType, setUserType] = useState('user');
  const [role, setRole] = useState('user');
  const toggleUserType = () => {
    setUserType(userType === 'user' ? 'organizer' : 'user');
    setRole(userType === 'user' ? 'organizer' : 'user');
  };

  // const { setCurrentUser, setUserToken } = useStateContext();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({ __html: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError({ __html: '' });
  
    try {
      const response = await fetch(`http://localhost:8000/api/user/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          role,
          email, 
          password,
          username,
        }),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        navigate('/auth/login');
      } else {
        if (response.status === 400) {
          const errorData = await response.json();
          toast.error(errorData.message); // Assuming the error message is in the "message" field
        } else {
          // Handle other error cases
          console.error('Registration failed:', response.status);
          toast.error('Registration failed. Please try again later.');
        }
      }
      
      
    } catch (error) {
      // Handle network or unexpected errors
      console.error('Registration failed:', error);
      toast.error('Registration failed. Please try again later.');
    }
  };

  return (
    <div>
      <div>
        <img
          className="mx-auto h-14 w-auto"
          src="/EventSync.png"
          alt="EventSync Logo"
        />
      </div>
      <div className=" max-h-screen mx-auto w-96 flex-1 flex-col justify-center items-center py-5 px-8 ">
        <div>
          <h2 className=" text-center text-xl font-bold leading-9 tracking-tight text-gray-900">
            Select User Type
          </h2>
          <div className="flex justify-center items-center mt-4">
            <label
              className={`mr-4 cursor-pointer ${
                userType === 'user'
                  ? 'text-indigo-600 font-bold'
                  : 'text-gray-500'
              }`}
              onClick={() => setUserType('user')}
            >
              User
            </label>
            <Switch
              checked={userType === 'organizer'}
              onChange={toggleUserType}
              className={`${
                userType === 'user' ? 'bg-gray-300' : 'bg-indigo-600'
              } relative inline-flex h-6 w-11 items-center rounded-full`}
            >
              <span
                className={`${
                  userType === 'user' ? 'translate-x-1' : 'translate-x-6'
                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
              />
            </Switch>
            <label
              className={`ml-4 cursor-pointer ${
                userType === 'organizer'
                  ? 'text-indigo-600 font-bold'
                  : 'text-gray-500'
              }`}
              onClick={() => setUserType('organizer')}
            >
              Organizer
            </label>
          </div>
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              {userType === 'organizer'
                ? 'Sign Up to Create Your Event'
                : 'Sign up to Get Your Tickets!'}
            </h2>
          </div>
        </div>
        {error.__html && (
          <div
            className="bg-red-500 rounded py-2 px-3 text-white"
            dangerouslySetInnerHTML={error}
          ></div>
        )}

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
            action="#"
            method="POST"
          >
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                {userType === 'organizer' ? 'Organizer Name' : 'Name'}
              </label>
              <div className="mt-2">
                <input
                  id="fullName"
                  name="name"
                  type="text"
                  placeholder="Enter your Full Name"
                  required
                  value={username}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                {userType === 'organizer' ? 'Organization Email' : 'Email'}
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Enter your email"
                  required
                  value={email}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Set a strong password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="role"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Role
              </label>
              <div className="mt-2">
                <input
                  id="role"
                  name="role"
                  type="text"
                  placeholder="Enter your role"
                  required
                  value={role}
                  readOnly
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get Started
              </button>
            </div>
          </form>
        </div>
        <div className="flex flex-row items-center justify-center gap-2">
          <p>Already have an account?</p>
          <Link
            to="/auth/login"
            className="p-2 hover:text-blue-900 hover:font-bold"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
