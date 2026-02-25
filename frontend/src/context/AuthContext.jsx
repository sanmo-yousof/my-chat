import React, { Children, createContext, useEffect, useState } from "react";
import api from "../lib/axios";

export const AuthContext = createContext(null);

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        setLoading(true);
        const res = await api.get("/auth/me");
        setUser(res.data);
      } catch (error) {
        setUser(null);
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCurrentUser();
  }, []);

  const value = {
    user,
    setUser,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
