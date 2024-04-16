import React, { useState } from 'react';  
import styles from "../../design/EventBar.module.css"
  
const EventBar = ({filters,setFilters}) => {  
  const [selectedButton, setSelectedButton] = useState('upcoming');  
  
  const handleButtonClick = (button) => {  
    setSelectedButton(button); 
    setFilters({...filters,IsEventOver:button})
  };  
  
  return (  
    <div className={styles.eventbar}>  
      <button  
        className={`${styles.eventbutton} ${selectedButton === `${styles.past} ? ${styles.selected} : ''`}`}  
        onClick={() => handleButtonClick('past')}  
      >  
        Past Events  
      </button>  
      <button  
        className={`${styles.eventbutton} ${selectedButton === `${styles.upcoming} ? ${styles.selected} : ''`}`} 
        onClick={() => handleButtonClick('upcoming')}  
      >  
        Upcoming Events  
      </button>  
    </div>  
  );  
};  
  
export default EventBar;  



