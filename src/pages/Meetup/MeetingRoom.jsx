import axios from "axios";
import Peer from "peerjs";
import io from "socket.io-client";
import Chat from "../NewMeetings/Chat";
import { useNavigate, useParams } from "react-router-dom";
import { MdOutlineScreenShare } from "react-icons/md";
import React, { useEffect, useRef, useState } from "react";
import { useReactMediaRecorder } from "react-media-recorder";
import {
  BsFillChatRightTextFill,
  BsHandIndexThumb,
  BsRecordCircleFill,
  BsRecordFill,
} from "react-icons/bs";
import { BiSolidHand } from "react-icons/bi";

const MeetingRoom = ({ userId }) => {
  const socket = io("https://zoom-backend-b2ys.onrender.com/");
  // const socket = io('https://galaxy-meeting.onrender.com/')

  const [openChat, setOpenChat] = useState(false);
  const [handRaised, setHandRaised] = useState(false);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ video: true, audio: true });

  const { name } = useParams();
  const { room } = useParams();

  const [ids, setIds] = useState("");
  const [media, setMedia] = useState(null);
  const mediaStream = useRef(null);

  const mydiv = useRef();
  const myvideo = useRef(null);
  const alertbox = useRef();

  const callRef = useRef();
  const peer = new Peer(); // peer js
  const navigate = useNavigate();

  var myvideoStrm;
  const callList = [];
  const answerList = [];

  // create the video box
  const append = (video, stream, name) => {
    video.srcObject = stream;
    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    h1.classList.add("text-3xl", "text-center", "absolute", "capitalize");
    video.addEventListener("loadedmetadata", () => {
      video.play();
    });
    h1.textContent = name;
    div.classList.add(
      "border",
      "rounded",
      "overflow-hidden",
      "bg-slate-400",
      "overflow-hidden",
      "relative",
      "h-fit"
    );
    div.appendChild(h1);
    div.appendChild(video);
    mydiv.current.appendChild(div);
    RemoveUnusedDivs();
  };

  useEffect(() => {
    // generate the user id and send it to other users
    peer.once("open", (id) => {
      setIds(id);
      socket.emit("join", room, id, name);
    });

    // get the user webcam access
    navigator.mediaDevices
      .getUserMedia({ video: { height: 230, width: 300 }, audio: true })
      .then((strm) => {
        myvideoStrm = strm;
        setMedia(strm);
        if (myvideo.current) {
          myvideo.current.srcObject = strm;
        }
      });
  }, []);

  // answering the call
  peer.on("call", (call, id) => {
    socket.on("addname", (username, id) => {
      //get the otheruser name who are calling
      call.answer(myvideoStrm);
      const video = document.createElement("video");
      call.on("stream", (remote) => {
        console.log(remote.getVideoTracks()[0].enabled);
        append(video, remote, username);
      });
      call.on("close", () => {
        video.remove();
        RemoveUnusedDivs();
      });
      callRef.current = call;
      answerList.push({ call });
    });
  });

  socket.on("user-connect", (id, size, username) => {
    // console.log(`new user : ${id}`);
    console.log("new user");
    const found = callList.some((el) => el.id === id);
    // check the user is already in call or not
    if (!found) {
      call(id, username, myvideoStrm);
    }
    socket.emit("tellname", name, id);
  });

  // on other user disconnect or leave the meeting remove him from meeting
  socket.on("user-disconnected", (id) => {
    console.log("disconnected");
    const index = callList.findIndex((peer) => (peer.id = id));
    const index2 = answerList.findIndex((peer) => (peer.peer = id));
    console.log(index2);
    if (index > -1) {
      console.log(callList[index].call);
      callList[index].call.close();
      callList.splice(index, 1);
    }
    if (index2 > -1) {
      answerList[index2].call.close();
      answerList.splice(index2, 1);
    }
  });

  // making a call on other join the room
  const call = (id, username, myvideoStrm) => {
    const call = peer.call(id, myvideoStrm);
    const video = document.createElement("video");
    call.on("stream", (remote) => {
      console.log(callList.includes(id));
      append(video, remote, username);
    });
    call.on("close", () => {
      video.remove();
      RemoveUnusedDivs();
    });
    callList.push({ id, call }); // add in call list
  };

  // remove the blank box in case of there present
  const RemoveUnusedDivs = () => {
    let alldivs = mydiv.current.getElementsByTagName("div");
    for (var i = 0; i < alldivs.length; i++) {
      let e = alldivs[i].getElementsByTagName("video").length;
      if (e === 0) {
        alldivs[i].remove();
      }
    }
  };

  // Munna bhai er code-------
  // video off/on
  const VideoControl = () => {
    const enable = media.getVideoTracks()[0].enabled;
    if (enable) {
      // If Video on
      media.getVideoTracks()[0].enabled = false; // Turn off
      document.getElementById("video").style.color = "red"; // Change Color
    } else {
      document.getElementById("video").style.color = "black"; // Change Color
      media.getVideoTracks()[0].enabled = true; // Turn On
    }
    // ===== another way to do above process ===== //
    // myvideoStrm.getVideoTracks()[0].enabled = !(myvideoStrm.getVideoTracks()[0].enabled);
  };

  // const VideoControl = () => {
  //   if (isScreenSharing) {
  //     // If screen sharing is active, stop it and switch back to the camera
  //     const cameraStream = navigator.mediaDevices.getUserMedia({ video: true, audio: true });
  //     media.srcObject = cameraStream;
  //     setIsScreenSharing(false);
  //     document.getElementById("video").style.color = "black";
  //   } else {
  //     shareScreen();
  //     document.getElementById("video").style.color = "green";
  //   }
  // };

  // const VideoControl = () => {
  //   if (isRecording) {
  //     stopRecording();
  //     setIsRecording(false);
  //   } else if (isScreenSharing) {
  //     // If screen sharing is active, stop it and switch back to the camera
  //     const cameraStream = navigator.mediaDevices.getUserMedia({
  //       video: true,
  //       audio: true,
  //     });
  //     media.srcObject = cameraStream;
  //     setIsScreenSharing(false);
  //     document.getElementById("video").style.color = "black";
  //   } else {
  //     startRecording();
  //     setIsRecording(true);
  //     document.getElementById("video").style.color = "green";
  //   }
  // };

  // const shareScreen = async () => {
  //   try {
  //     const screenStream = await navigator.mediaDevices.getDisplayMedia({ video: true });
  //     const videoTracks = screenStream.getVideoTracks();

  //     // Replace the video track with the screen-sharing track
  //     media.getVideoTracks().forEach(track => {
  //       track.stop();
  //       media.removeTrack(track);
  //     });
  //     media.addTrack(videoTracks[0]);

  //     setIsScreenSharing(true);
  //   } catch (error) {
  //     console.error("Error sharing screen:", error);
  //   }
  // };

  const shareScreen = async () => {
    try {
      if (isScreenSharing) {
        // If screen sharing is active, stop it and stop recording
        stopRecording();
        setIsRecording(false);
        setIsScreenSharing(false);

        // Start recording with the user's camera stream
        startRecording(mediaStream.current);
        setIsRecording(true);
      } else {
        const screenStream = await navigator.mediaDevices.getDisplayMedia({
          video: true,
        });

        // Start recording with the screen sharing stream
        startRecording(screenStream);
        setIsRecording(true);

        // Update the video element with the screen sharing stream
        myvideo.current.srcObject = screenStream;
        setIsScreenSharing(true);
      }
    } catch (error) {
      console.error("Error sharing screen:", error);
    }
    // ===== another way to do above process ===== //
    myvideoStrm.getVideoTracks()[0].enabled =
      !myvideoStrm.getVideoTracks()[0].enabled;
  };

  // mute and unmute function
  const muteUnmute = () => {
    // Mute Audio
    const enabled = media.getAudioTracks()[0].enabled; // Audio tracks are those tracks whose kind property is audio. Chck if array in empty or not
    if (enabled) {
      // If not Mute
      media.getAudioTracks()[0].enabled = false; // Mute
      document.getElementById("audio").style.color = "red";
    } else {
      media.getAudioTracks()[0].enabled = true; // UnMute
      document.getElementById("audio").style.color = "black";
    }
  };

  const handRaise = () => {};

  // ending a call
  const leave = async () => {
    socket.emit("user-left", ids, room);
    media.getTracks().forEach(function (track) {
      track.stop();
    });
    window.location.replace("/");
  };

  // const myUserId = "123";
  useEffect(() => {
    // Handle hand raise event from server
    socket.on("hand-raised", ({ userId }) => {
      // Update UI to indicate a user raised their hand
    });

    // Handle hand lower event from server
    socket.on("hand-lowered", ({ userId }) => {
      // Update UI to indicate a user lowered their hand
    });
  }, []);

  // http://localhost:5173/api/raise-hand

  const handleRaiseHand = async () => {
    try {
      await axios.post("http://localhost:8000/api/raise-hand", { userId });
      setHandRaised(true);
    } catch (error) {
      console.error("Error raising hand:", error);
    }
  };

  const handleLowerHand = async () => {
    try {
      await axios.post("http://localhost:8000/api/lower-hand", { userId });
      setHandRaised(false);
    } catch (error) {
      console.error("Error lowering hand:", error);
    }
  };

  // function for invite the people
  const invite = () => {
    navigator.clipboard.writeText(room);
    alertbox.current.style.display = "block";
    setTimeout(() => {
      alertbox.current.style.display = "none";
    }, 3000);
  };

  // console.log(openChat);
  return (
    <div className="bg-slate-100 px-4 flex h-screen md:p-8">
      <div className="flex-1 flex container mx-auto flex-col ">
        <div
          ref={alertbox}
          className="p-4 hidden absolute w-full left-0 top-0 mb-4 text-sm text-green-700 bg-green-100 rounded dark:bg-green-200 dark:text-green-800"
          role="alert"
        >
          <span className="font-medium">Success alert!</span> Room Code is
          copied
        </div>
        <h2 className="text-center text-green-600 text-4xl capitalize">
          video chat.
        </h2>
        <div className="flex w-full gap-5 justify-between items-center">
          <div
            className=" p-2 box-container flex-1 my-4 flex flex-wrap justify-center gap-4 mx-auto"
            ref={mydiv}
          >
            <div className="left border h-fit rounded overflow-hidden bg-slate-400 relative">
              <h1 className="text-3xl text-center absolute capitalize">You</h1>
              <video muted={true} autoPlay={true} ref={myvideo}></video>
              {mediaBlobUrl && <video src={mediaBlobUrl} controls />}
            </div>
          </div>
          {openChat ? <Chat /> : ""}
        </div>
        <div className="flex container justify-center items-end bg-slate-300 rounded mx-auto gap-6 p-3 md:gap-8">
          <div
            onClick={muteUnmute}
            className="cursor-pointer bg-slate-400 flex justify-center rounded-full items-center p-4"
          >
            <i id="audio" className="fa-solid fa-microphone-slash text-xl"></i>
          </div>
          <div
            onClick={VideoControl}
            className="cursor-pointer bg-slate-400 flex justify-center rounded-full items-center p-4"
          >
            <i id="video" className="fa-solid fa-video-slash text-xl"></i>
          </div>
          <div
            onClick={invite}
            className="cursor-pointer bg-slate-400 flex justify-center rounded-full items-center p-4"
          >
            <i className="fa-solid fa-user-plus text-xl"></i>
          </div>
          <div
            onClick={shareScreen}
            className="cursor-pointer bg-slate-400 flex justify-center rounded-full items-center p-4"
          >
            <MdOutlineScreenShare />
          </div>
          {/* <button onClick={handRaised ? handleLowerHand : handleRaiseHand}>
            {handRaised ? "Lower Hand" : "Raise Hand"}
          </button> */}
          <div
            onClick={handRaise}
            className="cursor-pointer bg-slate-400 flex justify-center rounded-full items-center p-4"
          >
            <BiSolidHand size={24} />
          </div>
          <div
            onClick={startRecording}
            className="cursor-pointer flex justify-center rounded-full items-center p-4 bg-slate-400"
          >
            <BsRecordFill />
          </div>
          <div
            onClick={stopRecording}
            className="cursor-pointer flex justify-center rounded-full items-center p-4 bg-slate-400"
          >
            <BsRecordCircleFill />
          </div>
          <div
            onClick={leave}
            className="cursor-pointer flex justify-center rounded-full items-center p-4 bg-red-600"
          >
            <i className="fa-solid fa-phone text-xl"></i>
          </div>
          <div
            onClick={() => setOpenChat(!openChat)}
            className="cursor-pointer flex justify-center rounded-full items-center p-4 bg-slate-400"
          >
            <BsFillChatRightTextFill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetingRoom;
