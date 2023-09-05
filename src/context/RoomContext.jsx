import { createContext, useEffect, useState, useReducer } from "react";
import socketIOClient from "socket.io-client";
import { useNavigate } from "react-router-dom";
import Peer from "peerjs";
import { v4 as uuidv4 } from "uuid";
import { peerReducer } from "../reducers/peerReducer";
import {
  addPeerStreamAction,
  removePeerStreamAction,
} from "../reducers/peerActions";
import { chatReducer } from "../reducers/chatReducer";
import {
  addHistoryAction,
  addMessageAction,
  toggleChatAction,
} from "../reducers/chatActions";

const WS = "http://localhost:8000";

export const RoomContext = createContext(null);

const ws = socketIOClient(WS);
// console.log(ws);

export const RoomProvider = ({ children }) => {
  const [me, setMe] = useState();
  const [stream, setStream] = useState();
  const [peers, dispatch] = useReducer(peerReducer, {});
  // const [screenStream, setScreenStream] = useState();
  const [screenSharingId, setScreenSharingId] = useState("");
  const [roomId, setRoomId] = useState("");

  // Chat
  const [chat, chatDispatch] = useReducer(chatReducer, {
    messages: [],
    isChatOpen: false,
  });

  const navigate = useNavigate();

  const getUser = ({ participants }) => {
    console.log(participants);
  };

  const enterRoom = ({ roomId }) => {
    navigate(`/room/${roomId}`);
  };

  const removePeer = (peerId) => {
    dispatch(removePeerStreamAction(peerId));
  };

  const switchStream = (stream) => {
    setStream(stream);
    setScreenSharingId(me?.id || "");
    Object.values(me?.connections).forEach((connection) => {
      const videoTrack = stream
        ?.getTracks()
        .find((track) => track.kind === "video");
      console.log(connection[0].peerConnection.getSenders()[1]);
      connection[0].peerConnection
        .getSenders()[1]
        // .find((sender: any) => sender.track.kind === "video")
        .replaceTrack(videoTrack)
        .catch((err) => console.error(err));
    });
  };

  const shareScreen = () => {
    if (screenSharingId) {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then(switchStream);
    } else {
      navigator.mediaDevices.getDisplayMedia({}).then(switchStream);
      // (stream) => {
      //   switchStream(stream);
      //   setScreenStream(stream);
      // }
    }
  };

  const sendMessage = (message) => {
    const messageData = {
      content: message,
      timestamp: new Date().getTime(),
      author: me?.id,
    };

    chatDispatch(addMessageAction(messageData));

    ws.emit("send-message", roomId, messageData);
  };

  const addMessage = (message) => {
    console.log("new :", message);
    chatDispatch(addMessageAction(message));
  };

  const addHistory = (messages) => {
    chatDispatch(addHistoryAction(messages));
    console.log({ messages });
  };

  const toggleChat = () => {
    chatDispatch(toggleChatAction(!chat.isChatOpen));
  };

  useEffect(() => {
    const myId = uuidv4();

    const peer = new Peer(
      myId,

      {
        host: "localhost",
        path: "/",
        port: 9001,
        // secure: true,
      }
    );
    setMe(peer);

    try {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then((stream) => {
          setStream(stream);
        });
    } catch (error) {
      console.error(error);
    }

    ws.on("room-create", enterRoom);
    ws.on("get-users", getUser);
    ws.on("user-disconnected", removePeer);
    ws.on("user-started-screen", (peerId) => setScreenSharingId(peerId));
    ws.on("user-stopped-screen", () => setScreenSharingId(""));
    ws.on("add-message", addMessage);
    ws.on("get-messages", addHistory);

    return () => {
      ws.off("room-created");
      ws.off("get-users");
      ws.off("user-disconnected");
      ws.off("user-started-sharing");
      ws.off("user-stopped-sharing");
      ws.off("add-message");

      // ws.off("user-joined");
      // ws.off("name-changed");
      // me?.disconnect();
    };
  }, []);

  useEffect(() => {
    if (screenSharingId) {
      ws.emit("start-sharing", { peerId: screenSharingId, roomId });
    } else {
      ws.emit("stop-sharing");
    }
  }, [screenSharingId, roomId]);

  useEffect(() => {
    if (!me) return;
    if (!stream) return;

    ws.on("user-joined", ({ peerId }) => {
      const call = me.call(peerId, stream);

      call.on("stream", (peerStream) => {
        return dispatch(addPeerStreamAction(peerId, peerStream));
      });
    });

    me.on("call", (call) => {
      call.answer(stream);
      call.on("stream", (peerStream) => {
        return dispatch(addPeerStreamAction(call.peer, peerStream));
      });
    });
  }, [me, stream, peers]);

  console.log({ peers });

  return (
    <RoomContext.Provider
      value={{
        ws,
        me,
        stream,
        peers,
        shareScreen,
        screenSharingId,
        setRoomId,
        sendMessage,
        chat,
        toggleChat,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
};
