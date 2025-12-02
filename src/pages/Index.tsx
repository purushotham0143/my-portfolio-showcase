import Header from "@/components/portfolio/Header";
import Hero from "@/components/portfolio/Hero";
import Skills from "@/components/portfolio/Skills";
import Achievements from "@/components/portfolio/Achievements";
import Experience from "@/components/portfolio/Experience";
import CodingProfiles from "@/components/portfolio/CodingProfiles";
import Education from "@/components/portfolio/Education";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Skills />
      <Achievements />
      <Experience />
      <CodingProfiles />
      <Education />
      <Footer />
    </main>
  );
};

export default Index;
