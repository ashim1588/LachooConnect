import React, { useEffect } from "react";
import Data from "../API/AlumniDataAPI";
import { useState } from "react";
import "./Find.css";
import { NavLink } from "react-router-dom";

const Find = () => {
  const [userData, setUserData] = useState([]);
  const [find, setFind] = useState({
    name: "",
    byYear: "",
    location: "",
    branch: "",
  });
  const [findName, setFindName] = useState("");
  const [findYear, setFindYear] = useState("");
  const [findLocation, setFindLocation] = useState("");
  const [findBranch, setFindBranch] = useState("");

  const fetchUserData = async () => {
    try {
      const res = await fetch(
        "your realtime database url here"
      );
      if (!res.ok) {
        throw new Error("Oops! Error in fetching User details");
      }
      const allDataList = await res.json();
      if (!allDataList) {
        throw new Error("Can't fetch user now.");
      }
      const transformedData = [];
      for (const key in allDataList) {
        transformedData.push({
          id: key,
          name: allDataList[key].name,
          year: allDataList[key].year,
          location: allDataList[key].location,
          email: allDataList[key].email,
          branch: allDataList[key].branch,
          linkedIn: allDataList[key].linkedIn,
          description: allDataList[key].description,
        });
      }
      setUserData(transformedData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserData();
    console.log(userData);
  }, []);

  const searchForName = (e) => {
    const data = e.target.value;
    setFindName(data);
  };
  const searchForYear = (e) => {
    const data = e.target.value;
    setFindYear(data);
  };
  const searchForLocation = (e) => {
    const data = e.target.value;
    setFindLocation(data);
  };
  const searchForBranch = (e) => {
    const data = e.target.value;
    setFindBranch(data);
  };
  const clear = (e) => {
    e.preventDefault();
    setFindName("");
    setFindYear("");
    setFindLocation("");
    setFindBranch("");
    setFind({
      name: "",
      byYear: "",
      location: "",
      branch: "",
    });
  };
  const findAlumni = (e) => {
    e.preventDefault();
    const nv = {
      name: findName,
      byYear: findYear,
      location: findLocation,
      branch: findBranch,
    };
    setFind(nv);
  };
  const fBY = userData.filter((alumni) => {
    return (
      (find.name == "" ? true : find.name == alumni.name) &&
      (find.byYear == "" ? true : find.byYear == Number(alumni.year)) &&
      (find.location == "" ? true : find.location == alumni.location) &&
      (find.branch == "" ? true : find.branch == alumni.branch)
    );
  });
  // console.log(fBY);
  return (
    <>
      {userData.map((pos) => {})}
      <div className="search-box">
        <input
          className="input-1 inputs"
          onChange={searchForName}
          value={findName}
          type="text"
          // name="name"
          placeholder="Search By Name"
        />
        <input
          className="input-2 inputs"
          onChange={searchForYear}
          type="text"
          value={findYear}
          // name="byYear"
          placeholder="Search By Year"
        />
        <input
          className="input-3 inputs"
          onChange={searchForBranch}
          type="text"
          value={findBranch}
          // name="branch"
          placeholder="Search By Branch"
        />
        <input
          className="input-4 inputs"
          onChange={searchForLocation}
          type="text"
          value={findLocation}
          // name="location"
          placeholder="Search By Location"
        />

        <button className="inputs" onClick={findAlumni}>
          Search
        </button>
        <button className="inputs" onClick={clear}>
          Clear Filter
        </button>
      </div>
      <div className="find-container">
        {fBY.map((alumni) => {
          return (
            <div className="card" key={alumni._id}>
              <div className="header">
                <div className="card-img">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrLhtroGLrF-k4CYcar851Yo3uaAk3Xu-EKKZatL8d1e_2kZNx5yv4iw3Npu7EdpJ0PqU&usqp=CAU"
                    alt="img"
                  />
                </div>
                <div className="position">
                  <p>
                    <h4>{alumni.name}</h4>
                  </p>
                  <p>
                    <h6>{alumni.branch}</h6>
                  </p>
                </div>
              </div>

              <div className="card-info">
                <p>{`Hi, I am ${alumni.name.split(" ")[0]}. I am from ${
                  alumni.branch
                } and My batch year was ${
                  alumni.year
                } Batch. I am currently located in ${alumni.location}.`}</p>
                <NavLink
                  to={alumni.linkedIn}
                  className="fa fa-linkedin-square"
                  style={{
                    color: "#0A66C2",
                    margin: "30px",
                    fontSize: "2rem",
                    textDecoration: "none",
                  }}
                ></NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Find;
