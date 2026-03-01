import { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";
import api from "../lib/axios";
import toast from "react-hot-toast";

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      try {
        const res = await api.get(`/message/${selectedConversation?._id}`);
        console.log(res.data);
        setMessages(res.data)
      } catch (error) {
        toast.error(
          error.response?.data?.error || error.message || "message not sent",
        );
      } finally {
        setLoading(false);
      }
    };
    if(selectedConversation?._id) getMessages()
  }, [selectedConversation?._id]);

  return {messages,loading}
};

export default useGetMessages;
