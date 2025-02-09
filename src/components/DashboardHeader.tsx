
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export const DashboardHeader = () => {
  return (
    <div className="flex items-center justify-between pb-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Appointments Dashboard</h1>
        <p className="text-muted-foreground">Manage appointments and contractor dispatch</p>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search appointments..."
            className="pl-10 w-[250px]"
          />
        </div>
        <Button>New Appointment</Button>
      </div>
    </div>
  );
};
