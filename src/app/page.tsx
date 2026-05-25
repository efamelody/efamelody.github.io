import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PortfolioGrid from "@/components/PortfolioGrid";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Dissertation from "@/components/Dissertation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <PortfolioGrid />
      <About />
      <Experience />
      <Dissertation />
      <Contact />
      <Footer />
    </>
  );
}
