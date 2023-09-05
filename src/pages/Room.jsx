import { useContext, useEffect } from "react";

import { useParams } from "react-router-dom";
import { RoomContext } from "../context/RoomContext";
import { VideoPlayer } from "../components/VideoPlayer";
import ShareScreenButton from "../components/ShareScreenButton";
import ChatButton from "../components/ChatButton";
import { Chat } from "../components/chat/Chat";

export default function Room() {
  const { id } = useParams();

  const {
    ws,
    me,
    stream,
    peers,
    shareScreen,
    screenSharingId,
    setRoomId,
    chat,
    toggleChat,
  } = useContext(RoomContext);

  useEffect(() => {
    if (me) ws.emit("join-room", { roomId: id, peerId: me._id });
  }, [id, me, ws]);

  useEffect(() => {
    setRoomId(id);
  }, [id, setRoomId]);

  console.log(screenSharingId);

  const screenSharingVideo =
    screenSharingId === me?.id ? stream : peers[screenSharingId]?.stream;

  const { [screenSharingId]: sharing, ...peersToShow } = peers;

  return (
    <div className="flex flex-col min-h-screen">
      <div className="text-center bg-green-400 text-white">Room Id: {id}</div>
      <div className="flex grow">
        {screenSharingVideo && (
          <div className="w-4/5 pr-4">
            <VideoPlayer stream={screenSharingVideo} />
          </div>
        )}

        <div
          className={`grid gap-2 m-2 ${
            screenSharingVideo ? "w-1/5 grid-col-1" : "grid-cols-4"
          }`}
        >
          {/* <VideoPlayer stream={stream} /> */}
          {screenSharingId !== me?.id && (
            <div>
              <VideoPlayer stream={stream} />
            </div>
          )}

          {Object.values(peersToShow).map((peer) => (
            <>
              {/* {console.log(peer.stream.id)} */}

              {/* key={peer.stream?.id} */}
              <div className="rounded-lg">
                <VideoPlayer stream={peer.stream} />
              </div>
            </>
          ))}
        </div>

        {chat.isChatOpen && (
          <div className="border-l-2 pb-20">
            <Chat />
          </div>
        )}
      </div>
      <div className="fixed gap-2 bottom-0 p-5 w-full flex justify-center border-t-2 bg-white">
        <ShareScreenButton onClick={shareScreen} />
        <ChatButton onClick={toggleChat} />
      </div>
    </div>
  );
}
