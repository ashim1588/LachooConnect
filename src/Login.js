import React, { useContext } from "react";
import { useNavigate, NavLink, Link } from "react-router-dom";
import { AuthContext } from "./context/UserContext";
import classes from "./Login.module.css";

const Login = () => {
  const { signIn, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email);

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate("/home");
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <>
      <div className="loginform">
        <NavLink
          to="/"
          className="fa fa-arrow-left"
          style={{ color: "black", margin: "30px", textDecoration: "none" }}
        ></NavLink>
        <div>
          <h1 className="headerTitle">Login</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={classes.row}>
            <label>Email</label>
            <input
              name="email"
              type="email"
              placeholder="Enter your Email"
              required
            />
          </div>
          <br />
          <div className={classes.row}>
            <label>Password</label>
            <input
              name="password"
              type="password"
              placeholder="Enter your Password"
              required
            />
          </div>
          <br />
          <div id="button" class="row" style={{ marginLeft: "1px" }}>
            <button type="submit" value="LoginPage">
              Log In
            </button>
            <br />
            <div style={{ margin: "auto" }}>
              Don't have an account? <Link to="/signup">Register</Link> now.
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
