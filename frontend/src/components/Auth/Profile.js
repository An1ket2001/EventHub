import React, { useContext, useEffect, useState } from "react";
import styles from "../../design/Profile.module.css";
import { AuthContext } from "../../shared/AuthContext";
import Subsevent from "../Events/Subsevent";

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
    <>
    <div className={styles.profilepage}>
      <div className={styles.profileheader}>
        <img
          src="https://th.bing.com/th?id=OIP.Wytlw5AmN2HoCJ_kLGF1EgHaF7&w=279&h=223&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
          alt="Profile"
          className={styles.profilepicture}
        />
        <h1 className={styles.profilename}>{userData.name}</h1>
        <p className={styles.profilebio}>{userData.desg&&userData.desg[0].designation}</p>
      </div>
      <div className={styles.profilecontent}>
        <h2>Email-Id</h2>
        <p>{userData.email}</p>
      </div>
    </div>
    <Subsevent />
    </>
  );
};

export default Profile;
