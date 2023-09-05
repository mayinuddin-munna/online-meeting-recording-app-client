import React from "react";
import img from "../../../assets/Luffy.png";
import { BsSendFill } from "react-icons/bs";
import ScrollableFeed from "react-scrollable-feed";

const ChatWindow = ({ user, messages, handleMessage }) => {
  return (
    <div className="relative mt-10 border-2 border-black rounded-md mx-5 md:mx-20 lg:mx-40 bg-slate-500">
      <div className="flex items-center sticky-top justify-start gap-5 border-b-[1px] border-black mx-auto">
        <div className="avatar">
          <div className="w-24 rounded-full">
            <img src={img} />
          </div>
        </div>
        <div className="text-xl lg:text-3xl text-center Caprasimo">
          <p>
            Logged in as {' '}
            <span className="text-2xl lg:text-3xl font-bold">
               {user.username}
            </span>
          </p>
        </div>
      </div>
      <ScrollableFeed className="max-h-[calc(100%-2px)] overflow-y-auto">
        <div className="h-[60vh] overflow-auto relative text-center mt-5 flex flex-col p-4">
          {messages.map((message, i) => {
            return message.type === "UserStatus" ? (
              <div key={i} className="my-2 py-1">
                <span className="badge bg-neutral-600 text-white px-5  rounded text-lg py-3">
                  {message.userId === user.userId
                    ? "You have joined!"
                    : `${message.username} has Joined!`}
                </span>
              </div>
            ) : (
              <div
                key={i}
                className={
                 `${ message.userId === user.userId
                  ? "flex ml-auto pb-4 "
                  : "mr-auto pb-4 flex-row-reverse"} pt-5`
                }
              >
                <div className={message.userId === user.userId ? "flex flex-row-reverse ml-auto pb-4 " : 'flex mr-auto pb-4 '}>
                  <div >
                    <div className="w-16 rounded-full mr-1">
                      <img src={img} title={message.username} />
                    </div>
                  </div>
                  {/* msg */}
                  <div className="flex-shrink-1 bg-slate-400 rounded py-2 px-3 ml-3 text-black">
                    <div className="font-bold mb-1">
                      {message.userId === user.userId
                        ? "You"
                        : message.username}
                    </div>
                    {message.message}
                  </div>
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
          <input type="submit" value="Send" />
          <BsSendFill />
        </button>
      </form>
    </div>
  );
};

export default ChatWindow;
