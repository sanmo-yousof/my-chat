import { useState } from "react";
import useConversation from "../zustand/useConversation";
import api from "../lib/axios";
import toast from "react-hot-toast";


const useSendMessage = () => {
    const [loading,setLoading] = useState(false);
    const {messages,setMessages,selectedConversation} = useConversation();

    const sendMessage = async (message) => {
        setLoading(true);
        try {
            const res = await api.post(`/message/send/${selectedConversation._id}`,{message});
            setMessages([...messages,res.data]);
            console.log(res.data);
            
        } catch (error) {
            toast.error(error.response?.data?.error || error.message || "message not sent");
            
        }finally{
            setLoading(false)
        }
    };

    return {loading, sendMessage}

};

export default useSendMessage;