import React, { useState } from "react";
import "../App.css";
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const Form = ({ onClose, onSubmit }) => {
  const [departLocation, setDepartLocation] = useState("");
  const [arriveLocation, setArriveLocation] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    alert("Submitting the form");

    const { uid, displayName, photoURL } = auth.currentUser;

    await addDoc(collection(db, "ride_forms"), {
      departLocation: departLocation,
      arriveLocation: arriveLocation,
      message: message,
      createdAt: serverTimestamp(),
      uid,
      name: displayName,
      avatar: photoURL,
    });

    setDepartLocation("");
    setArriveLocation("");
    setMessage("");

    if (onSubmit) {
      onSubmit(); // Trigger the onSubmit callback to handle form submission
    }

    if (onClose) {
      onClose(); // Trigger the onClose callback to handle form closing
    }
  };

  const handleClose = () => {
    if (onClose) {
      onClose(); // Trigger the onClose callback to handle form closing
    }
  };

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
