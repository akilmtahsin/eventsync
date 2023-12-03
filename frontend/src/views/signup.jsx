import { useState } from "react";
import { Switch } from "@headlessui/react";

export default function SignUp() {
  const [userType, setUserType] = useState("user"); 

  const toggleUserType = () => {
    setUserType(userType === "user" ? "organizer" : "user");
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <h2 className="mt-10 text-center text-xl font-bold leading-9 tracking-tight text-gray-900">Select User Type</h2>
      <div className="flex justify-center items-center mt-4">
        <label
          className={`mr-4 cursor-pointer ${
            userType === "user" ? "text-indigo-600 font-medium" : "text-gray-500"
          }`}
          onClick={() => setUserType("user")}
        >
          User
        </label>
        <Switch
          checked={userType === "organizer"}
          onChange={toggleUserType}
          className={`${
            userType === "user" ? "bg-gray-300" : "bg-indigo-600"
          } relative inline-flex h-6 w-11 items-center rounded-full`}
        >
          <span
            className={`${
              userType === "user" ? "translate-x-1" : "translate-x-6"
            } inline-block h-4 w-4 transform rounded-full bg-white transition`}
          />
        </Switch>
        <label
          className={`ml-4 cursor-pointer ${
            userType === "organizer" ? "text-indigo-600 font-medium" : "text-gray-500"
          }`}
          onClick={() => setUserType("organizer")}
        >
          Organizer
        </label>
      </div>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          {userType === "organizer"
            ? "Sign Up to Create Your Event"
            : "Sign up to Get Your Tickets!"}
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              {userType === "organizer"
            ? "Organizer Name"
            : "Name"}
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your Full Name"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              {userType === "organizer"
            ? "Organization Email"
            : "Email"}
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Enter your email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                autoComplete="current-password"
                required
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
    </div>
  );
}
