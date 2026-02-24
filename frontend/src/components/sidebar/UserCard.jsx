import React from "react";

const UserCard = ({ setSelectedChat,selectedChat }) => {
  const handleSelectedChat = (selectedUser) => {
    setSelectedChat(selectedUser)
  }
  return (
    <>
      <div onClick={() => handleSelectedChat(1)} className={`p-2 ${selectedChat === 1 && "bg-white/20"} cursor-pointer  hover:bg-white/20 duration-200 rounded-md flex items-center gap-2`}>
        <img
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="h-12 w-12 rounded-full"
          alt="profile"
        />
        <div>
          <h3 className="font-medium text-base text-gray-300">My Name</h3>
          <p className="text-sm font-medium text-gray-400">
            Me : Hello how are you !
          </p>
        </div>
      </div>
      <div onClick={() => handleSelectedChat(2)}  className={`p-2 ${selectedChat === 2 && "bg-white/20"} cursor-pointer  hover:bg-white/20 duration-200 rounded-md flex items-center gap-2`}>
        <img
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="h-12 w-12 rounded-full"
          alt="profile"
        />
        <div>
          <h3 className="font-medium text-base text-gray-300">My Name</h3>
          <p className="text-sm font-medium text-gray-400">
            Me : Hello how are you !
          </p>
        </div>
      </div>
    </>
  );
};

export default UserCard;
