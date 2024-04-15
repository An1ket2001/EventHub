import React, { useContext, useEffect, useState } from "react";
import "../../design/Profile.css";
import { AuthContext } from "../../shared/AuthContext";

const Profile = () => {
  const auth = useContext(AuthContext);
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    if (auth.token !== "") {
      const fetchUserData = async () => {
        const res = await fetch("http://localhost:5000/api/auth/getUser", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        });
        const data = await res.json();
        setUserData(data[0]);
      };
      fetchUserData();
    } else {
      auth.login();
    }
  }, [auth.token]);

  return (
    <div className="profile-page">
      <div className="profile-header">
        <img
          src="https://th.bing.com/th?id=OIP.Wytlw5AmN2HoCJ_kLGF1EgHaF7&w=279&h=223&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
          alt="Profile"
          className="profile-picture"
        />
        <h1 className="profile-name">{userData.name}</h1>
        <p className="profile-bio">{userData.desg&&userData.desg[0].designation}</p>
      </div>
      <div className="profile-content">
        <h2>Email-Id</h2>
        <p>{userData.email}</p>
      </div>
    </div>
  );
};

export default Profile;
