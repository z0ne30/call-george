
import { DashboardHeader } from "@/components/DashboardHeader";
import { AppointmentCard } from "@/components/AppointmentCard";
import { QuickBooking } from "@/components/QuickBooking";

// Mock data for demonstration
const mockAppointments = [
  {
    id: "1",
    customerName: "John Smith",
    date: "2024-03-20",
    time: "10:00 AM",
    location: "123 Main St, City",
    price: 150,
    status: "confirmed" as const,
    duration: 60,
    travelTime: 25,
  },
  {
    id: "2",
    customerName: "Sarah Johnson",
    date: "2024-03-20",
    time: "2:30 PM",
    location: "456 Oak Ave, Town",
    price: 200,
    status: "pending" as const,
    duration: 90,
    travelTime: 15,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-8 animate-fadeIn">
      <DashboardHeader />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-lg font-semibold">Today's Appointments</h2>
          <div className="grid gap-4">
            {mockAppointments.map((appointment) => (
              <AppointmentCard key={appointment.id} appointment={appointment} />
            ))}
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <QuickBooking />
        </div>
      </div>
    </div>
  );
};

export default Index;
