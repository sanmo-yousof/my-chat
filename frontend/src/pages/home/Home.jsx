import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/messagebox/MessageContainer";

import useConversation from "../../zustand/useConversation";

const Home = () => {
  const { selectedConversation } = useConversation();
  return (
    <div className="flex gap-6 w-full h-screen overflow-hidden py-4">
      {/* Sidebar */}
      <div
        className={`
        ${selectedConversation ? "hidden" : "flex"}
        lg:flex w-full lg:w-[20%] 
      `}
      >
        <Sidebar />
      </div>

      {/* Chatbox */}
      <div
        className={`
        ${selectedConversation ? "flex" : "hidden"}
        lg:flex w-full lg:w-[80%] 
      `}
      >
        <MessageContainer />
      </div>
    </div>
  );
};

export default Home;
