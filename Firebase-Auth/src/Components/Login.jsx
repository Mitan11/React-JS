import React, { useState, useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Context/AuthContext";

function Login() {
  const { GoogleAuth, handleLogin } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold">Sign up</h1>
            <div className="w-full flex-1 mt-8">
              <div className="mx-auto max-w-xs">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  onClick={() => handleLogin(email, password)}
                  className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                >
                  <span className="ml-3">Sign Up</span>
                </button>
              </div>

              <div className="my-12 border-b text-center">
                <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                  Or sign up with e-mail
                </div>
              </div>

              <div className="flex flex-col items-center">
                <button
                  onClick={GoogleAuth}
                  className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
                >
                  <div className="bg-white p-1 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                      className="w-6 h-6"
                    >
                      <path
                        fill="#fbc02d"
                        d="M44.5,20H24v8.5h11.7c-1.3,3.8-4.5,6.6-8.4,7.4v6.3h8.2c4.8-4.4,7.5-10.9,7.5-18C43.5,22.9,44,21.4,44.5,20z"
                      />
                      <path
                        fill="#e53935"
                        d="M24,44.5c4.9,0,9.3-1.7,12.8-4.5L28.8,33.7c-1.4,0.4-2.8,0.6-4.3,0.6c-6.6,0-12.2-4.4-14.3-10.4H1.6v6.5  C6.7,38.8,14.7,44.5,24,44.5z"
                      />
                      <path
                        fill="#4caf50"
                        d="M10.1,24c-0.7-2.1-0.7-4.3,0-6.5V11H1.6C-0.2,14.5-1,18.2-1,22c0,3.8,0.8,7.5,2.6,11h8.5V24z"
                      />
                      <path
                        fill="#1565c0"
                        d="M24,9.5c2.2,0,4.2,0.4,6,1.1l6.2-6.2c-3.4-1.9-7.3-2.9-11.6-2.9C14.7,1.5,6.7,7.2,1.6,16.2l8.5,6.5   C11.8,13.9,17.4,9.5,24,9.5z"
                      />
                    </svg>
                  </div>
                  <span className="ml-4">Sign Up with Google</span>
                </button>

                <div className="mt-4 text-sm text-gray-600">
                  <span>Don't have an account?</span>
                  <Link
                    to="/signup"
                    className="ml-1 text-indigo-600 hover:text-indigo-800 font-medium"
                  >
                    Sign up
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
