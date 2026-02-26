import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { IoCall, IoLogOutOutline, IoVideocam } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";

const MessageHeader = () => {
  const {selectedConversation,setSelectedConversation} = useConversation();
  

  return (
    <div className="md:py-5 md:px-6 p-3 border-b border-white/20  bg-white/10  rounded-t-xl flex items-center justify-between gap-2">
      <div className="flex items-center gap-2 text-white">
         <div className="lg:hidden ">
        <FiArrowLeft
          size={22}
          className="cursor-pointer"
          onClick={() => setSelectedConversation(null)}
        />
      </div>
        <div className="flex items-center gap-2">
        <img
          src={selectedConversation?.profilePic || "/profilePlaceholder.png"}
          className="md:h-12 md:w-12 w-8 h-8 rounded-full"
          alt={selectedConversation?.fullName || "profile"}
        />
        <div>
          <h3 className="font-medium text-sm md:text-base text-gray-100">{selectedConversation?.fullName}</h3>
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
