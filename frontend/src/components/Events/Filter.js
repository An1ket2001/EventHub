import React, { useContext, useEffect, useState } from 'react';  
import "../../design/Filter.css"
import { AuthContext } from '../../shared/AuthContext';
  
const Filter = ({filters,setFilters}) => {  
  const auth=useContext(AuthContext);
  const [venueList, setVenueList] = useState([]);
  const [location, setLocation] = useState('');  
  const [selectedDate, setSelectedDate] = useState('');  
  
  const handleLocationChange = (event) => {  
    setLocation(event.target.value);  
  };  
  
  const handleDateChange = (event) => {  
    setSelectedDate(event.target.value);  
  };  
  
  const handleFilter = () => {  
    // Perform filtering logic here  
    setFilters({...filters,location:location,date:selectedDate})
  };  
  const handleRemoveFilter=()=>{
    setFilters({...filters,date:"",location:"",})
  }
  useEffect(()=>{
    if(auth.token!=="")
    {
      const fetchVenue = async () => {
        const res = await fetch("http://localhost:5000/api/location/getlocation",{
          method:"GET",
          headers:{
            "Authorization":`Bearer ${auth.token}`
          }
        });
        const data = await res.json();
        setVenueList(data);
      }
      fetchVenue();
    }
    else{
      auth.login();
    }
  },[auth.login])
  return (  
    <div className="filter-container">  
      <div className="filter-box">  
        <div className="filter-fields">  
          <div className="location-input">  
            <label htmlFor="location">Location:</label>  
            <select id="location" value={location} onChange={handleLocationChange}>  
            <option value="">Select Location</option>  
            {
              
              venueList.map((venue)=>{
                return <option value={venue.location}>{venue.location}</option>  
              })
            }
            </select>  
          </div>  
          <div className="date-input">  
            <label htmlFor="date">Select Date:</label>  
            <input  
              type="date"  
              id="date"  
              value={selectedDate}  
              onChange={handleDateChange}  
            />  
          </div>  
        </div>  
        <button className="filter-button" onClick={handleFilter}>Apply Filter</button><br/>  
        <button className="filter-button" onClick={handleRemoveFilter}>Remove Filter</button>  
      </div>  
    </div>  
  );  
};  
  
export default Filter;  
