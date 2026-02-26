import { useState } from "react";
import api from "../lib/axios";
import useAuth from "./useAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useLogOut = () => {
  const [loading, setLoading] = useState(false);
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const logOut = async () => {
    setLoading(true);
    try {
      const res = await api.post("/auth/logout");
      setUser(null);
      toast.success("Logout Success!");
      console.log(res.data);
      navigate("/login")
    } catch (error) {
      toast.error(error.response?.data?.error || "Something went wrong");
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, logOut };
};

export default useLogOut;
