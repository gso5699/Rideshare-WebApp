import React, { useState } from "react";
import "../App.css";
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const Form = ({ onClose }) => {
  const [departLocation, setDepartLocation] = useState("");
  const [arriveLocation, setArriveLocation] = useState("");
  const [message, setMessage] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) {
      onClose(); // Trigger the onClose callback to handle form closing
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    alert("Submitting the form");

    const { uid } = auth.currentUser;

    await addDoc(collection(db, "ride_forms"), {
      departLocation: departLocation,
      arriveLocation: arriveLocation,
      message: message,
      createdAt: serverTimestamp(),
      uid,
    });

    setDepartLocation("");
    setArriveLocation("");
    setMessage("");
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="popup">
      <button className="closeFormButton" onClick={handleClose}>
        x
      </button>
      <form className="form" onSubmit={handleSubmit}>
        <h1>Rideshare Form</h1>

        <label>Departing Location</label>
        <input
          placeholder="Departure location"
          value={departLocation}
          onChange={(e) => setDepartLocation(e.target.value)}
        />

        <label>Arriving Location</label>
        <input
          placeholder="Arrival Location"
          value={arriveLocation}
          onChange={(e) => setArriveLocation(e.target.value)}
        />

        <label>Message</label>
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
