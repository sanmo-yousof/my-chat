import React from 'react'
import UserCard from './UserCard'

const Conversation = ({ setSelectedChat,selectedChat }) => {
  return (
    <div className='border-white/40 h-full py-6 overflow-auto hover-scrollbar border-y'>
         <UserCard setSelectedChat = { setSelectedChat } selectedChat={selectedChat}/>
    </div>
  )
}

export default Conversation
