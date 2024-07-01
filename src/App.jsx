import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, Search, FileText, Info } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/navbar";
import Index from "./pages/Index.jsx";
import Sightings from "./pages/Sightings.jsx";
import Reports from "./pages/Reports.jsx";
import About from "./pages/About.jsx";
const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
  },
{
    title: "Sightings",
    to: "/sightings",
    icon: <Search className="h-4 w-4" />,
  },
  {
    title: "Reports",
    to: "/reports",
    icon: <FileText className="h-4 w-4" />,
  },
  {
    title: "About",
    to: "/about",
    icon: <Info className="h-4 w-4" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="sightings" element={<Sightings />} />
              <Route path="reports" element={<Reports />} />
              <Route path="about" element={<About />} />
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
