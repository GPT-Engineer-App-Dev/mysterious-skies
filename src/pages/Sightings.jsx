import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const sightingsData = [
  {
    date: "2023-10-01",
    location: "Roswell, NM",
    description: "Bright light moving erratically in the sky.",
    image: "/images/sighting1.jpg",
  },
  {
    date: "2023-09-15",
    location: "Area 51, NV",
    description: "Unidentified flying object spotted near the base.",
    image: "/images/sighting2.jpg",
  },
  // Add more sightings here
];

const Sightings = () => {
  const [search, setSearch] = useState("");

  const filteredSightings = sightingsData.filter(
    (sighting) =>
      sighting.date.includes(search) || sighting.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <Input
        placeholder="Search by date or location"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredSightings.map((sighting, index) => (
          <Card key={index}>
            <img src={sighting.image} alt={sighting.location} className="h-48 w-full object-cover" />
            <CardHeader>
              <CardTitle>{sighting.location}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{sighting.date}</p>
              <p>{sighting.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Sightings;