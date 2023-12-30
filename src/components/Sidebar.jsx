import React, { useContext, useState } from "react";
import { SocketContext } from "../Context";
import CopyToClipboard from "react-copy-to-clipboard";

export default function Sidebar({ children }) {
  const { me, callAccepted, setName, callEnded, callUser } =
    useContext(SocketContext);

  const [idToCall, setIdToCall] = useState("");
  return (
    <div className="flex justify-center items-center flex-col gap-5 p-4">
      <input
        type="text"
        className="p-2 md:w-80 w-60 outline-none border-none rounded"
        onChange={(e) => setName(e.target.value)}
        placeholder="your name"
      />
      <CopyToClipboard text={me}>
        <button className="capitalize text-white font-bold bg-purple-700 p-3 rounded-lg">
          copy your id
        </button>
      </CopyToClipboard>
      {children}
      <div className="flex gap-2">
        {callAccepted && !callEnded ? (
          <></>
        ) : (
          <>
            <input
              type="text"
              className="p-2 md:w-80 w-60 outline-none border-none rounded"
              onChange={(e) => setIdToCall(e.target.value)}
              placeholder="id to call"
            />
            <button
              className="p-2 font-bold bg-green-800 text-white rounded"
              onClick={() => callUser(idToCall)}
            >
              Call
            </button>
          </>
        )}
      </div>
    </div>
  );
}