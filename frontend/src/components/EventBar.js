import React, { useState } from 'react';  
import "../design/EventBar.css"
  
const EventBar = ({filters,setFilters}) => {  
  const [selectedButton, setSelectedButton] = useState('upcoming');  
  
  const handleButtonClick = (button) => {  
    setSelectedButton(button); 
    setFilters({...filters,IsEventOver:button})
  };  
  
  return (  
    <div className="event-bar">  
      <button  
        className={`event-button ${selectedButton === 'past' ? 'selected' : ''}`}  
        onClick={() => handleButtonClick('past')}  
      >  
        Past Events  
      </button>  
      <button  
        className={`event-button ${selectedButton === 'upcoming' ? 'selected' : ''}`}
        onClick={() => handleButtonClick('upcoming')}  
      >  
        Upcoming Events  
      </button>  
    </div>  
  );  
};  
  
export default EventBar;  



