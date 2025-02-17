import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievmentsSection from "./components/AchievmentsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <NavBar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <section id="hero">
          <HeroSection />
        </section>
          <AchievmentsSection />
        <section id="about">
          <AboutSection />
        </section>
        <section id="projects">
          <ProjectsSection />
        </section>
        <section id="contact">
          <EmailSection />
        </section>
      </div>
      <Footer />
    </main>
  );
}
