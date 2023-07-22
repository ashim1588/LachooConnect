import React from "react";
import "./Feed.css";

const Feed = (prop) => {
  return (
    <>
      <div className="feed">
        <div className="profile-info">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrLhtroGLrF-k4CYcar851Yo3uaAk3Xu-EKKZatL8d1e_2kZNx5yv4iw3Npu7EdpJ0PqU&usqp=CAU"
            alt="Profile img"
          />
          <h4>{prop.userName}</h4>
        </div>
        <div className="post">{prop.img ? <img src={prop.img} /> : ""}</div>
        <div className="caption">
          {/* <h4 >Caption</h4> */}
          <p>{prop.caption}</p>
        </div>
      </div>
    </>
  );
};

export default Feed;
