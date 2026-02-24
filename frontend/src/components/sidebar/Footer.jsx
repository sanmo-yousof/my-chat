import React from "react";
import { IoLogOutOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-2">
        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-8 h-8 rounded-full" alt="profile" />
        <div>
          <h3 className="font-medium text-sm text-gray-200">My Name</h3>
          <h5 className="font-light text-xs text-gray-300">username</h5>
        </div>
      </div>
      <button className="btn text-white hover:border-white/20 hover:shadow-none  rounded-full hover:bg-white/10 text-2xl p-2 btn-ghost">
        <IoLogOutOutline />
      </button>
    </div>
  );
};

export default Footer;
