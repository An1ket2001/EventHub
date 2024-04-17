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
                {/* <p className={styles.carddescription}>{props.description}</p> */}
                <br />
                <h4 className={styles.cardpricing}>Date: {date}</h4>
                <h4 className={styles.cardpricing}>Time: {time}</h4>
                <h4 className={styles.cardpricing}>Venue: {props.location[0].location}</h4>

                <button className={styles.cardbtn} onClick={handlereadmore}>Read More</button>
            </div>
        </div>
    );
};

export default Eventcard;  
