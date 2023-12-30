import React, { useContext } from 'react';
import { SocketContext } from '../Context';

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  return (
    <>
      {call.isReceivingCall && !callAccepted && (
        <div className='flex justify-center items-center gap-3'>
          <h1 className='font-bold text-white capitalize'>{call.name || 'someone'} is calling:</h1>
          <button onClick={answerCall} className='p-2 bg-green-700 rounded font-bold text-white capitalize'>
            Answer
          </button>
        </div>
      )}
    </>
  );
};

export default Notifications;