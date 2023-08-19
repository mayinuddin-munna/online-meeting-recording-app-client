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
      console.log(users);

      const messagesArr = [];

      for (const { userId, username } of users) {
        const newMessage = { type: "UserStatus", userId, username };

        messagesArr.push(newMessage);
      }

      setMessages([...messages, ...messagesArr]);
      setUsers(users);
    });

    // first
    socket.on("session", ({ userId, username }) => {
      setUser({ userId, username });
    });

    socket.on("user connected", ({ userId, username }) => {
      const newMessage = { type: "UserStatus", userId, username };

      setMessages([...messages, newMessage]);
    });

    socket.on("new message", ({ userId, username, message }) => {
      const newMessage = {
        type: "message",
        userId: userId,
        username: username,
        message,
      };
      setMessages([...messages, newMessage]);
    });
  }, [messages]);

  // login
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const userName = form.userName.value;
    // console.log(userName);
    setNewUser(userName);

    // setUser
    setUser(newUser);
    // socket
    socket.auth = { username: newUser };
    socket.connect();
  };

  // message
  const handleMessage = useCallback(
    (event) => {
      event.preventDefault();
      const form = event.target;
      const textMessage = form.textMessage.value;
      // console.log(textMessage);
      setMessage(textMessage);

      const newMessage = {
        type: "message",
        userId: user.userId,
        username: user.username,
        message: textMessage,
      };

      // socket
      socket.emit("new message", textMessage);
      // const newMessage = {
      //   type: "message",
      //   userId: user.userId,
      //   username: user.username,
      //   message: textMessage

      // };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setMessage("");
    },
    [socket, user]
  );

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
            src="https://lottie.host/615840d2-e7ec-4093-9a2f-19c103614a02/8G8ZWN8QRD.json"
            style={{ height: "300px", width: "300px" }}
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
