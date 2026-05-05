import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import AOS from "aos";
import "aos/dist/aos.css";

import Hero from "./assets/Hero.jsx";
import QuemSomos from "./assets/About.jsx";
import Services from "./assets/Services.jsx";
import MarketData from "./assets/Market.jsx";
import Results from "./assets/Results.jsx";
import BusinessModel from "./assets/BusinessModel.jsx";

AOS.init({
  duration: 1000,
  once: true,
  offset: 100,
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Hero />
    <Results />
    <MarketData />
    <QuemSomos />
    <Services />
    <BusinessModel />
  </StrictMode>,
);
