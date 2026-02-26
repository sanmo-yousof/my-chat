import React from "react";
import UserCard from "./UserCard";
import useConversation from "../../hook/useConversations";

const Conversation = () => {
  const { loading, conversation } = useConversation();
  console.log(conversation);

  

  return (
    <div className="border-white/40 h-full py-6 overflow-auto hover-scrollbar border-y">
      {/* <UserCard setSelectedChat = { setSelectedChat } selectedChat={selectedChat}/> */}

      {loading ? (
        <div className="flex justify-center items-center h-full">
          <span className="loading loading-spinner text-white loading-sm"></span>
        </div>
      ) : (
        conversation?.map((user,indx) => (
          <UserCard
            key={user._id}
            user={user}
            lastIndx={indx === conversation.length - 1}
          />
        ))
      )}
    </div>
  );
};

export default Conversation;
