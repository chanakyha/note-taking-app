import React, { createContext, useContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase";
import toast from "react-hot-toast";
const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const googleProvider = new GoogleAuthProvider();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
    });
  }, []);

  const onSignin = () => {
    signInWithPopup(auth, googleProvider)
      .then(() => {
        toast.success("Logged in Successfully");
      })
      .catch(console.warn);
  };

  const onSignout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logged out successfully");
      })
      .catch(() => {
        toast.error("Error logging out");
      });
  };

  return (
    <AuthContext.Provider value={{ user, onSignin, onSignout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export function useAuth() {
  return useContext(AuthContext);
}
