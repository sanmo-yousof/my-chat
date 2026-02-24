import React, { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

const Signup = () => {
  const [showPass, setShowPass] = useState(false);
  const [cshowPass, setcShowPass] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div
        className="
          w-full max-w-4xl
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
          Sign up
        </h1>

        <form className="mt-4 space-y-4">
          {/* Grid for 2 columns on md and lg */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name */}
            <div>
              <label className="label mb-1">
                <span className="text-base label-text text-white">
                  Name *
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                className="w-full input input-bordered h-10 bg-white/20 text-white placeholder:text-gray-300 border border-white/20 focus:border-gray-200 focus:outline-none focus:ring-0 focus:shadow-none"
              />
            </div>
            <div>
              <label className="label mb-1">
                <span className="text-base label-text text-white">
                  Username *
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter username"
                className="w-full input input-bordered h-10 bg-white/20 text-white placeholder:text-gray-300 border border-white/20 focus:border-gray-200 focus:outline-none focus:ring-0 focus:shadow-none"
              />
            </div>

            {/* Password */}
            <div>
              <label className="label mb-1">
                <span className="text-base label-text text-white">
                  Password *
                </span>
              </label>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  placeholder="Enter password"
                  className="w-full input pr-10 input-bordered h-10 bg-white/20 text-white placeholder:text-gray-300 border border-white/20 focus:border-gray-200 focus:outline-none focus:ring-0 focus:shadow-none"
                />
                <div
                  onClick={() => setShowPass(!showPass)}
                  className="text-white text-xl cursor-pointer right-3 top-3 absolute"
                >
                  {showPass ? <IoEyeOffOutline /> : <IoEyeOutline />}
                </div>
              </div>
            </div>
            <div>
              <label className="label mb-1">
                <span className="text-base label-text text-white">
                  Confirm Password *
                </span>
              </label>
              <div className="relative">
                <input
                  type={cshowPass ? "text" : "password"}
                  placeholder="Confirm password"
                  className="w-full input pr-10 input-bordered h-10 bg-white/20 text-white placeholder:text-gray-300 border border-white/20 focus:border-gray-200 focus:outline-none focus:ring-0 focus:shadow-none"
                />
                <div
                  onClick={() => setcShowPass(!cshowPass)}
                  className="text-white text-xl cursor-pointer right-3 top-3 absolute"
                >
                  {cshowPass ? <IoEyeOffOutline /> : <IoEyeOutline />}
                </div>
              </div>
            </div>
            <div className="">
  <label className="label mb-1">
    <span className="text-base label-text text-white">Gender *</span>
  </label>

  <div className="flex gap-4">
    {/* Male */}
    <label className="cursor-pointer label">
      <input
        type="radio"
        name="gender"
        value="male"
        className="radio border-white checked:bg-gray-300"
      />
      <span className="ml-1 text-white">Male</span>
    </label>

    {/* Female */}
    <label className="cursor-pointer label">
      <input
        type="radio"
        name="gender"
        value="female"
        className="radio border-white checked:bg-gray-300"
      />
      <span className="ml-1 text-white">Female</span>
    </label>


  </div>
</div>
          </div>

          {/* Button */}
          <button className="btn w-full mt-4 btn-secondary">Sign Up</button>

          {/* Login link */}
          <div className="text-sm font-medium text-gray-400 text-center mt-2">
            Already have an Account?{" "}
            <a href="/login" className="underline text-white">
              Login
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;