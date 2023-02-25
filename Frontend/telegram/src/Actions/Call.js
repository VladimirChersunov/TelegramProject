import React, { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';

function Call() {
  const [isConnected, setIsConnected] = useState(false);
  const [isCalling, setIsCalling] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const socketRef = useRef(null);
  const localStreamRef = useRef(null);
  const remoteStreamRef = useRef(null);
  const mediaStreamConstraints = {
    video: true,
    audio: true
  };

  useEffect(() => {
    const socket = io('https://your-backend-server.com');
    socketRef.current = socket;

    socket.on('connect', () => {
      setIsConnected(true);
    });

    socket.on('call', async (data) => {
      await handleCall(data.from, data.signal);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const handleCall = async (from, signal) => {
    try {
      const peerConnection = new RTCPeerConnection();
      peerConnection.onicecandidate = (event) => {
        if (event.candidate) {
          socketRef.current.emit('ice-candidate', {
            from: socketRef.current.id,
            to: from,
            candidate: event.candidate
          });
        }
      };
      peerConnection.ontrack = (event) => {
        remoteVideoRef.current.srcObject = event.streams[0];
        remoteStreamRef.current = event.streams[0];
      };

      await peerConnection.setRemoteDescription(signal);
      const answer = await peerConnection.createAnswer();
      await peerConnection.setLocalDescription(answer);

      socketRef.current.emit('answer', {
        from: socketRef.current.id,
        to: from,
        signal: answer
      });

      peerConnection.addStream(localStreamRef.current);
    } catch (error) {
      console.error(error);
    }
  };

  const handleStartCall = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia(mediaStreamConstraints);
      localStreamRef.current = stream;
      localVideoRef.current.srcObject = stream;
      setIsCalling(true);

      socketRef.current.emit('call', {
        from: socketRef.current.id
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleAnswerCall = async (from, signal) => {
    try {
    const peerConnection = new RTCPeerConnection();
    peerConnection.onicecandidate = (event) => {
    if (event.candidate) {
    socketRef.current.emit('ice-candidate', {
    from: socketRef.current.id,
    to: from,
    candidate: event.candidate
    });
    }
    };
    peerConnection.ontrack = (event) => {
    remoteVideoRef.current.srcObject = event.streams[0];
    remoteStreamRef.current = event.streams[0];
    };
    await peerConnection.setRemoteDescription(signal);
  const answer = await peerConnection.createAnswer();
  await peerConnection.setLocalDescription(answer);

  socketRef.current.emit('answer', {
    from: socketRef.current.id,
    to: from,
    signal: answer
  });

  peerConnection.addStream(localStreamRef.current);
} catch (error) {
  console.error(error);
}}

  
   
  


  const handleMute = () => {
  localStreamRef.current.getAudioTracks().forEach(track => {
  track.enabled = !track.enabled;
  });
  setIsMuted(!isMuted);}

   

const handleHangUp = () => {
remoteVideoRef.current.srcObject = null;
remoteStreamRef.current.getTracks().forEach(track => track.stop());
setIsCalling(false);
};

return (
<div>
<div>
{isConnected ? (
<button onClick={handleStartCall} disabled={isCalling}>
{isCalling ? 'Calling...' : 'Start Call'}
</button>
) : (
<p>Connecting...</p>
)}
{isCalling && (
<>
<button onClick={handleMute}>
{isMuted ? 'Unmute' : 'Mute'}
</button>
<button onClick={handleHangUp}>Hang Up</button>
</>
)}
</div>
<div>
<video ref={localVideoRef} muted autoPlay />
<video ref={remoteVideoRef} autoPlay />
</div>
</div>
);

}

export default Call;