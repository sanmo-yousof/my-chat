import React, { useState } from "react";
import toast from "react-hot-toast";
import api from "../lib/axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const {setUser} = useAuth();
  const navigate = useNavigate();
  const signUp = async ({
    fullName,
    userName,
    password,
    confirmPassword,
    gender,
  }) => {
    const isFillAllvalue = handleInputErrors({
      fullName,
      userName,
      password,
      confirmPassword,
      gender,
    });
    if (!isFillAllvalue) return;

    try {
      setLoading(true);
      const res = await api.post("/auth/sign-up", {
        fullName,
        userName,
        password,
        confirmPassword,
        gender,
      });

      const userRes = await api.get("/auth/me");
      setUser(userRes.data);

      console.log(userRes.data)

      toast.success("Login Success!");
      console.log(res.data);
      navigate("/")
      
    } catch (error) {
      toast.error(error.response?.data?.error || "Something went wrong");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return { loading, signUp };
};

export default useSignup;

// input validation
const handleInputErrors = ({
  fullName,
  userName,
  password,
  confirmPassword,
  gender,
}) => {
  if (!fullName || !userName || !password || !confirmPassword || !gender) {
    toast.error("All fill is required!");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Password do not match!");
    return false;
  }

  if (password.length < 6) {
    toast.error("Please must be at least 6 characters!");
    return false;
  }

  return true;
};
