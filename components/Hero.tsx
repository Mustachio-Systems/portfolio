'use client';
import { motion } from "framer-motion";
import { ArrowRight, Code2 } from "lucide-react";
import Work from "@/app/work/page";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 relative overflow-hidden pt-20">
      
      {/* BACKGROUND DIVS REMOVED HERE - Allowing InteractiveBackground to show */}

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 max-w-4xl mx-auto"
      >
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 border border-slate-800 rounded-full bg-slate-900/50 backdrop-blur-md">
            <Code2 size={14} className="text-indigo-400"/>
            <span className="text-slate-400 font-mono text-xs tracking-wider uppercase">
                Mustachio Systems // Est. 2026
            </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-white">
          Executive Engineering. <br />
          <span className="text-indigo-500">Direct Execution.</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-slate-400 text-lg md:text-xl mb-10 leading-relaxed">
          I provide the technical firepower of an agency with the agility of a solo partner. 
          Specializing in <span className="text-slate-200">Full-Stack Architecture</span> and <span className="text-slate-200">QA Automation</span> for businesses that need speed without the bloat.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/expertise" 
              className="px-8 py-4 bg-white text-slate-950 hover:bg-slate-200 font-bold rounded-lg transition-all flex items-center gap-2"
            >
               My Expertise <ArrowRight size={18} />
            </a>
            
            <a 
              href="/work"
              className="px-8 py-4 border border-slate-800 hover:border-slate-600 hover:bg-slate-900/50 text-white rounded-lg transition-all"
            >
                View Selected Work
            </a>
        </div>
      </motion.div>
    </section>
  );
}