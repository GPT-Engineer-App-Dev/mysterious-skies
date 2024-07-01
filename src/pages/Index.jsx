import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="text-center space-y-4">
      <div className="relative h-64 w-full bg-cover bg-center" style={{ backgroundImage: 'url(/images/night-sky.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative text-4xl text-white font-bold pt-24">Welcome to UFO Sightings in the USA</h1>
      </div>
      <p className="text-lg">
        Discover and report UFO sightings across the USA. Join our community of enthusiasts and keep track of the latest sightings.
      </p>
      <Button variant="primary" size="lg">Explore Sightings</Button>
    </div>
  );
};

export default Index;
