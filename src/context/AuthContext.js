"use client";
import firebaseAuth from "@/fb/fb.config";
import { onAuthStateChanged } from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";

const LayerContext = createContext(null);

export const Context = () => useContext(LayerContext);
const AuthContext = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  });

  const authInfo = {
    user,
    loading,
  };
  return (
    <LayerContext.Provider value={authInfo}>{children}</LayerContext.Provider>
  );
};

export default AuthContext;
