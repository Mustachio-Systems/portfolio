'use client';
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight, Clock, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    // CHANGED: bg-slate-950 -> bg-transparent
    <section id="contact" className="py-24 relative overflow-hidden bg-transparent border-t border-white/5">
      
      {/* Background Gradients (Kept these for subtle effect, but main bg is transparent) */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-indigo-900/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-blue-900/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column: The Pitch */}
            <div>
                <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 border border-emerald-500/30 rounded-full bg-emerald-500/10">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-emerald-300 font-mono text-xs tracking-wider uppercase">
                        Accepting Projects for Q2 2026
                    </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Let&apos;s Engineer <br />
                    <span className="text-indigo-500">Your Vision.</span>
                </h2>
                
                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                    Skip the agency fluff. Partner directly with a Lead Engineer who understands both business strategy and technical execution.
                </p>

                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4 p-4 bg-slate-900/50 border border-slate-800 rounded-xl">
                        <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-lg">
                            <Clock size={24} />
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-sm">Rapid Turnaround</h4>
                            <p className="text-slate-500 text-xs">Most prototypes deployed within 72 hours.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Column: Contact Card */}
            <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-slate-900 border border-slate-800 p-8 md:p-10 rounded-3xl relative overflow-hidden group hover:border-indigo-500/30 transition-all"
            >
                <h3 className="text-2xl font-bold text-white mb-8">Start a Project</h3>
                
                <div className="space-y-4">
                    
                    {/* Option 1: WhatsApp (NEW) */}
                    {/* Using wa.me/19395399445 format for direct chat */}
                    <a 
                        href="https://wa.me/19395399445" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 rounded-xl bg-emerald-950/20 border border-emerald-900/50 hover:bg-emerald-600 hover:border-emerald-500 hover:text-white group/item transition-all cursor-pointer"
                    >
                        <div className="p-3 bg-emerald-900/50 rounded-lg text-emerald-400 group-hover/item:text-emerald-600 group-hover/item:bg-white transition-colors">
                            <MessageCircle size={20} />
                        </div>
                        <div className="flex-grow">
                            <p className="text-xs text-emerald-500 group-hover/item:text-emerald-100 uppercase tracking-wider font-semibold">Instant Chat</p>
                            <p className="text-emerald-200 font-mono text-sm group-hover/item:text-white">WhatsApp Direct Message</p>
                        </div>
                        <ArrowRight className="text-emerald-700 group-hover/item:text-white" size={18} />
                    </a>

                    {/* Option 2: Email */}
                    <a 
                        href="mailto:lapgonzalez96@gmail.com" 
                        className="flex items-center gap-4 p-4 rounded-xl bg-slate-950 border border-slate-800 hover:bg-indigo-600 hover:border-indigo-500 hover:text-white group/item transition-all cursor-pointer"
                    >
                        <div className="p-3 bg-slate-900 rounded-lg text-slate-400 group-hover/item:text-indigo-600 group-hover/item:bg-white transition-colors">
                            <Mail size={20} />
                        </div>
                        <div className="flex-grow">
                            <p className="text-xs text-slate-500 group-hover/item:text-indigo-200 uppercase tracking-wider font-semibold">Email Inquiry</p>
                            <p className="text-slate-200 font-mono text-sm group-hover/item:text-white">lapgonzalez96@gmail.com</p>
                        </div>
                        <ArrowRight className="text-slate-600 group-hover/item:text-white" size={18} />
                    </a>

                    {/* Option 3: Phone */}
                    <a 
                        href="tel:19395399445" 
                        className="flex items-center gap-4 p-4 rounded-xl bg-slate-950 border border-slate-800 hover:bg-indigo-600 hover:border-indigo-500 hover:text-white group/item transition-all cursor-pointer"
                    >
                        <div className="p-3 bg-slate-900 rounded-lg text-slate-400 group-hover/item:text-indigo-600 group-hover/item:bg-white transition-colors">
                            <Phone size={20} />
                        </div>
                        <div className="flex-grow">
                            <p className="text-xs text-slate-500 group-hover/item:text-indigo-200 uppercase tracking-wider font-semibold">Direct Line (PR)</p>
                            <p className="text-slate-200 font-mono text-sm group-hover/item:text-white">+1 (939) 539-9445</p>
                        </div>
                        <ArrowRight className="text-slate-600 group-hover/item:text-white" size={18} />
                    </a>

                    {/* Location Badge */}
                    <div className="flex items-center gap-3 pt-4 border-t border-slate-800 mt-6">
                        <MapPin size={16} className="text-slate-500" />
                        <span className="text-slate-500 text-xs">Based in Puerto Rico. Available Globally.</span>
                    </div>

                </div>
            </motion.div>

        </div>
      </div>
    </section>
  );
}