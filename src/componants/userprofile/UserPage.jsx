import React, { useEffect, useState } from "react";
import User from "./User";

function UserPage(prop) {
  const [userData, setUserData] = useState([]);

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
          description: allDataList[key].description,
        });
      }
      setUserData(transformedData);
      console.log("hello");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserData();
    console.log(userData);
  }, [fetchUserData]);

  return (
    <div>
      <>
        {userData.map((pos) => {
          return (
            <User
              name={pos.name}
              year={pos.year}
              location={pos.location}
              email={pos.email}
              branch={pos.branch}
              description={pos.description}
            />
          );
        })}
      </>
    </div>
  );
}

export default UserPage;
