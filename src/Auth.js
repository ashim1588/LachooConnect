import React, { useEffect, useState } from "react";
import app from "./base.js";
import { FaSpinner } from "react-icons/fa";

import "./Auth.css";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      setPending(false);
    });
  }, []);

  if (pending) {
    return (
      <>
        <div className="contspin">
          <FaSpinner icon="spinner" className="spinner" />
        </div>
      </>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
