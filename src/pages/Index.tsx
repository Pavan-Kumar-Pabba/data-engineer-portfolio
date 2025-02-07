
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificationsSection from "@/components/CertificationsSection";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary via-background to-accent/20 pt-16">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/c09136fe-032f-43b9-8ddb-eec1f8beb6bd.png')] opacity-5 bg-repeat"></div>
      <Navigation />
      <div id="hero">
        <HeroSection />
      </div>
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <CertificationsSection />
      <Footer />
    </div>
  );
};

export default Index;
