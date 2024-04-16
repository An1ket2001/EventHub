import React from "react";
import styles from "../../design/Eventcard.module.css";
import {useNavigate} from "react-router-dom";

const Eventcard = (props) => {
    const navigate=useNavigate();
    const dateTimeInput=props.dateTime;
    const new_datetime=new Date(dateTimeInput);
    const date=new_datetime.toLocaleDateString();
    const time=new_datetime.toLocaleTimeString(undefined,{hour12:true});
    const handlefunction=async(e)=>{
        await fetch("http://localhost:5000/api/events/subscribeEvent",{
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify()
        }
        );
    }
    const handlereadmore=()=>{
        navigate(`/event/${props.id}`);
    }
    return (

        <div className={styles.card}>
            <img src={`http://localhost:5000/api/events/getEventImage/${props.titleImage}`} alt="Img" className={styles.cardimg} />
            <div className={styles.cardbody}>
                <h2 className={styles.cardtitle}>{props.title}</h2>
                <br />
                <p className={styles.carddescription}>{props.description}</p>
                <h3 className={styles.cardpricing}>{date}</h3>
                <h3 className={styles.cardpricing}>{time}</h3>
                <h3 className={styles.cardpricing}>{props.location[0].location}</h3>

                <button className={styles.cardbtn} onClick={handlereadmore}>Read More</button>
                <button className={styles.cardbtn} onClick={handlefunction}>Subscribe</button>
                
            </div>
        </div>
    );
};

export default Eventcard;  
