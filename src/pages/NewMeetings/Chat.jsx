import React, { useCallback, useEffect, useState } from "react";

import ChatWindow from "./ChatWindow/ChatWindow";
import { io } from "socket.io-client";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import moment from "moment/moment";

const socket = io("http://localhost:8000");

const Chat = () => {

  const { user } = useContext(AuthContext);
  // console.log(user);

  const [userDefault, setUserDefault] = useState({});
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);


  useEffect(() => {
    // setUser
    setUserDefault({ userId: user.uid, username: user.username, photoURL: user.photoURL, });

    // socket
    socket.auth = { userId: user.uid, username: user.username, photoURL: user.photoURL, };
    socket.connect();
  }, [])

  useEffect(() => {
    socket.on("users", (users) => {
      const messagesArr = users.map(({ userId, username }) => ({
        type: "UserStatus",
        userId,
        username
      }));
      setMessages([...messages, ...messagesArr])
      setUsers(users);
    });

    socket.on("session", ({ userId, username }) => {
      setUserDefault({ userId, username });
    });

    socket.on("user connected", ({ userId, username }) => {
      const newMessage = { type: "UserStatus", userId, username };
      setMessages(prevMessages => [...prevMessages, newMessage]);
    });

    socket.on("new message", ({ userId, username, message, time, photoURL }) => {
      const currentTime = moment().locale("en").format("hh:mm A");
      const newMessage = {
        type: "message",
        userId: userId,
        username: username,
        photoURL: photoURL,
        message,
        time: currentTime,

      };
      setMessages(prevMessages => [...prevMessages, newMessage]);
    });

    return () => {
      socket.off("users");
      socket.off("session");
      socket.off("user connected");
      socket.off("new message");
    };
  }, [messages]);

  // message 
  const handleMessage = useCallback(event => {
    event.preventDefault();
    const form = event.target;
    const textMessage = form.textMessage.value;
    // console.log(textMessage);
    setMessage(textMessage);

    form.textMessage.value = "";

    socket.emit("new message", textMessage, () => {

      console.log('currentTime', currentTime);
      // After the message is sent successfully, update the state
      const newMessage = {
        type: "message",
        userId: userDefault.userId,
        username: userDefault.username,
        message: textMessage,

      };
      setMessages(prevMessages => [...prevMessages, newMessage]);

      setMessage('');
    });

  }, [userDefault]);
  return (
    <>
      <ChatWindow
        userDefault={userDefault}
        message={message}
        messages={messages}
        handleMessage={handleMessage}
      />
    </>
  );
};

export default Chat;
