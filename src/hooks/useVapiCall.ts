import { useState, useCallback, useEffect } from 'react';
import { VapiService } from '../lib/vapi';

const vapiService = new VapiService();

export const useVapiCall = () => {
  const [isCallActive, setIsCallActive] = useState(false);
  const [assistantIsSpeaking, setAssistantIsSpeaking] = useState(false);
  const [volumeLevel, setVolumeLevel] = useState(0);
  const [currentCall, setCurrentCall] = useState(null);

  const startCall = useCallback(async () => {
    try {
      const call = await vapiService.startCall();
      setCurrentCall(call);
      setIsCallActive(true);

      call.on('speaking', (speaking) => {
        setAssistantIsSpeaking(speaking);
      });

      call.on('volume', (volume) => {
        setVolumeLevel(volume);
      });

    } catch (error) {
      console.error('Failed to start call:', error);
    }
  }, []);

  const endCall = useCallback(async () => {
    if (currentCall) {
      await currentCall.stop();
      setCurrentCall(null);
      setIsCallActive(false);
      setAssistantIsSpeaking(false);
      setVolumeLevel(0);
    }
  }, [currentCall]);

  useEffect(() => {
    return () => {
      if (currentCall) {
        currentCall.stop();
      }
    };
  }, [currentCall]);

  return {
    isCallActive,
    assistantIsSpeaking,
    volumeLevel,
    startCall,
    endCall,
  };
};