import React from 'react';
import Button from '../../assistants/components/base/Button';
import ActiveCallDetail from '../../assistants/components/ActiveCallDetail';
import { useVapiCall } from '../hooks/useVapiCall';

const Home = () => {
  const [isCallActive, setIsCallActive] = React.useState(false);
  const [assistantIsSpeaking, setAssistantIsSpeaking] = React.useState(false);
  const [volumeLevel, setVolumeLevel] = React.useState(0);

  const handleStartCall = () => {
    setIsCallActive(true);
    // Add call initialization logic here
  };

  const handleEndCall = () => {
    setIsCallActive(false);
    setAssistantIsSpeaking(false);
    setVolumeLevel(0);
    // Add call cleanup logic here
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-4xl font-bold mb-4">Call George</h1>
        <p className="text-xl text-gray-600 mb-8">
          Your AI Home Inspection Assistant
        </p>
        
        {!isCallActive ? (
          <Button 
            label="Start Conversation" 
            onClick={handleStartCall}
          />
        ) : (
          <ActiveCallDetail
            assistantIsSpeaking={assistantIsSpeaking}
            volumeLevel={volumeLevel}
            onEndCallClick={handleEndCall}
          />
        )}
      </div>
    </div>
  );
};

export default Home;