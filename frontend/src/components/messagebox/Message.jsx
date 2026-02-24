import React from "react";

const Message = () => {
  return (
    <>
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
        </div>
        <div className="chat-bubble bg-white/70 max-w-xl">
          It was said that you would, destroy the Sith, not join them.
          It was said that you would, destroy the Sith, not join them.
          It was said that you would, destroy the Sith, not join them.
        </div>
      </div>

      <div className="chat chat-end">
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
      </div>
    </>
  );
};

export default Message;