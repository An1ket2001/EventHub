import React from "react";
import "../design/Eventcard.css";

const Eventcard = (props) => {
    const handlefunction=(e)=>{
        console.log(e.target.value);
    }
    return (

        <div className="card">
            <img src={props.image} className="card__img" />
            <div class="card__body">
                <h2 className="card__title">{props.title}</h2>
                <br />
                <p className="card__description">{props.description}</p>
                <h3 className="card__pricing">{props.dateTime}</h3>
                <h3 className="card__pricing">{props.location}</h3>

                <button className="card__btn">Read More</button>
                <button className="card__btn" onClick={handlefunction}>Subscribe</button>
                
            </div>
        </div>
    );
};

export default Eventcard;  
