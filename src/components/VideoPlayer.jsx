import React, { useContext } from "react";
import { SocketContext } from "../Context";
import Sidebar from "./Sidebar";
import Notifications from "./Notifications";

export default function VideoPlayer() {
  const { callAccepted, myVideo, userVideo, callEnded, stream, leaveCall } =
    useContext(SocketContext);

  return (
    <div className="w-full mt-5 bg-gray-700/80 rounded-3xl grid md:grid-cols-2 grid-cols-1 gap-4 overflow-hidden">
      {stream ? (
        <div className="relative">
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
        </div>
      ) : (
        <div className="p-4 text-white font-bold">No Video Camera</div>
      )}
      {callAccepted && !callEnded ? (
        <div>
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
