import React, { useContext, useEffect, useState } from "react";
import styles from "../../design/ReadMore.module.css";
import { AuthContext } from "../../shared/AuthContext";
const ReadMore = () => {
  const auth = useContext(AuthContext);
  const [eventData, setEventData] = useState({});

  useEffect(() => {
    if (auth.token !== "") {
      const path = window.location;
      const eventId = path.pathname.split("/")[2];
      const getEventDetails = async () => {
        const res = await fetch(
          `http://localhost:5000/api/events/getspecificevent/${eventId}`,
          {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
          }
        );
        const data = await res.json();
        console.log(data);
        setEventData(data[0]);
      };
      getEventDetails();
    } else {
      auth.login();
    }
  }, [auth.token]);

  return (
    <div className={styles.eventdescriptionpage}>
      <div className={styles.eventimage}>
        <img
          src={`http://localhost:5000/api/events/getEventImage/${eventData.titleImage}`}
          alt="Event"
        />
      </div>
      <div className={styles.eventdetails}>
        <h1>{eventData.title}</h1>
        <p>Date: {eventData.date}</p>
        <p>Location: {eventData.loactio && eventData.locatio[0].location}</p>
        <p>Description: {eventData.description}</p>
      </div>
    </div>
  );
};

export default ReadMore;
