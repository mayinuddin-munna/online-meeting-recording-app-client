import io from 'socket.io-client';
import React, { useEffect, useRef, useState } from 'react';

const socket = io(); // Connect to the Socket.IO server

function Video() {
  const [roomId, setRoomId] = useState(null);
  const [localStream, setLocalStream] = useState(null);
  const [remoteStreams, setRemoteStreams] = useState([]);
  const localVideoRef = useRef(null);
  const remoteVideosRef = useRef([]);

  useEffect(() => {
    const initLocalStream = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      localVideoRef.current.srcObject = stream;
      setLocalStream(stream);

      socket.emit('create or join', roomId);
    };

    initLocalStream();

    socket.on('created', (room) => {
      console.log(`Created room ${room}`);
    });

    socket.on('joined', (room) => {
      console.log(`Joined room ${room}`);
    });

    socket.on('ready', () => {
      console.log('Ready to initiate WebRTC connections');
    });

    socket.on('message', (message, senderId) => {
      console.log(`Received message from ${senderId}:`, message);

      if (message.type === 'offer' || message.type === 'answer') {
        const peerConnection = createPeerConnection(senderId);
        peerConnection.setRemoteDescription(new RTCSessionDescription(message));
      } else if (message.type === 'candidate') {
        const peerConnection = getPeerConnection(senderId);
        if (peerConnection) {
          peerConnection.addIceCandidate(new RTCIceCandidate(message));
        }
      }
    });

    return () => {
      if (localStream) {
        localStream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [roomId]);

  const createPeerConnection = (peerId) => {
    const peerConnection = new RTCPeerConnection();
    peerConnection.addStream(localStream);

    peerConnection.onicecandidate = (event) => {
      if (event.candidate) {
        socket.emit('message', event.candidate, socket.id, peerId);
      }
    };

    peerConnection.onaddstream = (event) => {
      const remoteVideo = remoteVideosRef.current[peerId];
      if (remoteVideo) {
        remoteVideo.srcObject = event.stream;
        setRemoteStreams((prevStreams) => [...prevStreams, event.stream]);
      }
    };

    return peerConnection;
  };

  const getPeerConnection = (peerId) => {
    // You could maintain a list of peer connections here if needed
    // For simplicity, this example just creates a new peer connection every time
    return createPeerConnection(peerId);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold mb-4">WebRTC Video Conference</h1>
        <div className="flex space-x-4 mb-4">
          <video
            ref={localVideoRef}
            autoPlay
            muted
            className="w-1/2 rounded-lg shadow"
          ></video>
          {remoteStreams.map((stream, index) => (
            <video
              key={index}
              ref={(el) => (remoteVideosRef.current[index] = el)}
              autoPlay
              className="w-1/2 rounded-lg shadow"
            ></video>
          ))}
        </div>
        <div className="flex">
          <input
            type="text"
            placeholder="Enter Room ID"
            className="rounded-l-lg p-2 border border-r-0 border-gray-400 focus:outline-none"
            onChange={(e) => setRoomId(e.target.value)}
          />
          <button
            className="rounded-r-lg px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 focus:outline-none"
            onClick={() => socket.emit('create or join', roomId)}
          >
            Join Room
          </button>
        </div>
      </div>
    </div>
  );
}

export default Video;
