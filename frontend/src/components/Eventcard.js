import React from "react";
import "../design/Eventcard.css";

const Eventcard = (props) => {
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
    return (

        <div className="card">
            <img src={`http://localhost:5000/api/events/getEventImage/${props.titleImage}`} className="card__img" />
            <div className="card__body">
                <h2 className="card__title">{props.title}</h2>
                <br />
                <p className="card__description">{props.description}</p>
                <h3 className="card__pricing">{props.date}</h3>
                <h3 className="card__pricing">{props.location}</h3>

                <button className="card__btn">Read More</button>
                <button className="card__btn" onClick={handlefunction}>Subscribe</button>
                
            </div>
        </div>
    );
};

export default Eventcard;  
