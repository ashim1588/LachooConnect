import { Link, useNavigate } from "react-router-dom";
import "./Navigation.module.css";
import classes from "./Navigation.module.css";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/UserContext";

const MainNavigation = () => {
  const authContext = useContext(AuthContext);
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const logoutHandler = () => {
    authContext.logOut();
    navigate("/login");
  };


  return (
    <>
      <header className={classes.header}>
        {user?.email ? (
          <></>
        ) : (
          <Link to="/">
            <div className={classes.logo}>Alumni Page</div>
          </Link>
        )}
        <nav>
          <ul>
            <li>
              {user?.email && (
                <span style={{ fontSize: "20px " }}>Welcome, {user.email}</span>
              )}
            </li>
            <li>
              {user?.email ? (
                <button
                  style={{ float: "right" }}
                  onClick={logoutHandler}
                  className="btn btn-sm"
                >
                  Log Out
                </button>
              ) : (
                <Link to="/login">
                  <button className="btn btn-sm">Login</button>
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainNavigation;
