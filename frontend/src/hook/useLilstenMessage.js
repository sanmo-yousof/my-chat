
import useSocket from './useSocket'
import useConversation from '../zustand/useConversation'
import { useEffect } from 'react';
import notificationSound from "../assets/sounds/message.mp3"

const useLilstenMessage = () => {
    const {socket} = useSocket();
    const {messages,setMessages} = useConversation();

    useEffect(() => {
        socket?.on("newMessage",(newMessage) => {
            setMessages([...messages,newMessage])
            const sound = new Audio(notificationSound);
            sound.play()
        })

        return () => socket?.off("newMessage")
    },[socket,messages,setMessages])

};

export default useLilstenMessage
