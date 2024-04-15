import React, { useState } from 'react';  
import "../design/Filter.css"
  
const Filter = () => {  
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
    console.log('Filtering...');  
  };  
  
  return (  
    <div className="filter-container">  
      <div className="filter-box">  
        <div className="filter-fields">  
          <div className="location-input">  
            <label htmlFor="location">Location:</label>  
            <select id="location" value={location} onChange={handleLocationChange}>  
              <option value="">Select Location</option>  
              <option value="Bangalore AC">Bangalore AC</option>  
              <option value="Mumbai AC">Mumbai AC</option>  
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
        <button className="filter-button" onClick={handleFilter}>Filter</button>  
      </div>  
    </div>  
  );  
};  
  
export default Filter;  
