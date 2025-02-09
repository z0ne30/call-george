import React from "react";
import { Button } from "@/components/ui/button";

interface ActiveCallDetailProps {
  assistantIsSpeaking: boolean;
  volumeLevel: number;
  onEndCallClick: () => void;
}

const ActiveCallDetail = ({
  assistantIsSpeaking,
  volumeLevel,
  onEndCallClick,
}: ActiveCallDetailProps) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center gap-2">
        <div
          className={`w-3 h-3 rounded-full ${
            assistantIsSpeaking ? "bg-green-500" : "bg-red-500"
          }`}
        />
        <span className="text-sm text-gray-600">
          {assistantIsSpeaking ? "Speaking" : "Listening"}
        </span>
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-green-500 h-2.5 rounded-full transition-all duration-200"
          style={{ width: `${volumeLevel * 100}%` }}
        />
      </div>

      <Button 
        variant="destructive"
        onClick={onEndCallClick}
      >
        End Call
      </Button>
    </div>
  );
};

export default ActiveCallDetail;