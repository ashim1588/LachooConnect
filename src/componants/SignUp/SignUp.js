import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";
import "./SignUp.css";
import classes from "../../Login.module.css";

const SignUp = ({ history }) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    year: "",
    branch: "",
    location: "",
    linkedIn: "",
    description: "",
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  const { user, createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const year = form.year.value;
    const branch = form.branch.value;
    const location = form.location.value;
    const linkedIn = form.linkedIn.value;
    const description = form.description.value;

    if (
      name.trim() == "" ||
      email.trim() == "" ||
      password.trim() == "" ||
      year.trim() == "" ||
      branch.trim() == "" ||
      location.trim() == "" ||
      linkedIn.trim() == "" ||
      description.trim() == ""
    ) {
      return alert("Please fill out the details correctly");
    }

    createUser(
      email,
      password,
      name,
      year,
      branch,
      location,
      linkedIn,
      description
    )
      .then((result) => {
        const user = result.user;
        navigate("/home");
      })

      .catch((error) => {
        alert(error);
      })
      .then(() => {
        const { name, email, year, branch, location, linkedIn, description } =
          userData;
        const res = fetch(
          "your realtime database url here",
          {
            method: "POST",
            Headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({
              name,
              email,
              year,
              branch,
              location,
              linkedIn,
              description,
            }),
          }
        );
        if (res) {
          alert("Successfull");
        } else alert("please fill the form correctly");
      });
  };

  return (
    <div className="loginform">
      <NavLink
        to="/"
        className="fa fa-arrow-left"
        style={{ color: "black", margin: "30px", textDecoration: "none" }}
      ></NavLink>
      <div>
        <h1 className="headerTitle">Sign Up</h1>
      </div>
      <form onSubmit={handleSubmit} method="POST">
        <div className={classes.row}>
          <label>Name</label>
          <input
            name="name"
            type="text"
            placeholder="Enter your Name"
            value={userData.name}
            onChange={postUserData}
            aria-invalid="true"
            required
          />
        </div>
        <br />
        <div className={classes.row}>
          <label>Email</label>
          <input
            name="email"
            type="email"
            placeholder="Enter your Email"
            value={userData.email}
            onChange={postUserData}
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
        <div className={classes.row}>
          <label>Batch Year</label>
          <input
            name="year"
            type="number"
            min={2010}
            max={2022}
            maxLength={4}
            placeholder="Enter your Batch Year(2010-2022)"
            value={userData.year}
            onChange={postUserData}
            required
          />
        </div>
        <div className={classes.row}>
          <label>Branch</label>
          <input
            name="branch"
            type="text"
            placeholder="Enter your Branch Name"
            value={userData.branch}
            onChange={postUserData}
            required
          />
        </div>
        <div className={classes.row}>
          <label>Location</label>
          <input
            name="location"
            type="text"
            placeholder="Enter your City"
            value={userData.location}
            onChange={postUserData}
            required
          />
        </div>
        <div className={classes.row}>
          <label>Linked In</label>
          <input
            name="linkedIn"
            type="text"
            placeholder="Enter your LinkedIn URL"
            value={userData.linkedIn}
            onChange={postUserData}
            required
          />
        </div>
        <div className={classes.row}>
          <label>Description</label>
          <textarea
            rows="5"
            cols="50"
            name="description"
            placeholder="Enter Description"
            maxLength={200}
            value={userData.description}
            onChange={postUserData}
            required
          />
        </div>
        <br />
        <div id="button" class="row" style={{ marginLeft: "1px" }}>
          <button type="submit" value="SignupPage">
            Sign Up
          </button>
          <br />
          <div style={{ margin: "auto" }}>
            Already have an account? <Link to="/login">Login</Link> now.
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
