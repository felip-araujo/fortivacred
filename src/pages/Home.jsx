import About from "../assets/About";
import BusinessModel from "../assets/BusinessModel";
import Contato from "../assets/Contato";
import Footer from "../assets/Footer";
import Hero from "../assets/Hero";
import MarketData from "../assets/Market";
import Header from "../assets/Menu";
import Results from "../assets/Results";
import Services from "../assets/Services";
import Seguros from "./Seguros";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Results />
      <MarketData />
      <About />
      <Seguros />
      <BusinessModel />
      <Contato />
      <Footer />
    </>
  );
}
