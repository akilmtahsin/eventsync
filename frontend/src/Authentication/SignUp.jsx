import { useState } from 'react';
import { Switch } from '@headlessui/react';
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import SignUpValidationSchema from '../ValidationSchema/SignUpValidationShema';

export default function SignUp() {
  const navigate = useNavigate();
  const [userType, setUserType] = useState('user');

  const toggleUserType = () => {
    //  setUserType(userType === 'user' ? 'organizer' : 'user');
    // setRole(userType === 'user' ? 'organizer' : 'user');
    formik.setValues({
      ...formik.values,
      role: formik.values.role === 'user' ? 'organizer' : 'user',
    });
    console.log(formik.values);
  };

  // const { setCurrentUser, setUserToken } = useStateContext();
  // const [username, setUsername] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      role: 'user',
    },
    validationSchema: SignUpValidationSchema,

    onSubmit: async (values) => {
      try {
        const response = await fetch(`http://localhost:8000/api/user/signup`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });

        if (response.ok) {
          const data = await response.json();
          console.log(data);
          navigate('/auth/login');
        } else {
          if (response.status === 400) {
            const errorData = await response.json();
            toast.error(errorData.message);
            formik.setErrors(errorData.errors);
          } else {
            console.error('Registration failed:', response.status);
            toast.error('Registration failed. Please try again later.');
          }
        }
      } catch (error) {
        console.error('Registration failed:', error);
        toast.error('Registration failed. Please try again later.');
      }
    },
  });

  return (
    <div>
      <div className="shadow-lg rounded-md m-10 mx-auto w-[500px] flex-1 flex-col justify-center items-center py-5 px-8">
        <div>
          <img
            className="mx-auto h-14 w-auto mt-4"
            src="/EventSync.png"
            alt="EventSync Logo"
          />
        </div>
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
              checked={formik.values.role == 'organizer'}
              onChange={toggleUserType}
              className={`${
                formik.values.role === 'user' ? 'bg-gray-300' : 'bg-indigo-600'
              } relative inline-flex h-6 w-11 items-center rounded-full`}
            >
              <span
                className={`${
                  formik.values.role === 'user'
                    ? 'translate-x-1'
                    : 'translate-x-6'
                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
              />
            </Switch>
            <label
              className={`ml-4 cursor-pointer ${
                formik.values.role === 'organizer'
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
              {formik.values.role === 'organizer'
                ? 'Sign Up to Create Your Event'
                : 'Sign up to Get Your Tickets!'}
            </h2>
          </div>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            onSubmit={formik.handleSubmit}
            className="space-y-6"
            action="#"
            method="POST"
          >
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                {formik.values.role === 'organizer' ? 'Organizer Name' : 'Name'}
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="Enter your Full Name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={formik.handleChange}
                />
                {formik.touched.username && formik.errors.username && (
                  <div className="text-red-500 mt-1">
                    {formik.errors.username}
                  </div>
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                {formik.values.role === 'organizer'
                  ? 'Organization Email'
                  : 'Email'}
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Enter your email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={formik.handleChange}
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="text-red-500 mt-1">{formik.errors.email}</div>
                )}
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
                  placeholder="Minimum 6, at least one special character"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={formik.handleChange}
                />
                {formik.touched.password && formik.errors.password && (
                  <div className="text-red-500 mt-1">
                    {formik.errors.password}
                  </div>
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="role"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                You are an
              </label>
              <div className="mt-2">
                <input
                  id="role"
                  name="role"
                  type="text"
                  value={formik.values.role}
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
            className="flex flex-row items-center justify-center gap-2 p-3 text-blue-900 hover:font-bold"
          >
            <p>Login</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
        <div className="flex flex-row items-center justify-center gap-2">
          <Link
            to="/"
            className=" font-bold rounded-lg p-2 hover:bg-gray-300 hover:font-bold flex justify-between gap-3"
          >
            <p>Continue as a guest</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
