import React, { useContext, useState } from "react";
import "./User.css";
import { useEffect } from "react";

import { AuthContext } from "../../context/UserContext";

// import EditProjile from "./EditProjile";

const User = (prop) => {
  const [userData, setUserData] = useState([]);

  const { user } = useContext(AuthContext);



  // if (user.email == userData[0].email) {
  // }

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
          linkedin: allDataList[key].linkedIn,
          branch: allDataList[key].branch,
          description: allDataList[key].description
        });
      }
      setUserData(transformedData);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const currentUser = userData.filter(usr =>
    usr.email === user.email   
    )


  return (
    <div>
      <>
        {currentUser.map((pos) => {
          return (
            <div className="maincontainer">
              <div class="container">
                <div class="profile-page tx-13">
                  <div class="row">
                    <div class="col-12 grid-margin">
                      <div class="profile-header">
                        <div class="cover">
                          <div class="gray-shade"></div>

                          <div class="cover-body d-flex justify-content-between align-items-center">
                            <div>
                              <img
                                class="profile-pic"
                                src="https://images.unsplash.com/photo-1533450718592-29d45635f0a9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8anBnfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                alt="profile"
                              />
                              <span class="profile-name">{pos.name}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row profile-body">
                    <div class="d-none d-md-block col-md-4 col-xl-3 left-wrapper">
                      <div class="card rounded">
                        <div class="card-body">
                          <div class="d-flex align-items-center justify-content-between mb-2">
                            <h6 class="card-title mb-0">About</h6>
                          </div>
                          <p>Hi! I'm {pos.name}</p>
                          <div class="mt-3">
                            <label class="tx-11 font-weight-bold mb-0 text-uppercase">
                              Batch:
                            </label>
                            <p class="text-muted">{pos.year}</p>
                          </div>
                          <div class="mt-3">
                            <label class="tx-11 font-weight-bold mb-0 text-uppercase">
                              Lives:
                            </label>
                            <p class="text-muted">{pos.location}</p>
                          </div>
                          <div class="mt-3">
                            <label class="tx-11 font-weight-bold mb-0 text-uppercase">
                              Email:
                            </label>
                            <p class="text-muted">{pos.email}</p>
                          </div>
                          <div class="mt-3">
                            <label class="tx-11 font-weight-bold mb-0 text-uppercase">
                              Branch
                            </label>
                            <p class="text-muted">{pos.branch}</p>
                          </div>
                          <div class="mt-3">
                            <label class="tx-11 font-weight-bold mb-0 text-uppercase">
                              Description
                            </label>
                            <p class="text-muted">{pos.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </>
    </div>
  );
};

export default User;