
import { Clock, Calendar, MapPin, DollarSign } from "lucide-react";
import { cn } from "@/lib/utils";

interface AppointmentCardProps {
  appointment: {
    id: string;
    customerName: string;
    date: string;
    time: string;
    location: string;
    price: number;
    status: "confirmed" | "pending" | "cancelled";
    duration: number;
    travelTime: number;
  };
}

export const AppointmentCard = ({ appointment }: AppointmentCardProps) => {
  const statusColors = {
    confirmed: "bg-status-confirmed",
    pending: "bg-status-pending",
    cancelled: "bg-status-cancelled",
  };

  return (
    <div className="bg-card p-6 rounded-lg shadow-sm border border-border animate-fadeIn hover:shadow-md transition-shadow duration-200">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className={cn("w-2 h-2 rounded-full", statusColors[appointment.status])} />
          <h3 className="font-medium">{appointment.customerName}</h3>
        </div>
        <span className="text-sm text-muted-foreground capitalize">{appointment.status}</span>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-sm">
          <Calendar className="w-4 h-4" />
          <span>{appointment.date}</span>
          <Clock className="w-4 h-4 ml-2" />
          <span>{appointment.time}</span>
        </div>
        
        <div className="flex items-center gap-2 text-sm">
          <MapPin className="w-4 h-4" />
          <span>{appointment.location}</span>
        </div>
        
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <DollarSign className="w-4 h-4" />
            <span>{appointment.price}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{`${appointment.duration} min (${appointment.travelTime} min travel)`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
