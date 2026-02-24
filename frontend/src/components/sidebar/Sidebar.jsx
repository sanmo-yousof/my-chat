import React from "react";
import SearchInput from "./SearchInput";
import Conversation from "./Conversation";
import { IoLogOut, IoLogOutOutline } from "react-icons/io5";
import Footer from "./Footer";

const Sidebar = ({ setSelectedChat,selectedChat}) => {
  return (
    <div
      className="
              w-full
              h-full
              p-6 
              rounded-xl 
              shadow-lg 
              backdrop-blur-sm 
              bg-white/10 
              border 
              border-white/20 
              overflow-hidden
              flex flex-col justify-between
              gap-6 
            "
    >
      <SearchInput />

      <Conversation setSelectedChat  = { setSelectedChat } selectedChat={selectedChat} />

      <Footer/>
    </div>
  );
};

export default Sidebar;
