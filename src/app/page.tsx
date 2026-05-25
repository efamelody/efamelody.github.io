import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PortfolioGrid from "@/components/PortfolioGrid";
import About from "@/components/About";
import Experience from "@/components/Experience";
import UniversityInvolvements from "@/components/UniversityInvolvements";
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
      <UniversityInvolvements />
      <Contact />
      <Footer />
    </>
  );
}
