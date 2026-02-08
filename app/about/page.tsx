'use client';
import { motion } from "framer-motion";
import { Target, Gamepad2, Cpu, Users, Zap, Terminal } from 'lucide-react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InteractiveBackground from "@/components/InteractiveBackground";
import TechTicker from "@/components/TechTicker";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Mustachio Systems",
  description: "Learn more about Mustachio Systems and the executive engineering approach.",
};

export default function About() {
  return (
    <main className="min-h-screen relative selection:bg-indigo-500/30 font-sans text-slate-300">
      
      {/* Background Layer */}
      <InteractiveBackground />

      <div className="relative z-10">
        <Navbar />

        {/* 1. Hero: The Architect */}
        <section className="pt-40 pb-20 px-6">
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    
                    {/* Left: Text */}
                    <div className="flex-1">
                        <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 border border-indigo-500/30 rounded-full bg-indigo-500/10 backdrop-blur-md">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                            </span>
                            <span className="text-indigo-300 font-mono text-xs tracking-wider uppercase">
                                System Architect // Online
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                            Luis Pena <br/> <span className="text-slate-500">Gonzalez.</span>
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed mb-8">
                            I am the bridge between human intent and machine execution. 
                            <br /><br />
                            {'Operating from <strong>Puerto Rico</strong>, I built Mustachio Systems to reject the bloated "agency model." Instead, I offer a direct line to senior-level engineering—pure, efficient, and precise.'}
                        </p>
                    </div>

                    {/* Right: The "Profile" Glitch Effect */}
                    <div className="relative w-64 h-64 md:w-80 md:h-80">
                        <div className="absolute inset-0 border-2 border-indigo-500/30 rounded-full animate-[spin_10s_linear_infinite]" />
                        <div className="absolute inset-4 border border-slate-700 rounded-full border-dashed animate-[spin_15s_linear_infinite_reverse]" />
                        <div className="absolute inset-0 flex items-center justify-center bg-slate-900/80 backdrop-blur-sm rounded-full border border-white/10">
                            <Terminal size={64} className="text-white" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* 2. The Tech Ticker (Movement) */}
        <TechTicker />

        {/* 3. "Operator Stats" (The Hobbies Reimagined) */}
        <section className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">Core System Protocols</h2>
                    <p className="text-slate-400">The personal traits that power the professional output.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    
                    {/* Card 1: Archery -> Precision */}
                    <motion.div 
                        whileHover={{ y: -5 }}
                        className="group relative p-8 rounded-xl bg-slate-900/40 border border-white/5 overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Target size={80} />
                        </div>
                        <div className="mb-4 p-3 bg-emerald-500/10 w-fit rounded-lg text-emerald-400">
                            <Target size={24} />
                        </div>
                        <h3 className="text-white font-bold mb-2">Target Acquisition</h3>
                        <p className="text-xs text-slate-500 font-mono uppercase tracking-widest mb-4">Origin: Archery</p>
                        <p className="text-sm text-slate-400 leading-relaxed">
                            90% of the shot happens before release. I apply this ballistic discipline to code: measure twice, cut once. Zero wasted cycles.
                        </p>
                    </motion.div>

                    {/* Card 2: Gaming -> Strategy */}
                    <motion.div 
                        whileHover={{ y: -5 }}
                        className="group relative p-8 rounded-xl bg-slate-900/40 border border-white/5 overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Gamepad2 size={80} />
                        </div>
                        <div className="mb-4 p-3 bg-purple-500/10 w-fit rounded-lg text-purple-400">
                            <Gamepad2 size={24} />
                        </div>
                        <h3 className="text-white font-bold mb-2">Tactical Logic</h3>
                        <p className="text-xs text-slate-500 font-mono uppercase tracking-widest mb-4">Origin: Gaming</p>
                        <p className="text-sm text-slate-400 leading-relaxed">
                            Complex systems are just levels to be beaten. I use the problem-solving reflexes honed in virtual simulations to debug real-world architectures.
                        </p>
                    </motion.div>

                    {/* Card 3: Tech -> Automation */}
                    <motion.div 
                        whileHover={{ y: -5 }}
                        className="group relative p-8 rounded-xl bg-slate-900/40 border border-white/5 overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Cpu size={80} />
                        </div>
                        <div className="mb-4 p-3 bg-blue-500/10 w-fit rounded-lg text-blue-400">
                            <Zap size={24} />
                        </div>
                        <h3 className="text-white font-bold mb-2">Auto-Regulation</h3>
                        <p className="text-xs text-slate-500 font-mono uppercase tracking-widest mb-4">Origin: Automation</p>
                        <p className="text-sm text-slate-400 leading-relaxed">
                            I don&apos;t work for tech; tech works for me. If a task is repetitive, I script it. I build self-healing systems that require minimal maintenance.
                        </p>
                    </motion.div>

                    {/* Card 4: Friends -> Communication */}
                    <motion.div 
                        whileHover={{ y: -5 }}
                        className="group relative p-8 rounded-xl bg-slate-900/40 border border-white/5 overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Users size={80} />
                        </div>
                        <div className="mb-4 p-3 bg-pink-500/10 w-fit rounded-lg text-pink-400">
                            <Users size={24} />
                        </div>
                        <h3 className="text-white font-bold mb-2">Human Interface</h3>
                        <p className="text-xs text-slate-500 font-mono uppercase tracking-widest mb-4">Origin: Community</p>
                        <p className="text-sm text-slate-400 leading-relaxed">
                            Code is useless if it doesn&apos;t serve people. My offline time with friends grounds my work, ensuring I build user-centric, empathetic software.
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>

        {/* 4. The Value Proposition */}
        <section className="py-20 border-t border-white/5 bg-slate-950/50">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-white mb-8">Why &quot;Studio of One&quot;?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-6">
                        <div className="text-4xl font-bold text-indigo-500 mb-2">100%</div>
                        <div className="text-sm text-slate-400">Code Ownership (No Juniors)</div>
                    </div>
                    <div className="p-6 border-x border-white/5">
                        <div className="text-4xl font-bold text-indigo-500 mb-2">2x</div>
                        <div className="text-sm text-slate-400">Deployment Velocity</div>
                    </div>
                    <div className="p-6">
                        <div className="text-4xl font-bold text-indigo-500 mb-2">Direct</div>
                        <div className="text-sm text-slate-400">Communication Line</div>
                    </div>
                </div>
                
                <div className="mt-12">
                     <Link 
                        href="/#contact" 
                        className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-white transition-all bg-indigo-600 rounded-lg hover:bg-indigo-500 shadow-lg shadow-indigo-500/25"
                    >
                        Deploy Your Project
                    </Link>
                </div>
            </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}