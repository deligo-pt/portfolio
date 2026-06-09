import PageBackground from "@/components/PageBackground";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Codex from "@/components/Codex";
import Leadership from "@/components/Leadership";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <PageBackground />
      <Nav />

      <main id="top">
        <Hero />
        <Timeline />
        <About />
        <Skills />
        <Projects />
        <Codex />
        <Leadership />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
