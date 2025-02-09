import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

interface Contractor {
  id: string;
  name: string;
  bio: string;
}

const Contractors = () => {
  const [contractors, setContractors] = useState<Contractor[]>([]);
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !bio.trim()) return;

    const newContractor: Contractor = {
      id: Date.now().toString(),
      name: name.trim(),
      bio: bio.trim(),
    };

    setContractors([...contractors, newContractor]);
    setName("");
    setBio("");
  };

  return (
    <div className="min-h-screen bg-background p-8 animate-fadeIn">
      <h1 className="text-2xl font-bold mb-8">Contractor Management</h1>

      <Card className="p-6 mb-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Contractor Name
            </label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter contractor name"
              className="w-full"
            />
          </div>

          <div>
            <label htmlFor="bio" className="block text-sm font-medium mb-1">
              Bio
            </label>
            <Textarea
              id="bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Enter contractor bio"
              className="w-full h-32"
            />
          </div>

          <Button type="submit">Add Contractor</Button>
        </form>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {contractors.map((contractor) => (
          <Card key={contractor.id} className="p-4">
            <h3 className="font-semibold mb-2">{contractor.name}</h3>
            <p className="text-sm text-gray-600">{contractor.bio}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Contractors;