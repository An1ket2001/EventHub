import React from 'react';  
import styles from'../../design/ReadMore.module.css';  
 
const ReadMore = () => {  
  return (  
    <div className={styles.eventdescriptionpage}>  
      <div className={styles.eventimage}>  
        <img src="https://th.bing.com/th?id=OIP.HdETgqkYpSTZhRHQcDetIgHaFS&w=295&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt="Event" />  
      </div>  
      <div className={styles.eventdetails}>  
        <h1>Event Title</h1>  
        <p>Date: January 1, 2022</p>  
        <p>Location: Event Venue</p>  
        <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl ac ultrices aliquet, nunc nunc tincidunt nunc, id lacinia nunc nisl id nunc. Sed euismod, nisl id aliquam tincidunt, nunc nunc tincidunt nunc, id lacinia nunc nisl id nunc.</p>  
      </div>  
    </div>  
  );  
};  
 
export default ReadMore;  