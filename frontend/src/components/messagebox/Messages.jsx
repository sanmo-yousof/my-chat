import React, { useEffect, useRef } from "react";
import Message from "./Message";
import useGetMessages from "../../hook/useGetMessages";
import useConversation from "../../zustand/useConversation";
import useSocket from "../../hook/useSocket";
import useLilstenMessage from "../../hook/useLilstenMessage";

const Messages = () => {
  const { messages, loading } = useGetMessages();
  const { selectedConversation } = useConversation();
  const lastMessageRef = useRef();
  useLilstenMessage()

  const { onlineUsers } = useSocket();
  const isOnline = onlineUsers.includes(selectedConversation?._id);

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <div className="flex-1 hover-scrollbar  overflow-y-auto px-4 py-4 min-h-0">
      {loading && (
        <div className="flex h-full justify-center w-full">
          <span className="loading text-white loading-spinner loading-xs"></span>
        </div>
      )}
      {!loading && messages.length === 0 && (
        <div className="flex flex-col h-full justify-center items-center w-full">
          <div className="flex flex-col items-center mb-6 md:mb-8">
            {/* <img
              src={
                selectedConversation?.profilePic || "/profilePlaceholder.png"
              }
              className="md:h-16 md:w-16 w-12 h-12 rounded-full"
              alt={selectedConversation?.fullName || "profile"}
            /> */}
            <div className={`avatar ${isOnline ? "avatar-online" : ""}`}>
              <div className="h-12 w-12 rounded-full">
                <img
                  src={
                    selectedConversation?.profilePic ||
                    "/profilePlaceholder.png"
                  }
                  alt={selectedConversation?.fullName || "profile"}
                />
              </div>
            </div>

            <h2 className="text-xl font-medium md:text-2xl text-white">
              {selectedConversation?.fullName}
            </h2>
          </div>
          <p className=" text-white text-sm md:text-base ">
            Send a message to start the conversation
          </p>
        </div>
      )}

      <div className="space-y-4">
        {!loading && messages.length > 0 && (
          <div className="flex flex-col items-center mb-8">
            {/* <img
              src={
                selectedConversation?.profilePic || "/profilePlaceholder.png"
              }
              className="md:h-16 md:w-16 w-12 h-12 rounded-full"
              alt={selectedConversation?.fullName || "profile"}
            /> */}

            <div className={`avatar ${isOnline ? "avatar-online" : ""}`}>
              <div className="h-12 w-12 border border-gray-100 rounded-full">
                <img
                  src={
                    selectedConversation?.profilePic ||
                    "/profilePlaceholder.png"
                  }
                  alt={selectedConversation?.fullName || "profile"}
                />
              </div>
            </div>
            <h2 className="text-xl font-medium md:text-2xl text-white">
              {selectedConversation?.fullName}
            </h2>
          </div>
        )}

        {!loading &&
          messages.length > 0 &&
          messages.map((message) => (
            <div key={message._id} ref={lastMessageRef}>
              <Message message={message} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Messages;
