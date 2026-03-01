import React from "react";
import useAuth from "../../hook/useAuth";
import useConversation from "../../zustand/useConversation";
import { formatMessageDate } from "../../helper/formatMessageDate";
import useSocket from "../../hook/useSocket";

const Message = ({ message }) => {
  const { user } = useAuth();
  const { selectedConversation } = useConversation();

  const fromMe = message.senderId === user._id;

  const { onlineUsers } = useSocket();
  const isOnline = onlineUsers.includes(selectedConversation?._id);

  return (
    <>
      <div className={`chat ${fromMe ? "chat-end" : "chat-start"} `}>
        {!fromMe && (
          <div className="chat-image avatar">
            
              
              <div className={`avatar ${isOnline ? "avatar-online" : ""}`}>
              <div className="h-10 w-10 border border-gray-100 rounded-full">
                <img
                  src={
                    selectedConversation?.profilePic ||
                    "/profilePlaceholder.png"
                  }
                  alt={selectedConversation?.fullName || "profile"}
                />
              </div>
            
            </div>
          </div>
        )}

        <div className="chat-bubble bg-white/70 max-w-xl">
          {message.message}
        </div>
        <div className="chat-footer flex gap-2 text-white opacity-50"> <span>sent</span>  <span>{formatMessageDate(message?.createdAt)}</span></div>
        
      </div>

      {/* <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
        </div>
        <div className="chat-bubble bg-emerald-100 max-w-xl">
          It was said that you would, destroy the Sith, not join them.
          It was said that you would, destroy the Sith, not join them.
          It was said that you would, destroy the Sith, not join them.
          It was said that you would, destroy the Sith, not join them.
        </div>
      </div> */}
    </>
  );
};

export default Message;
