import React, { useEffect, useRef, useState } from "react";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
} from "firebase/firestore";
import { db, auth } from "../firebase"; // Add the auth import
import Message from "../components/Message";
import SendMessage from "../components/SendMessage";
import Form from "../components/Form";
import { addDoc, serverTimestamp } from "firebase/firestore";
import SendForm from "../components/SendForm"

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const scroll = useRef();

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("createdAt"), limit(50));
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let messages = [];
      QuerySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe();
  }, []);

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  return (
    <main className="chat-box">
      <div className="messages-wrapper">
        {messages?.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
      <span ref={scroll}></span>
      <SendForm openForm={openForm} />
      {isFormOpen && <Form onClose={closeForm} />}
     
      <SendMessage scroll={scroll}/>

    </main>
  );
};

export default ChatBox;
