import { createContext, useState } from "react";
import io, { Socket } from "socket.io-client";

const socket = io("http://localhost:5000/");

export const store = createContext();

const storeProvider = ({ children }) => {
  const [id, setId] = useState();
  socket.on("me", (id) => setId(id));
};

export default storeProvider;
