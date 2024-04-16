import React,{useState,useEffect} from "react";  
import "../../design/Events.module.css";  
import Eventcard from "./Eventcard"
import EventBar from "./EventBar";
import Filter from "./Filter";
const Events = () => {  
   
  const [eventData,setEventData]=useState([]);
  const [filters,setFilters]=useState({date:"",location:"",IsEventOver:'upcoming'})
  useEffect(()=>{
    const fetchEventData=async()=>{
      const res = await fetch("http://localhost:5000/api/events/getEvents",{
        method:"POST",
        headers:{
          'content-type':"application/json"
        },
        body:JSON.stringify({"filters":filters}),
      });
      const data = await res.json();
      setEventData(data);
    }
    fetchEventData();
    
  },[filters])


  return (  
    <>
    
    {/* <div className="container">   */}
    <EventBar filters={filters} setFilters={setFilters}/>
    <Filter filters={filters} setFilters={setFilters}/>

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
    {/* </div>  */}
    </> 
  );  
};  
  
export default Events;  
