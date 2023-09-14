import React from "react";
import img from "../../../assets/Luffy.png";
import { BsSendFill } from "react-icons/bs";
import ScrollableFeed from "react-scrollable-feed";

const ChatWindow = ({ userDefault, messages, handleMessage}) => {

  // console.log("userDefault", userDefault, "messages" , messages );

  return (
    <div className="relative md:mb-5 rounded-md  bg-slate-300">
      <ScrollableFeed className="max-h-[calc(100%-2px)] overflow-y-auto">
        <div className="h-[60vh] overflow-auto relative text-center mt-5 flex flex-col p-4">
          {messages.map((message, i) => {
            return message.type === "UserStatus" ? (
              <div key={i} className="my-2 py-1">
                <span className="badge bg-neutral-600 text-white px-5  rounded text-lg py-3">
                  {message.userId === userDefault.userId
                    ? "You have joined!"
                    : `${message.username} has Joined!`}
                </span>
              </div>
            ) : (
              <div
                key={i}
                className={
                  `${message.userId === userDefault.userId
                    ? "flex ml-auto pb-4 "
                    : "mr-auto pb-4 flex-row-reverse"} pt-5`
                }
              >
                <div className="flex flex-col items-center">
                  <div className={message.userId === userDefault.userId ? "flex flex-row-reverse ml-auto pb-4 " : 'flex mr-auto pb-4 '}>
                    <div >
                      <div className="w-16 rounded-full mr-1">
                        <img src={message.photoURL} className='rounded-full' title={message.username} />
                      </div>
                    </div>
                    {/* msg */}
                    <div className="flex-shrink-1 bg-slate-400 rounded py-2 px-3 mx-2 text-black">
                      <div className="font-bold mb-1">
                        {message.userId === userDefault.userId
                          ? "You"
                          : message.username}
                      </div>
                      {message.message}
                    </div>
                  </div>
                  {message.time}
                </div>

              </div>
            );
          })}
        </div>
      </ScrollableFeed>

      <form
        onSubmit={handleMessage}
        className="p-5 flex flex-col md:flex-row items-center"
      >
        <div className="form-control w-full flex-1">
          <input
            type="text"
            name="textMessage"
            placeholder="Type your message..."
            className="rounded-md lg:rounded-r-none text-xl w-full p-2"
            required
          />
        </div>
        <button className="py-2 px-5 items-center rounded-md flex justify-between w-[200px] bg-black text-white text-xl lg:rounded-l-none mt-5 md:mt-0">
          <input type="submit" className="cursor-pointer" value="Send" />
          <BsSendFill />
        </button>
      </form>
    </div>
  );
};

export default ChatWindow;
