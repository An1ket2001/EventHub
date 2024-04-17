import styles from "../../design/Modal.module.css";
import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import Backdrop from "./Backdrop";
import { CSSTransition } from "react-transition-group";

const ModalOverlay = (props) => {
    const [eventData,setEventData]=useState(props.eventData);
    const editFunction=(e)=>{
        
    }
  const imageRef = useRef(null);
  const content = (
    <div className={styles.modal} style={props.style}>
      <header className={styles.modalheader}>
        <h2>{props.header}Update Event</h2>
      </header>
      <form
        className={styles.form}
        onSubmit={
          props.onSubmit ? props.onSubmit : (event) => event.preventDefault()
        }
      >
        <div className={styles.modalcontent}>
          {props.children}
          <label className={styles.inpLabel}>Name of the Event:</label>
          <input
            type="text"
            className={styles.formInput}
            value={eventData.title}
          />
          <label className={styles.inpLabel}>Description:</label>
          <textarea
            id="description"
            name="description"
            value={eventData.description}
            onChange={"handleChange"}
            required
            className={styles.formInput}
          ></textarea>
          <label className={styles.inpLabel}>Date/Time:</label>
          <input
            type="datetime-local"
            className={styles.formInput}
            value={props.eventData.date}
          />
          <label className={styles.inpLabel}>Venue:</label>
          <select className={styles.formSelect} value={eventData.location}>
            <option>Select Venue</option>
            {props.venueList.map((option) => (
              <option key={option._id} value={option._id}>
                {option.location}
              </option>
            ))}
          </select>
          <label className={styles.inpLabel}>
            Upload If you want To change Image:
          </label>
          <input
            className={styles.formInput}
            type="file"
            ref={imageRef}
          ></input>
          <button className={styles.updateBtn}>Update</button>
        </div>
        <footer className={styles.modalfooter}>{props.footer}</footer>
      </form>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {props.show && (
        <Backdrop onClick={() => props.setShowModal(false)}></Backdrop>
      )}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames={styles.modal}
      >
        <ModalOverlay {...props}></ModalOverlay>
      </CSSTransition>
    </React.Fragment>
  );
};
export default Modal;
