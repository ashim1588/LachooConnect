import React, { useState } from "react";
import "./MessageSender.css";

// icons
import { Avatar } from "@material-ui/core";

// context api

// database
const MessageSender = (props) => {
  const currUserDetails = props.userProfile[0];
  const [userData, setUserData] = useState({
    caption: "",
    imageUrl: "",
    name: "",
  });

  let name, caption, value, imageUrl;
  const postUserData = (event) => {
    caption = event.target.name;
    imageUrl = event.target.name;
    value = event.target.value;
    setUserData({
      ...userData,
      name: props.userProfile[0].name,
      [caption]: [value],
      [imageUrl]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const name = userData.name;
    const caption = userData.caption;
    const imageUrl = userData.imageUrl;

    if (caption.trim() == "" || imageUrl.trim() == "") {
      return alert("Please Fill all the details");
    }

    const res = await fetch(
      "your realtime database url here",
      {
        method: "POST",
        Headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          imageUrl,
          caption,
        }),
      }
    );
    if (res) {
      alert("Successfull");
      props.fetchFeedData();
    } else alert("please fill the form correctly");
  };

  return (
    <>
      <div className="message-width">
        <div className="messageSender">
          <div className="messageSenderTop">
            <Avatar
              src={
                "https://images.unsplash.com/photo-1533450718592-29d45635f0a9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8anBnfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              }
            />
            <form onSubmit={handleSubmit}>
              <input
                name="caption"
                className="messageSenderInput"
                placeholder={"What's on your mind"}
                type="text"
                value={userData.caption}
                onChange={postUserData}
                required
              />
              <input
                name="imageUrl"
                placeholder={"Image URL"}
                type="text"
                value={userData.imageUrl}
                onChange={postUserData}
                required
              />
            </form>
          </div>

          <div className="messageSenderBottom">
            <div className="messageSenderOption">
              <button
                class="btn btn-warning pull-right"
                onClick={handleSubmit}
                type="submit"
              >
                Post
              </button>
            </div>
          </div>
        </div>{" "}
      </div>
    </>
  );
};

export default MessageSender;
