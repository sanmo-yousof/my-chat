import React, { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import {Link} from "react-router-dom"


const Login = () => {
  const [showPass,setShowPass] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div
        className="
        w-full 
        p-6 
        rounded-xl 
        shadow-lg 
        bg-white/10 
        backdrop-blur-md 
        border 
        border-white/20
      "
      >
        <h1 className="text-3xl mb-6 font-semibold text-center text-white">
          Login
        </h1>

        <form className="mt-4 space-y-4">
          <div>
            <label className="label mb-1">
              <span className="text-base label-text text-white">
                Username *
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10 bg-white/20 text-white placeholder:text-gray-300border border-white/20 focus:border-gray-200 focus:outline-none focus:ring-0 focus:shadow-none"
            />
          </div>
          <div>
            <label className="label mb-1">
              <span className="text-base label-text text-white">
                Password *
              </span>
            </label>
            <div className="relative">
              <input
                type={showPass?"text":"password"}
                placeholder="Enter username"
                className="w-full input pr-10 input-bordered h-10 bg-white/20 text-white placeholder:text-gray-300border border-white/20 focus:border-gray-200 focus:outline-none focus:ring-0 focus:shadow-none"
              />
              <div onClick={() => setShowPass(!showPass)} className="text-white text-xl cursor-pointer right-3 top-3 absolute">
               {showPass?<IoEyeOffOutline  />:<IoEyeOutline />}
                
              </div>
            </div>
          </div>
          <button className="btn w-full mt-4 btn-secondary">Login</button>
          <div className="text-sm font-medium text-gray-400">
            <span>Dont't have an Account ?</span><Link className="underline text-white" to={"/sign-up"}> Sign Up </Link>
          </div>          
        </form>
      </div>
    </div>
  );
};

export default Login;
