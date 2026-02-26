import { useState } from "react";
import toast from "react-hot-toast";
import api from "../lib/axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const login = async ({ userName, password }) => {
    const success = loginValidation(userName, password);
    if (!success) return;
    setLoading(true);
    try {
      const res = await api.post("/auth/login", { userName, password });
      console.log(res.data);

      // set user to context
      const userRes = await api.get("/auth/me");
      console.log(userRes.data);
      setUser(userRes.data);

      toast.success("Login Success!");
      navigate("/message", { replace: true });
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.error || error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
};

export default useLogin;

const loginValidation = (userName, password) => {
  if (!userName || !password) {
    toast.error("All fill is required!");
    return false;
  }

  return true;
};
