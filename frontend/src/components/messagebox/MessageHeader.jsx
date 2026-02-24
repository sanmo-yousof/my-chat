import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { IoCall, IoLogOutOutline, IoVideocam } from "react-icons/io5";

const MessageHeader = ({setSelectedChat}) => {

  return (
    <div className="md:py-5 md:px-6 p-3 border-b border-white/20  bg-white/10  rounded-t-xl flex items-center justify-between gap-2">
      <div className="flex items-center gap-2 text-white">
         <div className="lg:hidden ">
        <FiArrowLeft
          size={22}
          className="cursor-pointer"
          onClick={() => setSelectedChat(null)}
        />
      </div>
        <div className="flex items-center gap-2">
        <img
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="md:h-12 md:w-12 w-8 h-8 rounded-full"
          alt="profile"
        />
        <div>
          <h3 className="font-medium text-sm md:text-base text-gray-100">My Name</h3>
          <p className="md:text-sm text-xs font-medium text-gray-300">Active Now</p>
        </div>
      </div>
      </div>

      <div className="flex items-center gap-2">
        <button className="btn text-white border-none hover:shadow-none  rounded-full hover:bg-white/10 text-xl md:text-2xl p-2 btn-ghost">
        <IoCall/>
      </button>
      <button className="btn text-white border-none hover:shadow-none  rounded-full hover:bg-white/10 text-xl md:text-2xl p-2 btn-ghost">
        <IoVideocam/>
      </button>
      </div>
    </div>
  );
};

export default MessageHeader;
