import React from "react";
import useConversation from "../../zustand/useConversation";
import useSocket from "../../hook/useSocket";

const UserCard = ({ user, lastIndx }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { onlineUsers } = useSocket();
  const isOnline = onlineUsers.includes(user?._id);

  

  return (
    <>
      <div
        onClick={() => setSelectedConversation(user)}
        className={`p-2 ${selectedConversation?._id === user?._id && "bg-white/20"} cursor-pointer  hover:bg-white/20 duration-200  flex items-center gap-2`}
      >
        <div className={`avatar ${isOnline ? "avatar-online" : ""}`}>
          <div className="h-12 w-12 border border-gray-100 rounded-full">
            <img
              src={user?.profilePic || "/profilePlaceholder.png"}
              alt={user?.fullName || "profile"}
            />
          </div>
        </div>

        

        <div>
          <h3 className="font-medium text-base text-gray-300">
            {" "}
            {user?.fullName?.length > 18
              ? `${user.fullName.slice(0, 18)}...`
              : user.fullName}
          </h3>
          {/* <p className="text-sm font-medium text-gray-500">
            Me : <span className="text-gray-400"></span>
          </p> */}
        </div>
      </div>
      {!lastIndx && <div className="border-t border-white/20 " />}
    </>
  );
};

export default UserCard;
