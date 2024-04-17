import React, { useState, useEffect,useRef, useContext } from 'react';
import styles from  '../../design/Addform.module.css';
import { useNavigate } from "react-router-dom";
import MyCreatedevent from './MyCreatedevent';
import { AuthContext } from '../../shared/AuthContext';
import Subsevent from './Subsevent';
import Modal from '../Common/Modal';

const Addform = () => {
  const auth=useContext(AuthContext);
  const navigate = useNavigate(); 
  const [venueList, setVenueList] = useState([]);
  const [eventData, setEventData] = useState({
    title: '',
    description: '',
    date: '',
    locationId: ''
  });
  const [createdEvents,setCreatedEvents]=useState([]);
  const [showModal,setShowModal]=useState(false);
  const [editEventData,setEditEventData]=useState({});

  const handleChange = (e) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value });
  };

  const handleEdit=(editData)=>{
    setShowModal(true);
    setEditEventData(editData);
  }

  const imageRef=useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data=new FormData();
    data.append("title",eventData.title);
    data.append("description",eventData.description);
    data.append("date",eventData.date);
    data.append("locationId",eventData.locationId);
    data.append("imageDetails",imageRef.current.files[0]);
    
    //const data={...eventData,imageDetails:imageRef.current.files[0],authorId:"6616cb4f2b543fd062acffab"}
    //Do something with the form data, like sending it to a server 
    const res = await fetch("http://localhost:5000/api/events/createEvent", {
      method: "POST",
      headers:{
        "Authorization":`Bearer ${auth.token}`
      },
      body: data,
    });
    if(res)
    {
      navigate("/");
    }
    
    
  };

  useEffect(() => {
    //console.log(auth);
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
      const fetchCreatedEvents=async()=>{
        const res = await fetch("http://localhost:5000/api/events/myCreatedEvents",{
          method:"GET",
          headers:{
            "Authorization":`Bearer ${auth.token}`
          }
        })
        const data=await res.json();
        setCreatedEvents(data);
        
      }
      fetchVenue();
      fetchCreatedEvents();
    }
    else{
      auth.login();
    }
    
  }, [auth.token])


  return (
    <>
    <Modal show={showModal} setShowModal={setShowModal} eventData={editEventData} venueList={venueList} />
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.inpLabel} htmlFor="eventName">Name of Event:</label>
      <input
      className={styles.formInput}
        type="text"
        id="eventName"
        name="title"
        value={eventData.title}
        onChange={handleChange}
        required
      />

      <label className={styles.inpLabel} htmlFor="description">Description:</label>
      <textarea
      className={styles.formInput}
        id="description"
        name="description"
        value={eventData.description}
        onChange={handleChange}
        required
      ></textarea>

      <label className={styles.inpLabel} htmlFor="dateTime">Date/Time:</label>
      <input
      className={styles.formInput}
        type="datetime-local"
        id="dateTime"
        name="date"
        value={eventData.date}
        onChange={handleChange}
        required
      />

      <label className={styles.inpLabel} htmlFor="venue">Venue:</label>
      <select
      className={styles.formSelect}
        id="venue"
        name="locationId"
        value={eventData.locationId}
        onChange={handleChange}
        required
      >
        <option value="">Select Venue</option>
        {venueList.map((option) => (
          <option key={option._id} value={option._id}>
            {option.location}
          </option>
        ))}
      </select>
      <label className={styles.inpLabel}>Select Image:</label>
      <input className={styles.formInput} type="file" ref={imageRef}></input>

      <button className={styles.submitBtn} type="submit">Submit</button>
    </form>
    {/* <MyCreatedevent /> */}
    <br/>
    <Subsevent events={createdEvents} handleEdit={handleEdit}/>
    </>
  );
};

export default Addform;  
