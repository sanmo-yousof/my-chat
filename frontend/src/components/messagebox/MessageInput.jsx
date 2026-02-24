import React from "react";
import { HiPaperAirplane } from "react-icons/hi2";

const MessageInput = () => {
  return (
    <div className="p-4 lg:p-6">
      <div className="relative w-full flex items-center">
        {/* Input */}
        <input
          type="text"
          placeholder="Type a message"
          className="w-full pr-12 input input-bordered lg:h-12 h-10 rounded-full
            bg-white/20 text-white placeholder:text-gray-300
            border border-white/20
            focus:border-gray-200 focus:outline-none focus:ring-0"
        />

        {/* Send Button */}
        <button
          type="button"
          className="absolute right-1 flex items-center cursor-pointer justify-center
            lg:h-10 h-8 w-8 lg:w-10 rounded-full
            text-white text-2xl
            hover:bg-white/20 active:scale-95 transition"
        >
          <HiPaperAirplane />
        </button>
      </div>
    </div>
  );
};

export default MessageInput;