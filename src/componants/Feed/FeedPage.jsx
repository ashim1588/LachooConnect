import React, { useState, useEffect, useContext } from "react";
import feed from "../API/feedData";
import Feed from "./Feed";
import MessageSender from "./Messagesender";
import { AuthContext } from "../../context/UserContext";

const FeedPage = (prop) => {
  const [feedData, setFeedData] = useState([]);
  const [userData, setUserData] = useState([]);

  const { user } = useContext(AuthContext);

  const fetchFeedData = async () => {
    try {
      const res = await fetch(
        "your realtime database url here"
      );
      if (!res.ok) {
        throw new Error("Oops! Error in fetching feed details");
      }
      const allDataList = await res.json();
      if (!allDataList) {
        throw new Error("Can't fetch feed now.");
      }
      const transformedData = [];
      for (const key in allDataList) {
        transformedData.push({
          id: key,
          name: allDataList[key].name,
          imageUrl: allDataList[key].imageUrl,
          caption: allDataList[key].caption,
        });
      }
      setFeedData(transformedData);
    } catch (error) {
      alert(error);
    }
  };

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
          description: allDataList[key].description,
        });
      }
      const currentUser = transformedData.filter(
        (usr) => usr.email === user.email
      );
      setUserData(currentUser);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchFeedData().then(() => {
      fetchUserData();
    });
  }, []);

  const revFeedData = [...feedData].reverse();
  return (
    <>
      <MessageSender userProfile={userData} fetchFeedData={fetchFeedData} />
      {revFeedData.map((pos) => {
        return (
          <Feed userName={pos.name} img={pos.imageUrl} caption={pos.caption} />
        );
      })}
    </>
  );
};

export default FeedPage;
