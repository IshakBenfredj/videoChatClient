import React, { useContext } from "react";
import { SocketContext } from "../Context";
import Sidebar from "./Sidebar";
import Notifications from "./Notifications";

export default function VideoPlayer() {
  const {
    callAccepted,
    myVideo,
    userVideo,
    callEnded,
    leaveCall,
    toggleMicrophone,
    toggleVideo,
    isMicrophoneOn,
    isVideoOn,
  } = useContext(SocketContext);

  return (
    <div className="w-full mt-5 bg-gray-700/80 rounded-3xl grid md:grid-cols-2 items-center justify-center grid-cols-1 gap-4 overflow-hidden">
      <div className="relative lg:h-full h-60">
        <video
          playsInline
          muted
          ref={myVideo}
          autoPlay
          className="w-full h-full object-contain"
        />
        {callAccepted && !callEnded && (
          <button
            onClick={leaveCall}
            className="p-2 absolute font-bold bg-red-800 text-white w-full z-40 bottom-0"
          >
            close
          </button>
        )}
        <div className="absolute top-0 right-0 p-2 flex gap-2">
          <button
            onClick={toggleMicrophone}
            className={`p-2 ${
              isMicrophoneOn ? "bg-green-700" : "bg-red-700"
            } rounded-full text-white`}
          >
            {isMicrophoneOn ? "Mute" : "Unmute"}
          </button>
          <button
            onClick={toggleVideo}
            className={`p-2 ${
              isVideoOn ? "bg-green-700" : "bg-red-700"
            } rounded-full text-white`}
          >
            {isVideoOn ? "Turn off Video" : "Turn on Video"}
          </button>
        </div>
      </div>

      {callAccepted && !callEnded ? (
        <div className="lg:h-full h-60">
          <video
            playsInline
            ref={userVideo}
            autoPlay
            className="w-full h-full object-contain"
          />
        </div>
      ) : (
        <Sidebar>
          <Notifications />
        </Sidebar>
      )}
    </div>
  );
}
