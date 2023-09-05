import React, { useCallback, useEffect, useState } from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import ChatWindow from "./ChatWindow/ChatWindow";
import UserLogin from "./userLogin/userLogin";
import { io } from "socket.io-client";

const socket = io("http://localhost:8000");

const Chat = () => {
  const [newUser, setNewUser] = useState("");
  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

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
      setUser({ userId, username });
    });

    socket.on("user connected", ({ userId, username }) => {
      const newMessage = { type: "UserStatus", userId, username };
      setMessages(prevMessages => [...prevMessages, newMessage]);
    });

    socket.on("new message", ({ userId, username, message }) => {
      const newMessage = {
        type: "message",
        userId: userId,
        username: username,
        message
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

  
  // login
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const userName = form.userName.value;
    console.log(userName);
    setNewUser(userName);

    // setUser
    setUser(newUser);
    // socket
    socket.auth = { username: newUser };
    socket.connect();
  }

  // message 
  const handleMessage = useCallback (event => {
    event.preventDefault();
    const form = event.target;
    const textMessage = form.textMessage.value;
    // console.log(textMessage);
    setMessage(textMessage);

    socket.emit("new message", textMessage, () => {
      // After the message is sent successfully, update the state
      const newMessage = {
        type: "message",
        userId: user.userId,
        username: user.username,
        message: textMessage
      };
      setMessages(prevMessages => [...prevMessages, newMessage]);
      setMessage('');
    });

  }, [user]);
  return (
    <>
      <div className={user.userId ? "hidden" : "block"}>
        <div>
          <h1 className="text-2xl lg:text-4xl text-center mt-10">
            Welcome Galaxy Meeting
          </h1>
          <Player
            autoplay
            loop
            src="https://lottie.host/aacf9ba2-bc1c-4ae8-b6b5-d5772d78ac16/K47dHc1US0.json"
            style={{ height: "400px", width: "400px" }}
          >
            <Controls
              visible={!true}
              buttons={["play", "repeat", "frame", "debug"]}
            />
          </Player>
        </div>
      </div>

      {/* -------Form-------- */}

      {user.userId ? (
        <ChatWindow
          user={user}
          message={message}
          messages={messages}
          handleMessage={handleMessage}
        />
      ) : (
        <UserLogin handleSubmit={handleSubmit} />
      )}
    </>
  );
};

export default Chat;
