import React, { useState } from 'react';  
import '../../design/cardcontainer.css';  
  
const Addevent = () => {  
  const data = [  
    {  
      id: 1,  
      name: 'Event 1',  
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',  
      venue: 'Venue 1',  
    },  
    {  
      id: 2,  
      name: 'Event 2',  
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',  
      venue: 'Venue 2',  
    },  
    {  
      id: 3,  
      name: 'Event 3',  
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',  
      venue: 'Venue 3',  
    },  
    // Add more data objects as needed  
  ];  
  
  const [hoveredCard, setHoveredCard] = useState(null);  
  
  const handleCardHover = (cardId) => {  
    setHoveredCard(cardId);  
  };  
  
  const handleCardLeave = () => {  
    setHoveredCard(null);  
  };  
  
  return (  
    <div className="card-container">  
      {data.map((item) => (  
        <div  
          className={`card ${hoveredCard === item.id ? 'hovered' : ''}`}  
          key={item.id}  
          onMouseEnter={() => handleCardHover(item.id)}  
          onMouseLeave={handleCardLeave}  
        >  
          <img src="image.jpg" alt="Event" className="card-image" />  
          <div className="card-content">  
            <h3 className="card-title">{item.name}</h3>  
            <p className="card-description">{item.description}</p>  
            <p className="card-venue">Venue: {item.venue}</p>  
            {hoveredCard === item.id && (  
              <div className="card-buttons">  
                <button className="edit-button">Edit</button>  
                <button className="delete-button">Delete</button>  
              </div>  
            )}  
          </div>  
        </div>  
      ))}  
    </div>  
  );  
};  
  
export default Addevent;  
