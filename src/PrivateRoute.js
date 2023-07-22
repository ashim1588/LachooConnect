import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/UserContext";
import { FaSpinner } from "react-icons/fa";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <>
        <div className="contspin">
          <FaSpinner icon="spinner" className="spinner" />
        </div>
      </>
    );
  }
  if (user && user.uid) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
