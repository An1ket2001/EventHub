import React, { useState } from 'react';  
import '../design/Addform.css';  
  
const Addform = () => {  
    const venueOptions = ['Bagmane tech park', 'Embassy golf link', 'Virtual Programme'];
  const [eventData, setEventData] = useState({  
    eventName: '',  
    description: '',  
    dateTime: '',  
    venue: ''  
  });  
  
  const handleChange = (e) => {  
    setEventData({ ...eventData, [e.target.name]: e.target.value });  
  };  
  
  const handleSubmit = (e) => {  
    e.preventDefault();  
    // Do something with the form data, like sending it to a server  
    console.log(eventData);  
  };  
  
  return (  
    <form className="form" onSubmit={handleSubmit}>  
      <label htmlFor="eventName">Name of Event:</label>  
      <input  
        type="text"  
        id="eventName"  
        name="eventName"  
        value={eventData.eventName}  
        onChange={handleChange}  
        required  
      />  
  
      <label htmlFor="description">Description:</label>  
      <textarea  
        id="description"  
        name="description"  
        value={eventData.description}  
        onChange={handleChange}  
        required  
      ></textarea>  
  
      <label htmlFor="dateTime">Date/Time:</label>  
      <input  
        type="datetime-local"  
        id="dateTime"  
        name="dateTime"  
        value={eventData.dateTime}  
        onChange={handleChange}  
        required  
      />  
  
      <label htmlFor="venue">Venue:</label>  
      <select  
        id="venue"  
        name="venue"  
        value={eventData.venue}  
        onChange={handleChange}  
        required  
      >  
        <option value="">Select Venue</option>  
        {venueOptions.map((option) => (  
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
