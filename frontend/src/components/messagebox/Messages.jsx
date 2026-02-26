import React from "react";
import Message from "./Message";
import useGetMessages from "../../hook/useGetMessages";

const Messages = () => {
  const { messages, loading } = useGetMessages();

  return (
    <div className="flex-1 hover-scrollbar  overflow-y-auto px-4 py-4 min-h-0">
      {loading && (
        <div className="flex h-full justify-center w-full">
          <span className="loading text-white loading-spinner loading-xs"></span>
        </div>
      )}
      {!loading && messages.length === 0 && (
        <div className="flex h-full justify-center items-center w-full">
          <p className=" text-white ">
            Send a message to start the conversation
          </p>
        </div>
      )}

      
      <div className="space-y-4">
        
        {!loading && messages.length > 0 && messages.map((message) => <Message message={message} key={message._id} />)}
      </div>
    </div>
  );
};

export default Messages;
