'use client';
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, MapPin, Send, ArrowRight, Clock, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InteractiveBackground from "@/components/InteractiveBackground";

export default function Contact() {
  
  // Form Logic
  const [formData, setFormData] = useState({
      name: '',
      email: '',
      projectType: 'Web Application Development',
      message: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setStatus('loading');

      // Prepare Data for Web3Forms
      const data = {
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY, 
        subject: `New Project: ${formData.projectType}`,
        from_name: formData.name,
        email: formData.email,
        message: formData.message,
        project_type: formData.projectType 
      };

      try {
          const res = await fetch('https://api.web3forms.com/submit', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(data),
          });

          const result = await res.json();

          if (result.success) {
              setStatus('success');
              setFormData({ name: '', email: '', projectType: 'Web Application Development', message: '' }); 
          } else {
              setStatus('error');
          }
      } catch (error) {
          setStatus('error');
      }
  };

  return (
    <main className="min-h-screen relative selection:bg-indigo-500/30 font-sans text-slate-300">
      <InteractiveBackground />
      <div className="relative z-10">
        <Navbar />

        <section className="pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                
                {/* LEFT COLUMN: Info & Links */}
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 border border-emerald-500/30 rounded-full bg-emerald-500/10 backdrop-blur-md">
                         <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                         <span className="text-emerald-400 font-mono text-xs tracking-wider uppercase">Systems Operational</span>
                    </div>
                    
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                        Initialize <br /> <span className="text-indigo-500">Protocol.</span>
                    </h1>
                    
                    <p className="text-xl text-slate-400 leading-relaxed mb-12">
                        Ready to upgrade your digital infrastructure? Skip the agency fluff. You talk directly to the Lead Engineer.
                    </p>

                    {/* Contact Methods */}
                    <div className="space-y-6">
                        {/* WhatsApp */}
                        <a href="https://wa.me/19395399445" target="_blank" className="group block p-6 bg-slate-900/40 border border-white/5 rounded-2xl hover:border-emerald-500/50 hover:bg-slate-900/60 transition-all">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-emerald-500 group-hover:text-emerald-400">
                                        <MessageCircle size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold text-lg">Priority Chat</h3>
                                        <p className="text-slate-400 text-sm">WhatsApp Direct Line</p>
                                    </div>
                                </div>
                                <ArrowRight className="text-slate-600 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
                            </div>
                        </a>

                        {/* Email */}
                        <a href="mailto:lapgonzalez96@gmail.com" className="group block p-6 bg-slate-900/40 border border-white/5 rounded-2xl hover:border-indigo-500/50 hover:bg-slate-900/60 transition-all">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-indigo-500 group-hover:text-indigo-400">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold text-lg">Email Inquiry</h3>
                                        <p className="text-slate-400 text-sm">lapgonzalez96@gmail.com</p>
                                    </div>
                                </div>
                                <ArrowRight className="text-slate-600 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" />
                            </div>
                        </a>
                    </div>
                </motion.div>

                {/* RIGHT COLUMN: The Web3Forms Input Area */}
                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative"
                >
                    <div className="p-8 md:p-10 bg-slate-900/80 border border-white/10 rounded-3xl shadow-2xl relative overflow-hidden backdrop-blur-sm">
                        
                        <h3 className="text-2xl font-bold text-white mb-6 relative z-10">Project Parameters</h3>
                        
                        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                            {/* Honey Pot to stop spam bots */}
                            <input type="checkbox" name="botcheck" className="hidden" style={{display: 'none'}} />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Name</label>
                                    <input 
                                      type="text" 
                                      name="name"
                                      value={formData.name}
                                      onChange={handleChange}
                                      required
                                      placeholder="John Doe" 
                                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" 
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email</label>
                                    <input 
                                      type="email" 
                                      name="email"
                                      value={formData.email}
                                      onChange={handleChange}
                                      required
                                      placeholder="john@company.com" 
                                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" 
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Project Type</label>
                                <select 
                                  name="projectType"
                                  value={formData.projectType}
                                  onChange={handleChange}
                                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-300 focus:outline-none focus:border-indigo-500 transition-colors"
                                >
                                    <option>Web Application Development</option>
                                    <option>Website Redesign</option>
                                    <option>QA Automation Suite</option>
                                    <option>IT Infrastructure</option>
                                    <option>Other / Consultation</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Briefing</label>
                                <textarea 
                                  rows={4} 
                                  name="message"
                                  value={formData.message}
                                  onChange={handleChange}
                                  required
                                  placeholder="Tell me about the goals and scope of your system..." 
                                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                                ></textarea>
                            </div>

                            <button 
                                type="submit" 
                                disabled={status === 'loading' || status === 'success'}
                                className={`w-full py-4 font-bold rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg ${
                                    status === 'success' ? 'bg-emerald-600 text-white cursor-default' :
                                    status === 'error' ? 'bg-red-600 hover:bg-red-500 text-white' :
                                    'bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-500/25'
                                }`}
                            >
                                {status === 'loading' ? (
                                    <Loader2 className="animate-spin" size={18} />
                                ) : status === 'success' ? (
                                    <> <CheckCircle size={18} /> Request Transmitted </>
                                ) : status === 'error' ? (
                                    <> <AlertCircle size={18} /> Failed. Retry? </>
                                ) : (
                                    <> <Send size={18} /> Transmit Request </>
                                )}
                            </button>
                        </form>
                    </div>
                </motion.div>

            </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}