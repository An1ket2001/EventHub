import React,{useState,useEffect} from "react";  
import "../design/Events.css";  
import Eventcard from "./Eventcard"
  
const Events = () => {  
   
  const [eventData,setEventData]=useState([]);
  
  useEffect(()=>{
    const fetchEventData=async()=>{
      const res = await fetch("http://localhost:5000/api/events/getEvents");
      const data = await res.json();
      setEventData(data);
    }
    fetchEventData();
    
  },[])


  return (  
    <div className="container">  
      {eventData.map((card) => (  
        <Eventcard  
          key={card._id}  
          title={card.title}
          titleImage={card.titleImage}  
          description={card.description}  
          dateTime={card.date}  
          location={card.locatio}  
        />  
      ))}  
    </div>  
  );  
};  
  
export default Events;  
