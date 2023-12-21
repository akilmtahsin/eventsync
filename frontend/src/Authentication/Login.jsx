import { useState, useEffect } from "react";
import toast from "react-hot-toast"
import { Link, useNavigate } from "react-router-dom";
import { cookies } from "../../config/cookies";
// const BASE_URL = import.meta.env.BASE_URL;



export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:8000/api/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
        password,
        })
      });

      if (response.ok){
        const data = await response.json();
        cookies.set("user_token", data.token);
        toast.success('Successfully Logged in');
        navigate("/")
      }else {
        if (response.status === 404) {
          const errorData = await response.json();
          toast.error(errorData.message); // Assuming the error message is in the "message" field
        } else if (response.status === 400) {
          const errorData = await response.json();
          toast.error(errorData.message);

        }
        else  {
          
          console.error('Login failed:', response.status);
          toast.error('Login failed');
        }
      }
      
    } catch (error) {
      // Handle login failure
      console.error('Login failed:', error);
      toast.error('Login failed. Please check your credentials.');
    }
  };

  useEffect(() => {
    if (localStorage.getItem('jwt-token')) {
      navigate("/")
    }
  }, [navigate]);

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-15 w-auto"
            src="/EventSync.png"
            alt="EventSync Logo"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Welcome Back!
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST" onSubmit={handleLogin}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="" className="font-semibold text-indigo-600 hover:text-indigo-500"  onClick={(event) => {
    event.preventDefault();
    toast.error("Feature not added.");
  }}>
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login
              </button>
            </div>
          </form>
        </div>
        <div className="flex flex-row items-center justify-center gap-2">
          <p>Don&apos;t have an account?</p>
          <Link to='/auth/signup' className="p-2 hover:text-blue-900 hover:font-bold">
              Signup
            </Link>
        </div>
      </div>
    </>
  )
}
