import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import DemoDock from "./components/DemoDock";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import Pathways from "./pages/Pathways";
import HowItWorks from "./pages/HowItWorks";
import Stories from "./pages/Stories";
import Consultation from "./pages/Consultation";

export default function App() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/pathways" element={<Pathways />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/consultation" element={<Consultation />} />
        </Routes>
      </AnimatePresence>
      <DemoDock />
    </>
  );
}
