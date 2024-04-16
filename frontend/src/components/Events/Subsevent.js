import React from 'react';  
import '../../design/Subsevent.css';  
  
const Subsevent = () => {  
  const events = [  
    {  
      id: 1,  
      image: 'https://th.bing.com/th/id/OIP.nZ73V6NNCvbFCBWyn_sZSwHaFb?w=208&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',  
      name: 'Event 1',  
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',  
      venue: 'Venue 1',  
    },  
    {  
      id: 2,  
      image: 'https://th.bing.com/th/id/OIP.aEvtasXAR9hiN8TLqslQXwHaFl?w=201&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',  
      name: 'Event 2',  
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',  
      venue: 'Venue 2',  
    }, 
    {  
        id: 2,  
        image: 'https://th.bing.com/th?q=Christmas+Advent+Calendar&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247',  
        name: 'Event 2',  
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',  
        venue: 'Venue 2',  
      },
      {  
        id: 2,  
        image: 'https://th.bing.com/th?q=Christmas+Advent+Calendar&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247',  
        name: 'Event 2',  
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',  
        venue: 'Venue 2',  
      },
      {  
        id: 2,  
        image: 'https://th.bing.com/th?q=Christmas+Advent+Calendar&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247',  
        name: 'Event 2',  
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',  
        venue: 'Venue 2',  
      } 
    // Add more events here  
  ];  
  
  return (  
    <div className="subscribed-events-page">  
      <h1>Subscribed Events</h1>  
      <div className="event-cards">  
        {events.map((event) => (  
          <div key={event.id} className="event-card">  
            <img src={event.image} alt={event.name} />  
            <h2>{event.name}</h2>  
            <p>{event.description}</p>  
            <p>Venue: {event.venue}</p>  
            <button className="read-more-button">Read More</button>  
          </div>  
        ))}  
      </div>  
    </div>  
  );  
};  
  
export default Subsevent;  
