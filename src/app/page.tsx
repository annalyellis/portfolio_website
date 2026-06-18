import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      {/* Single fixed background — one image, one overlay, no seams */}
      <div
        className="fixed inset-0 bg-cover bg-center -z-20"
        style={{ backgroundImage: "url('/hero-bg-peaks.jpeg')" }}
      />
      <div className="fixed inset-0 bg-gradient-to-br from-black/65 via-black/50 to-black/40 -z-10" />

      <main>
        <Nav />
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
