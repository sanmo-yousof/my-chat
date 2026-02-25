import React, { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/messagebox/MessageContainer";
import useAuth from "../../hook/useAuth";

const Home = () => {
  const {user} = useAuth();
  console.log(user)

  const [selectedChat, setSelectedChat] = useState(null);
  console.log(selectedChat)

  return (
    <div className="flex gap-6 w-full h-screen overflow-hidden py-4">

      {/* Sidebar */}
      <div className={`
        ${selectedChat ? "hidden" : "flex"}
        lg:flex w-full lg:w-[20%] 
      `}>
        <Sidebar selectedChat={selectedChat} setSelectedChat={setSelectedChat}/>
      </div>

      {/* Chatbox */}
      <div className={`
        ${selectedChat ? "flex" : "hidden"}
        lg:flex w-full lg:w-[80%] 
      `}>
        <MessageContainer 
          selectedChat={selectedChat}
          setSelectedChat={setSelectedChat}
        />
      </div>

    </div>
  );
};

export default Home;