import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Services from "../components/Services";
import TechStack from "../components/TechStack";
import CTA from "../components/CTA";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Services />
        <TechStack />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
