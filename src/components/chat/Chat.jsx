import { useContext } from "react";
import { ChatBubble } from "./ChatBubble";
import { ChatInput } from "./ChatInput";
import { RoomContext } from "../../context/RoomContext";

export const Chat = () => {
  const { chat } = useContext(RoomContext);

  return (
    <div
      className="flex flex-col h-full justify-between w-72"
      data-testid="chat"
    >
      <div>
        {Array.isArray(chat.messages) &&
          chat.messages.map((message) => (
            <ChatBubble message={message} key={message.timestamp} />
          ))}
      </div>
      <ChatInput />
    </div>
  );
};
