import React, { useState } from "react";
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import scroll from "../pages/ChatBox.js";
import Form from "./Form";

const SendMessage = () => {
  const [message, setMessage] = useState("");
  const [showForm, setShowForm] = useState(false);

  const sendMessage = async (event) => {
    event.preventDefault();
    if (message.trim() === "") {
      alert("Enter a valid message");
      return;
    }
    const { uid, displayName, photoURL } = auth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: message,
      name: displayName,
      avatar: photoURL,
      createdAt: serverTimestamp(),
      uid,
    });
    setMessage("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };

  const openForm = () => {
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  const handleFormSubmit = async (formData) => {
    // Handle the form submission from the Form component
    const { uid, displayName, photoURL } = auth.currentUser;
    await addDoc(collection(db, "ride_forms"), {
      departLocation: formData.departLocation,
      arriveLocation: formData.arriveLocation,
      message: formData.message,
      createdAt: serverTimestamp(),
      uid,
      name: displayName,
      avatar: photoURL,
    });
    setShowForm(false); // Close the form after successful submission
  };

  return (
    <form onSubmit={sendMessage} className="send-message">
      <label htmlFor="messageInput" hidden>
        Enter Message
      </label>
      <input
        id="messageInput"
        name="messageInput"
        type="text"
        className="form-input__input"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>

      {showForm && (
        <div className="create-ride-form-container">
          <Form onClose={closeForm} onSubmit={handleFormSubmit} />
        </div>
      )}

      {!showForm && (
        <button className="create-ride-form-button" onClick={openForm}>
          Create Rideshare Form
        </button>
      )}
    </form>
  );
};

export default SendMessage;
