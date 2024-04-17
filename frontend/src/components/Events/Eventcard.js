import React, { useContext } from "react";
import styles from "../../design/Eventcard.module.css";
import {useNavigate} from "react-router-dom";
import { AuthContext } from "../../shared/AuthContext";

const Eventcard = (props) => {
    const auth = useContext(AuthContext);
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
        if(auth.token==="")
        {
            navigate("/login");
        }else{
        navigate(`/event/${props.id}`);
        }
    }
    return (

        <div className={styles.card}>
            <img src={`http://localhost:5000/api/events/getEventImage/${props.titleImage}`} alt="Img" className={styles.cardimg} />
            <div className={styles.cardbody}>
                <h2 className={styles.cardtitle}>{props.title}</h2>
                <br />
                <p className={styles.carddescription}>{props.description}</p>
                <h3 className={styles.cardpricing}>Date: {date}</h3>
                <h3 className={styles.cardpricing}>Time: {time}</h3>
                <h3 className={styles.cardpricing}>Venue: {props.location[0].location}</h3>

                <button className={styles.cardbtn} onClick={handlereadmore}>Read More</button>
                <button className={styles.cardbtn} onClick={handlefunction}>Subscribe</button>
            </div>
        </div>
    );
};

export default Eventcard;  
