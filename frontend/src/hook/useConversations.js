import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import api from "../lib/axios";

const useConversation = () => {
  const [loading, setLoading] = useState(false);
  const [conversation, setConversation] = useState([]);

  useEffect(() => {
    const fetchConversations = async () => {
      setLoading(true);
      try {
        const res = await api.get("/users");
        console.log(res.data);
        setConversation(res.data);
      } catch (error) {
        toast.error(error.response?.data?.error || error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchConversations();
  }, []);

  return { loading, conversation };
};

export default useConversation;
