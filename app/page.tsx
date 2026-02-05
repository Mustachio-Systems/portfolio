import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import InteractiveBackground from "@/components/InteractiveBackground"; // Import new component

export default function Home() {
  return (
    // REMOVE 'bg-slate-950' from here so we don't double stack backgrounds
    <main className="min-h-screen relative selection:bg-indigo-500/30">
      
      {/* 1. The Interactive Layer (z-0) */}
      <InteractiveBackground />

      {/* 2. The Content Layer (z-10) */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Footer />
      </div>
      
    </main>
  );
}