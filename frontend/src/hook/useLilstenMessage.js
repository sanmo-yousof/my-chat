import useSocket from "./useSocket";
import useConversation from "../zustand/useConversation";
import { useEffect } from "react";
import notificationSoundReceive from "../assets/sounds/sendmessage.mp3";
import notificationSoundSend from "../assets/sounds/getmessage.mp3";
import { useRef } from "react";

const useLilstenMessage = () => {
  const { socket } = useSocket();
  const { messages, setMessages } = useConversation();

  const audioReceive = useRef(null);
  const audioSend = useRef(null);

  useEffect(() => {
    audioReceive.current = new Audio(notificationSoundReceive);
    audioSend.current = new Audio(notificationSoundSend);
  }, []);

  // Listen for incoming messages
  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      setMessages(prev => [...prev, newMessage]);

      // play receive sound
      if (audioReceive.current) {
        audioReceive.current.play().catch(() => {});
      }
    });

    return () => socket?.off("newMessage");
  }, [socket, setMessages]);

  // Function to play send sound
  const playSendSound = () => {
    if (audioSend.current) audioSend.current.play().catch(() => {});
  };

   return { playSendSound };

  
};

export default useLilstenMessage;
