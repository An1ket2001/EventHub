import React, { useState,useEffect } from 'react';  
import '../design/Addform.css';  
  
const Addform = () => {  
  const [venueList,setVenueList]=useState([]);
  const [eventData, setEventData] = useState({  
    eventName: '',  
    description: '',  
    dateTime: '',  
    venue: ''  
  });  
  
  const handleChange = (e) => {  
    setEventData({ ...eventData, [e.target.name]: e.target.value });  
  };  
  
  const handleSubmit = async(e) => {  
    e.preventDefault();  
    // Do something with the form data, like sending it to a server 
    await fetch("http://localhost:5000/api/events/createEvent",{
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(eventData),
    })
    console.log(eventData);  
  };  
  
  useEffect(()=>{
    const fetchVenue=async()=>{
      const res= await fetch("http://localhost:5000/api/location/getlocation");
      const data = await res.json();
      console.log(data);
      setEventData(data);
    }
    fetchVenue();
  },[])


  return (  
    <form className="form" onSubmit={handleSubmit}>  
      <label htmlFor="eventName">Name of Event:</label>  
      <input  
        type="text"  
        id="eventName"  
        name="eventTitle"  
        value={eventData.eventName}  
        onChange={handleChange}  
        required  
      />  
  
      <label htmlFor="description">Description:</label>  
      <textarea  
        id="description"  
        name="eventDescription"  
        value={eventData.description}  
        onChange={handleChange}  
        required  
      ></textarea>  
  
      <label htmlFor="dateTime">Date/Time:</label>  
      <input  
        type="datetime-local"  
        id="dateTime"  
        name="eventdateTime"  
        value={eventData.dateTime}  
        onChange={handleChange}  
        required  
      />  
  
      <label htmlFor="venue">Venue:</label>  
      <select  
        id="venue"  
        name="eventVenue"  
        value={eventData.venue}  
        onChange={handleChange}  
        required  
      >  
        <option value="">Select Venue</option>  
        {venueList.map((option) => (  
          <option key={option} value={option}>  
            {option}  
          </option>  
        ))}  
      </select>   
  
      <button type="submit">Submit</button>  
    </form>  
  );  
};  
  
export default Addform;  
