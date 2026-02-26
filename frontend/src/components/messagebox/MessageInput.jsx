import React, { useState } from "react";
import { HiPaperAirplane } from "react-icons/hi2";
import useSendMessage from "../../hook/useSendMessage";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();

  const handleSendMessage = async(e) => {
    e.preventDefault();
    if (!message.trim() || loading) return;

    await sendMessage(message);
    setMessage("");
  };

  const isDisabled = loading || !message.trim();
  return (
    <div className="p-4 lg:p-6">
      <form
        onSubmit={handleSendMessage}
        className="relative w-full flex items-center"
      >
        {/* Input */}
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
          disabled={loading}
          className="w-full pr-12 input input-bordered lg:h-12 h-10 rounded-full
            bg-white/20 text-white placeholder:text-gray-300
            border border-white/20
            focus:border-gray-200 focus:outline-none focus:ring-0
            disabled:opacity-50 disabled:cursor-not-allowed"
        />

        {/* Send Button */}
        <button
          type="submit"
          disabled={isDisabled}
          className={`absolute right-1 flex items-center  justify-center
            lg:h-10 h-8 w-8 lg:w-10 rounded-full
            text-white text-2xl
            hover:bg-white/20 active:scale-95 transition
            ${isDisabled ? "opacity-50 cursor-not-allowed hover:bg-transparent" : "cursor-pointer"}`}
        >
          {loading ? (
            <span className="loading text-white loading-spinner loading-xs"></span>
          ) : (
            <HiPaperAirplane />
          )}
        </button>
      </form>
    </div>
  );
};

export default MessageInput;
