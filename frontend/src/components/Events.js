import React from "react";  
import "../design/Events.css";  
import Eventcard from "./Eventcard"
  
const Events = () => {  
  const cards = [  
    {  
      id: 1,  
      image: "https://images.unsplash.com/photo-1619490742661-8949b7d3a612?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",  
      title:"Holi Celebration",
      description: "Card 1 description",  
      dateTime: "Date/Time 1",  
      location: "Location 1",  
    },  
    {  
      id: 2,  
      image: "https://images.unsplash.com/photo-1619490742661-8949b7d3a612?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",  
      title:"Diwali celebration",
      description: "Card 2 description",  
      dateTime: "Date/Time 2",  
      location: "Location 2",  
    },  
    // Add more card objects as needed  
  ];  
  
  return (  
    <div className="container">  
      {cards.map((card) => (  
        <Eventcard  
          key={card.id}  
          title={card.title}
          image={card.image}  
          description={card.description}  
          dateTime={card.dateTime}  
          location={card.location}  
        />  
      ))}  
    </div>  
  );  
};  
  
export default Events;  
