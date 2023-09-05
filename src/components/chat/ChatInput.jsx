import { useContext, useState } from "react";
import { Button } from "../common/Button";
import { RoomContext } from "../../context/RoomContext";

export const ChatInput = () => {
  const [message, setMessage] = useState("");
  const { sendMessage } = useContext(RoomContext);
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage(message);
          setMessage("");
        }}
      >
        <div className="flex m-2">
          <textarea
            className="border rounded h-12 w-10/12"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            style={{ resize: "none" }}
          />
          <Button
            testId="send-msg-button"
            type="submit"
            className="bg-green-400 px-4 ml-2 rounded-lg text-xl hover:bg-green-600 text-white"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};
