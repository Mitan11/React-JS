import React, { createContext, useState, useEffect } from "react";

import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { auth, provider } from "../config/firebase";
import toast from "react-hot-toast";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({});

  // Google Authentication
  function GoogleAuth() {
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res.user);
        localStorage.setItem("user", JSON.stringify(res.user));
        setUserData(res.user);
        toast.success("Login successful");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Login fail");
      });
  }

  // Login with email and password
  function handleLogin(email, password) {
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res);
        localStorage.setItem("user", JSON.stringify(res.user));
        setUserData(res.user);
        toast.success("Login successful");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Login fail email or password is incorrect");
      });
  }

  // Sign up with email and password
  const handleSignUp = (email, password, name) => {
    const auth = getAuth(); // Get the Firebase authentication instance

    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log("User created and display name set");
        localStorage.setItem("user", JSON.stringify(res.user));
        setUserData(res.user);
        toast.success("User created successfully");
      })
      .catch((error) => {
        console.log(error);
        toast.error("This account is already in use");
      });
  };
  useEffect(() => {
    const user = localStorage.getItem("user");
    setUserData(user ? JSON.parse(user) : null);
  }, [setUserData]);

  return (
    <AuthContext.Provider
      value={{ setUserData, userData, GoogleAuth, handleLogin, handleSignUp }}
    >
      {children}
    </AuthContext.Provider>
  );
};
