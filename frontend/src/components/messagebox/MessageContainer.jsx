import React, { useEffect } from "react";
import MessageHeader from "./MessageHeader";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { FiMessageSquare } from "react-icons/fi";
import useConversation from "../../zustand/useConversation";

const MessageContainer = () => {
const {selectedConversation,setSelectedConversation} = useConversation();

  //  state null when logout 
  useEffect(() => {
    return () => setSelectedConversation(null);
  },[setSelectedConversation])

  if (!selectedConversation) {
    return (
      <div className="w-full h-full flex flex-col border-white/20 border rounded-2xl bg-white/10 backdrop-blur-sm justify-center items-center text-gray-200">
        <p className="text-xl font-medium mb-4">
          Select a chat to start messaging
        </p>
        <FiMessageSquare size={40} />
      </div>
    );
  }
  
  return (
    <div
      className="w-full h-full border-white/20 border shadow-lg 
          backdrop-blur-sm 
          bg-white/10 flex flex-col rounded-xl overflow-hidden "
    >
      <MessageHeader />
      <Messages />
      <MessageInput />
    </div>
  );
};

export default MessageContainer;